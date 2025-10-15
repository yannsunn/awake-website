import { NextResponse } from 'next/server';
import { createChatMessages } from '@/lib/chatbot-prompt';
import { MAX_IMAGE_DIMENSION } from '@/lib/imageOptimization';

// 型定義
interface ImageSource {
  type: 'base64';
  data: string;
  media_type?: string;
}

interface TextContent {
  type: 'text';
  text: string;
}

interface ImageContent {
  type: 'image';
  source: ImageSource;
}

type ContentBlock = TextContent | ImageContent;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string | ContentBlock[];
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // 画像サイズチェック（API制限対応）
    const validateImageMessages = (messages: ChatMessage[]) => {
      for (const message of messages) {
        if (message.content && Array.isArray(message.content)) {
          for (const content of message.content) {
            if (content.type === 'image' && content.source?.type === 'base64') {
              // Base64画像のサイズをチェック
              const base64Data = content.source.data;
              if (base64Data) {
                // Base64データから画像のサイズを推定
                const imageSize = Math.floor((base64Data.length * 3) / 4);
                // 大まかな画像サイズの推定（1ピクセルあたり約3バイト）
                const estimatedPixels = Math.sqrt(imageSize / 3);
                
                if (estimatedPixels > MAX_IMAGE_DIMENSION) {
                  throw new Error(`画像のサイズが制限を超えています。最大${MAX_IMAGE_DIMENSION}ピクセルまで対応しています。`);
                }
              }
            }
          }
        }
      }
    };

    try {
      validateImageMessages(messages);
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : '画像サイズエラー' },
        { status: 400 }
      );
    }

    // Claude APIキーの確認
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY is not set');
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      );
    }

    // システムプロンプトを含むメッセージを作成
    const chatMessages = createChatMessages(messages);

    // Claude APIを呼び出す
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: chatMessages[0].content,
        messages: chatMessages.slice(1),
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Claude API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to get response from AI' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const assistantMessage = data.content[0].text;

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
