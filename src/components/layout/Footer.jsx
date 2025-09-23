 'use client'
 
 import Link from 'next/link'
 import Image from 'next/image'
 import { SITE_CONFIG, FOOTER_LINKS, CONTACT_INFO } from '@/constants'
 
 export default function Footer() {
   return (
     <footer className="bg-white text-gray-900 border-t">
       <div className="container mx-auto px-4 py-10">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
           {/* Left: Logo + Contact */}
           <div className="md:col-span-5 space-y-4">
             <Link href="/" className="inline-flex items-center space-x-3">
               <Image src="/logo.jpg" alt="iAcademy" width={140} height={44} className="h-10 w-auto rounded" />
             </Link>
 
             <div className="mt-2">
               <span className="inline-block text-xs px-3 py-1 bg-green-200 text-green-900 rounded-full">Contact us</span>
             </div>
             <div className="text-sm text-gray-700 space-y-1">
               <p>Email: {CONTACT_INFO.email}</p>
               <p>Phone: {CONTACT_INFO.phone}</p>
               <p>Address: {CONTACT_INFO.address}</p>
             </div>
           </div>
 
           {/* Middle: Links */}
           <div className="md:col-span-3">
             <nav className="space-y-2">
               {FOOTER_LINKS.map((l) => (
                 <div key={l.href}>
                   <Link href={l.href} className="text-gray-700 hover:text-gray-900 underline-offset-4 hover:underline">
                     {l.label}
                   </Link>
                 </div>
               ))}
             </nav>
 
             {/* Social icons */}
             <div className="flex items-center gap-4 mt-6">
               <a href="#" aria-label="LinkedIn" className="text-gray-700 hover:text-black">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.1c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V24h-4V8z"/></svg>
               </a>
               <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-black">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12"/></svg>
               </a>
               <a href="#" aria-label="Twitter" className="text-gray-700 hover:text-black">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.36 8.54 8.54 0 0 1-2.7 1.03A4.26 4.26 0 0 0 16.1 4c-2.36 0-4.27 1.9-4.27 4.26 0 .33.04.65.11.96A12.1 12.1 0 0 1 3.15 5.1a4.27 4.27 0 0 0-.58 2.14c0 1.48.76 2.78 1.9 3.54-.71-.02-1.38-.22-1.96-.54v.06c0 2.07 1.47 3.8 3.42 4.19-.36.1-.75.15-1.14.15-.28 0-.55-.03-.82-.08.55 1.73 2.15 2.99 4.05 3.02A8.56 8.56 0 0 1 2 19.54 12.07 12.07 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.36 8.36 0 0 0 22.46 6z"/></svg>
               </a>
             </div>
           </div>
 
           {/* Right: Newsletter */}
           <div className="md:col-span-4">
             <div className="rounded-xl bg-green-400/80 p-6">
               <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks for subscribing!');}} className="flex gap-3">
                 <input type="email" required placeholder="Email" className="flex-1 rounded-md px-3 py-2 bg-white/80 text-gray-900 placeholder-gray-600 focus:outline-none" />
                 <button type="submit" className="px-4 py-2 rounded-md bg-indigo-900 text-white font-medium">Subscribe to news</button>
               </form>
             </div>
           </div>
         </div>
 
         <div className="border-t mt-10 pt-6 text-center text-sm text-gray-600">
           <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
         </div>
       </div>
     </footer>
   )
 }
