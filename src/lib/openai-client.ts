/**
 * OpenAI API クライアント
 *
 * GPT-4, GPT-3.5-turbo, Codex などを使用できます
 */

import OpenAI from 'openai';

// OpenAI クライアントの遅延初期化
let openaiInstance: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!openaiInstance) {
    openaiInstance = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || '',
    });
  }
  return openaiInstance;
}

/**
 * チャット補完（GPT-4 / GPT-3.5-turbo）
 */
export async function chatCompletion(
  messages: { role: 'system' | 'user' | 'assistant'; content: string }[],
  options?: {
    model?: 'gpt-4' | 'gpt-4-turbo' | 'gpt-3.5-turbo';
    temperature?: number;
    maxTokens?: number;
  }
) {
  const openai = getOpenAI();
  const response = await openai.chat.completions.create({
    model: options?.model || 'gpt-4',
    messages: messages,
    temperature: options?.temperature || 0.7,
    max_tokens: options?.maxTokens || 1000,
  });

  return response.choices[0]?.message?.content || '';
}

/**
 * コード生成（Codex）
 */
export async function generateCode(
  prompt: string,
  options?: {
    language?: string;
    temperature?: number;
  }
) {
  const systemPrompt = options?.language
    ? `You are an expert ${options.language} programmer. Generate clean, efficient, and well-documented code.`
    : 'You are an expert programmer. Generate clean, efficient, and well-documented code.';

  return chatCompletion(
    [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: prompt },
    ],
    {
      model: 'gpt-4',
      temperature: options?.temperature || 0.3,
      maxTokens: 2000,
    }
  );
}

/**
 * テキスト補完（レガシー）
 */
export async function textCompletion(
  prompt: string,
  options?: {
    model?: string;
    temperature?: number;
    maxTokens?: number;
  }
) {
  const openai = getOpenAI();
  const response = await openai.completions.create({
    model: options?.model || 'gpt-3.5-turbo-instruct',
    prompt: prompt,
    temperature: options?.temperature || 0.7,
    max_tokens: options?.maxTokens || 1000,
  });

  return response.choices[0]?.text || '';
}

/**
 * 画像生成（DALL-E）
 */
export async function generateImage(
  prompt: string,
  options?: {
    size?: '256x256' | '512x512' | '1024x1024' | '1792x1024' | '1024x1792';
    quality?: 'standard' | 'hd';
    model?: 'dall-e-2' | 'dall-e-3';
  }
) {
  const openai = getOpenAI();
  const response = await openai.images.generate({
    model: options?.model || 'dall-e-3',
    prompt: prompt,
    size: options?.size || '1024x1024',
    quality: options?.quality || 'standard',
    n: 1,
  });

  return response.data?.[0]?.url || '';
}

/**
 * 音声認識（Whisper）
 */
export async function transcribeAudio(audioFile: File) {
  const openai = getOpenAI();
  const response = await openai.audio.transcriptions.create({
    file: audioFile,
    model: 'whisper-1',
  });

  return response.text;
}

/**
 * テキスト読み上げ（TTS）
 */
export async function textToSpeech(
  text: string,
  options?: {
    voice?: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
    model?: 'tts-1' | 'tts-1-hd';
  }
) {
  const openai = getOpenAI();
  const response = await openai.audio.speech.create({
    model: options?.model || 'tts-1',
    voice: options?.voice || 'alloy',
    input: text,
  });

  return response.body;
}

/**
 * Embeddings（ベクトル化）
 */
export async function createEmbedding(text: string) {
  const openai = getOpenAI();
  const response = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: text,
  });

  return response.data[0]?.embedding || [];
}

/**
 * モデレーション（コンテンツチェック）
 */
export async function moderateContent(text: string) {
  const openai = getOpenAI();
  const response = await openai.moderations.create({
    input: text,
  });

  return response.results[0];
}
