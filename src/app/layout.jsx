 import '@/styles/globals.css'
 import Header from '@/components/layout/Header'
 import Footer from '@/components/layout/Footer'
 
 export const metadata = {
   title: 'iAcademy - University Web',
   description: 'Modern university website built with Next.js',
 }
 
 export default function RootLayout({ children }) {
   return (
     <html lang="en">
       <body className="antialiased min-h-screen flex flex-col">
         <Header />
         <div className="flex-1">
           {children}
         </div>
         <Footer />
       </body>
     </html>
   )
 }
