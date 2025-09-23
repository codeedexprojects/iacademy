// Site configuration
export const SITE_CONFIG = {
  name: 'iAcademy',
  description: 'Modern university website built with Next.js',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
}

// Navigation links (Header)
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/courses', label: 'Courses' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact us' },
]

// Footer quick links
export const FOOTER_LINKS = [
  { href: '/about', label: 'About us' },
  { href: '/services', label: 'Services' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/pricing', label: 'Pricing' },
]

// Contact information for footer
export const CONTACT_INFO = {
  email: 'info@iacademy.edu',
  phone: '555-567-8901',
  address: '1234 Main St, Moonstone City, Stardust State 12345',
}

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
}

// Animation constants
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
}
