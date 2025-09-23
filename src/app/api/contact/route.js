import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body || {}

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }

    // TODO: send email or persist to DB
    // For now, just echo back success
    return NextResponse.json({ success: true, received: { name, email, message } }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Use POST to submit contact form' }, { status: 405 })
}
