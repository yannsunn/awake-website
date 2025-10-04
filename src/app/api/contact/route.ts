import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
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
        name,
        email,
        company: company || 'Not provided',
        service: service || 'Not specified',
        message,
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