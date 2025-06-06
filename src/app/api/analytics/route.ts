import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { pagePath, referrer } = body

    // ページビューを記録
    await prisma.pageView.create({
      data: {
        pagePath: pagePath || '/',
        referrer: referrer || null,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to track page view' },
      { status: 500 }
    )
  }
}