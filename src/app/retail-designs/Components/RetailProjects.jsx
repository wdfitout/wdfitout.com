import React from "react";
import Link from "next/link";
import Image from "next/image";

const RetailProjects = () => {
  return (
    <section id="#projects">
   <div className="projects w-full mt-10">
   <div className="flex flex-wrap justify-center">
        
      <div className="w-full px-2 sm:w-1/2 mb-4 relative">
  <Link href="retail-designs/peaky-blinders">
    <Image
       src="/images/retail (2).webp"
      alt="Residential Project"
      width={700}
      height={300}
      className="w-full rounded-t-3xl md:rounded-lg lg:rounded-tl-5xl lg:rounded-tr-none lg:rounded-none lg:rounded-l-5xl hover:transform hover:-translate-y-2 transition-transform duration-500"
              style={{ borderTopLeftRadius: '2rem' }}
    />
 <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
  <div className="flex-grow mb-20 px-2">
    <h2 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
      PEAKY BLINDERS BARBER
    </h2>
  </div>
</div>

  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
    <p>Feel like a Peaky Blinder in Dubai! WE DO Interior Design & Fitout made this barber shop look just like the one from the famous TV show. It's stylish and cool, with decorations that remind you of the Shelby family. WE DO make your dream space come true in Dubai. Call us today!
      </p>
  </div>
</div>

<div className="w-full px-2 sm:w-1/2 mb-4 relative">
<Link href="retail-designs/classy-ym">
    <Image
       src="/images/retail (3).webp"
      alt="Residential Project"
      width={700}
      height={300}
      className="w-full lg:rounded-tr-3xl hover:transform hover:-translate-y-2 transition-transform duration-500"
    />
 <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
  <div className="flex-grow mb-20 px-2">
    <h2 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
      CLASSY Y.M RETAIL SHOP
    </h2>
  </div>
</div>
  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
    <p>WE DO Interior Design & Fitout created a stylish and elegant shopping experience for Classy YM in Dubai. The design reflects the brand's focus on high-quality fashion, with a layout that makes browsing clothes a breeze. WE DO, your one-stop shop for Dubai interior design, helps businesses like Classy YM stand out. Want a stunning retail space? Contact us today!</p>
  </div>
</div>

<div className="w-full px-2 sm:w-1/2 mb-4 relative">
<Link href="retail-designs/manal-ajaj">
    <Image
       src="/images/retail (4).webp"
      alt="Residential Project"
      width={700}
      height={300}
      className="w-full rounded-b-3xl md:rounded-lg lg:rounded-bl-5xl lg:rounded-bl-none lg:rounded-none lg:rounded-l-5xl hover:transform hover:-translate-y-2 transition-transform duration-500"
      style={{ borderBottomRightRadius: '2rem', borderBottomLeftRadius: '2rem' }}
/>
 <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
  <div className="flex-grow mb-20 px-2">
    <h2 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
      MANAL AJAJ BOUTIQUE
    </h2>
  </div>
</div>

  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
    <p>WE DO Interior Design & Fitout brought Manal Ajaj's dream home to life in Dubai! The design reflects Manal's unique style, creating a space that's both beautiful and comfortable. WE DO, Dubai's interior design experts, specialize in turning ideas into reality. Let WE DO help you create your dream home too!</p>
  </div>
</div>

      </div>
    </div>
  </section>
);
};

export default RetailProjects;