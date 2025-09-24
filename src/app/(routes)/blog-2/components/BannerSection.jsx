'use client'

import Image from 'next/image'

export default function BannerSection() {
  return (
    <section className="relative text-white py-20 lg:py-32 overflow-hidden">
      
      <div className="absolute inset-0">
        <Image
          src="/blog/image2.jpg"
          alt="Technology and learning background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
