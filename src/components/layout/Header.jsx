'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { NAV_LINKS } from '@/constants'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-200/80 font-sora">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="iAcademy" 
                width={120} 
                height={44} 
                className="h-12 w-auto" 
                priority
              />
            </Link>

            {/* Centered Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      `text-sm font-medium transition-colors duration-200 ${
                        active
                          ? 'text-indigo-700 font-semibold'
                          : 'text-gray-700 hover:text-indigo-600'
                      }`
                    }
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>


            {/* Mobile menu button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64' : 'max-h-0'}`}>
            <nav className="flex flex-col gap-1 py-3 bg-white rounded-lg mt-2 shadow-lg">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={
                      `px-4 py-3 rounded-md transition-colors duration-200 ${
                        active
                          ? 'bg-indigo-50 text-indigo-700 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`
                    }
                  >
                    {link.label}
                  </Link>
                )
              })}
              
            </nav>
          </div>
        </div>
      </header>
      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}