 /** @type {import('next').NextConfig} */
 const nextConfig = {
   reactStrictMode: true,
   output: 'export',
   images: {
     // For static export, disable the Image Optimization API
     unoptimized: true,
   },
 };
 
 export default nextConfig;
