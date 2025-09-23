'use client'

export const dynamic = 'force-static'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import { API_ENDPOINTS } from '@/constants'

export const metadata = {
  title: 'Contact | iAcademy',
}

export default function ContactPage() {
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    setStatus('Submitting...')
    try {
      const res = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.message || 'Failed')
      setStatus('Thanks! We will get back to you soon.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h1>

      <form onSubmit={onSubmit} className="max-w-xl space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input name="name" required className="w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" required className="w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" rows={5} required className="w-full border rounded-md px-3 py-2" />
        </div>
        <Button type="submit">Send Message</Button>
        {status && <p className="text-sm text-gray-600">{status}</p>}
      </form>
    </main>
  )
}
