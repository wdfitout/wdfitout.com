import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects">
  <div className="areas w-full mt-10">
    <h2 className="text-white mb-8 text-lg lg:text-6xl font-bold text-center">
      INTERIOR DESIGN DUBAI PROJECTS
    </h2>
        <div className="flex flex-wrap justify-center">

            
        <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-4 relative">
  <Link href={"/home-interior-design"}>
    <Image
     src="/images/home-interior-design-dubai.webp"
     alt="Dubai Interior Design - Luxurious Living Room Design "
     title="Luxurious Living Room Designed by Top Interior Design Dubai Company"
     width={600}
     height={400}
     className="w-full rounded-t-3xl md:rounded-lg lg:rounded-tl-5xl lg:rounded-tr-none lg:rounded-none lg:rounded-l-5xl hover:transform hover:-translate-y-2 transition-transform duration-500"
             style={{ borderTopLeftRadius: '2rem' }}
    />
 <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
  <div className="flex-grow mb-20 px-2">
    <h3 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
      HOME INTERIOR DESIGN
    </h3>
  </div>
</div>
  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
      <p>Elevate your living experience with our premier 
        home Interior Design services in Dubai.
         As a best interior design company we have transformed 
         numerous residences in iconic locations such as
          Emaar Beachfront,Al Manara Center, Penthouse Dubai, 
          Jumeirah Beach Residence, and Atlantis The Royal. 
          We specialize in creating bold bespoke design.</p>
    </div>
</div>

<div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-4 relative">
  <Link href={"/restaurant-interior-design"}>
    <Image
        src="/images/dubai-interior-design-company-restaurant-counter.webp"
        alt="Dubai Interior Design - Modern Restaurant Counter Design "
        title="Modern Restaurant Design by Top Interior Designers in Dubai"
        width={600}
        height={400}
        className="w-full lg:rounded-tr-3xl md:rounded-tr-3xl hover:transform hover:-translate-y-2 transition-transform duration-500"
    />
  <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
  <div className="flex-grow mb-20 px-2">
    <h3 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
      RESTAURANT INTERIOR DESIGN
    </h3>
  </div>
</div>
  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
      <p>Elevate your living experience with our premier 
        home Interior Design services in Dubai.
         As a best interior design company we have transformed 
         numerous residences in iconic locations such as
          Emaar Beachfront,Al Manara Center, Penthouse Dubai, 
          Jumeirah Beach Residence, and Atlantis The Royal. 
          We specialize in creating bold bespoke design.</p>
    </div>
</div>

<div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-4 relative">
  <Link href={"/retail-designs"}>
    <Image
        src="/images/beauty-salon-spa-retail-interior-design.webp"
        alt="Retail Beauty Salon -Design by One of the leading Interior Design Companies in Dubai "
        title="Top Beauty Salon and Spa Design by Interior Design company Dubai"
        width={600}
        height={400}
        className="w-full lg:rounded-bl-3xl md:rounded-bl-3xl hover:transform hover:-translate-y-2 transition-transform duration-500"
        
    />
  <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
  <div className="flex-grow mb-20 px-2">
    <h3 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
      RETAIL DESIGN
    </h3>
  </div>
</div>
  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
      <p>Elevate your living experience with our premier 
        home Interior Design services in Dubai.
         As a best interior design company we have transformed 
         numerous residences in iconic locations such as
          Emaar Beachfront,Al Manara Center, Penthouse Dubai, 
          Jumeirah Beach Residence, and Atlantis The Royal. 
          We specialize in creating bold bespoke design.</p>
    </div>
</div>

<div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-4 relative">
  <Link href={"/commercial-interior-design"}>
    <Image
      src="/images/commercial-office-reception-interior-design-dubai.webp"
      alt="Corporate office reception interior design in Dubai"
      title="Luxury Office Interior Design with Premium Aesthetic in Dubai by We Do Design & Fitout"
      width={600}
      height={400}
      className="w-full rounded-b-3xl md:rounded-lg lg:rounded-br-5xl lg:rounded-bl-none lg:rounded-none lg:rounded-l-5xl hover:transform hover:-translate-y-2 transition-transform duration-500"
      style={{ borderBottomRightRadius: '2rem' }}
      />
  <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
  <div className="flex-grow mb-20 px-2">
    <h3 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
      COMMERCIAL INTERIOR DESIGN
    </h3>
  </div>
</div>
  </Link>
  <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
      <p>Elevate your living experience with our premier 
        home Interior Design services in Dubai.
         As a best interior design company we have transformed 
         numerous residences in iconic locations such as
          Emaar Beachfront,Al Manara Center, Penthouse Dubai, 
          Jumeirah Beach Residence, and Atlantis The Royal. 
          We specialize in creating bold bespoke design.</p>
    </div>
</div>

           </div>
            </div>
        </section>
  )
}
export default Projects;





