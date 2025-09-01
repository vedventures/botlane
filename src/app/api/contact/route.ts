import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, projectType, message } = body

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check for required environment variables
    const apiKey = process.env.BREVO_API_KEY
    const senderEmail = process.env.BREVO_SENDER_EMAIL || 'noreply@botlane.io'
    const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL || 'admin@botlane.io'

    if (!apiKey) {
      console.error('BREVO_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email to admin via Brevo API
    const adminEmailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: 'BotLane Contact Form' },
        to: [{ email: recipientEmail, name: 'BotLane Admin' }],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #6366f1; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Company:</strong> ${company || 'Not provided'}</p>
              <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            </div>
            
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px;">
              <h3 style="margin-top: 0;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
              Submitted at: ${new Date().toLocaleString()}
            </p>
          </div>
        `
      })
    })

    // Send auto-reply to customer
    const customerReplyResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: 'BotLane Team' },
        to: [{ email: email, name: `${firstName} ${lastName}` }],
        subject: 'Thank you for contacting BotLane - We\'ll be in touch soon!',
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #6366f1; margin-bottom: 20px;">Thank you for reaching out!</h2>
            
            <p>Hi ${firstName},</p>
            
            <p>Thank you for your interest in BotLane's AI-powered marketing solutions. We've received your message and our team will review it shortly.</p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #6366f1;">What happens next?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Our team will review your inquiry within 24 hours</li>
                <li>We'll schedule a discovery call to understand your goals</li>
                <li>You'll receive a custom strategy proposal</li>
              </ul>
            </div>
            
            <p>In the meantime, feel free to explore our <a href="https://botlane.io/shop" style="color: #6366f1;">digital products</a> or learn more <a href="https://botlane.io/about" style="color: #6366f1;">about our team</a>.</p>
            
            <p>Best regards,<br>
            The BotLane Team</p>
            
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 12px;">
              This is an automated response. Please don't reply to this email. 
              If you have urgent questions, call us at +91 9315195701.
            </p>
          </div>
        `
      })
    })

    // Check if emails were sent successfully
    if (!adminEmailResponse.ok || !customerReplyResponse.ok) {
      throw new Error('Failed to send emails via Brevo')
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    // Check if it's a Brevo API error
    if (error instanceof Error && (error.message.includes('API') || error.message.includes('Brevo'))) {
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
