import Head from 'next/head';
import Image from 'next/image';

export default function DigitalMarketingBanner() {
  return (
    <>
      <Head>
        <title>Certified Digital Marketing Master | Leaderry & IBM</title>
        <meta
          name="description"
          content="Master the Art of Digital Marketing to Grow Brands & Drive Results"
        />
      </Head>

      <div className="relative w-full">
        {/* Banner Image */}
        <Image
          src="/digitalMarketingBanner.png" // <-- use the combined version
          alt="Certified Digital Marketing Master Banner"
          width={1200}
          height={600}
          className="w-full h-auto"
          priority
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug max-w-lg">
            Certified Digital Marketing Master
          </h1>
          <p className="text-base md:text-xl mb-6 max-w-md">
            Master the Art of Digital Marketing to Grow Brands & Drive Results
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-md text-lg transition duration-300">
            Enroll now
          </button>
        </div>
      </div>
    </>
  );
}
