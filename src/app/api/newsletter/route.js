import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { email } = body || {}

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 })
    }

    // TODO: Add email to your newsletter provider (Mailchimp, Resend, etc.)
    return NextResponse.json({ success: true, subscribed: email }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Use POST to subscribe' }, { status: 405 })
}
