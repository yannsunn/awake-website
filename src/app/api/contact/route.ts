import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    // バリデーション
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { success: false, error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    // データベースに保存
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        company: company || null,
        service,
        message,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました。担当者よりご連絡いたします。',
      inquiryId: inquiry.id,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'サーバーエラーが発生しました' },
      { status: 500 }
    )
  }
}