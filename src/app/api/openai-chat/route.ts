/**
 * OpenAI Chat API ルート
 *
 * POST /api/openai-chat
 *
 * Body: { message: string, model?: string }
 */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { chatCompletion } from '@/lib/openai-client';

// Node.js runtime (OpenAI SDK互換性のため)
export const runtime = 'nodejs';

// リクエストボディのバリデーションスキーマ
const requestSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty').max(2000, 'Message too long'),
  model: z.enum(['gpt-4', 'gpt-4-turbo', 'gpt-3.5-turbo']).optional().default('gpt-4'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Zodバリデーション
    const validationResult = requestSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          }))
        },
        { status: 400 }
      );
    }

    const { message, model } = validationResult.data;

    // OpenAI API キーの確認
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    // チャット補完
    const response = await chatCompletion(
      [
        {
          role: 'system',
          content:
            'あなたは株式会社Awakeのカスタマーサポートです。丁寧で親切な対応を心がけてください。',
        },
        { role: 'user', content: message },
      ],
      {
        model,
        temperature: 0.7,
        maxTokens: 1000,
      }
    );

    return NextResponse.json({
      response,
      model,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('OpenAI API Error:', error);

    return NextResponse.json(
      {
        error: 'Failed to process chat request',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
