import { NextRequest, NextResponse } from 'next/server'

// レート制限用のシンプルなメモリストア（本番環境ではRedis等を使用）
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(request: NextRequest): string {
  // IPアドレスを取得（プロキシ経由も考慮）
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const ip = forwarded ? forwarded.split(',')[0].trim() : realIp || 'unknown'
  return ip
}

function checkRateLimit(key: string): boolean {
  const now = Date.now()
  const limit = rateLimitStore.get(key)

  if (!limit || now > limit.resetTime) {
    // 新規または期限切れ：5分間で10リクエストまで
    rateLimitStore.set(key, { count: 1, resetTime: now + 5 * 60 * 1000 })
    return true
  }

  if (limit.count >= 10) {
    return false // レート制限超過
  }

  limit.count++
  return true
}

function sanitizeInput(input: string): string {
  // XSS対策：HTMLタグを除去
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/[<>'"]/g, '')
    .trim()
    .substring(0, 10000) // 最大長を制限
}

export async function POST(request: NextRequest) {
  try {
    // レート制限チェック
    const rateLimitKey = getRateLimitKey(request)
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, company, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // 入力値のサニタイズ
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedCompany = company ? sanitizeInput(company) : ''
    const sanitizedService = service ? sanitizeInput(service) : ''
    const sanitizedMessage = sanitizeInput(message)

    // 長さの検証
    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      )
    }

    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message must be between 10 and 5000 characters' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email notification
    // 2. Save to database
    // 3. Send to CRM
    // For now, we'll simulate success

    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', {
        name: sanitizedName,
        email: sanitizedEmail,
        company: sanitizedCompany || 'Not provided',
        service: sanitizedService || 'Not specified',
        message: sanitizedMessage,
        timestamp: new Date().toISOString()
      })
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}