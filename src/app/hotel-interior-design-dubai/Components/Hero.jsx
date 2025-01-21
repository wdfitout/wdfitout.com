"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row w-full lg:mt-24 md:mt-24">
      {/* Image Section */}
      <div
        className="bg-cover bg-center h-[250px] sm:h-[300px] md:h-[450px] lg:h-[500px] xl:h-[600px] order-1 w-full md:w-7/12"
        style={{
          backgroundImage:
            "url('/images/dubai-five-star-hotel-bedroom-design.webp')",
        }}
      ></div>

      {/* Text Section */}
      <div
        className="bg-[#121212] text-white px-4 py-8 overflow-y-auto h-[400px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[650px] order-2 w-full md:w-5/12"
        style={{
          scrollbarWidth: "thin", // Firefox-specific
          scrollbarColor: "silver #1a1a1a", // Firefox-specific
        }}
      >
        <style jsx>{`
          /* Custom Scrollbar Styling */
          div::-webkit-scrollbar {
            width: 10px; /* Set the width of the scrollbar */
          }
          div::-webkit-scrollbar-track {
            background-color: #1a1a1a; /* Dark background for the track */
          }
          div::-webkit-scrollbar-thumb {
            background: linear-gradient(
              to right,
              silver 25%,
              transparent 25%,
              transparent 75%,
              silver 75%
            );
            border-radius: 8px; /* Rounded edges for the thumb */
            border: 2px solid black; /* Thin black border around the thumb */
          }
          div::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(
              to right,
              silver 15%,
              transparent 15%,
              transparent 85%,
              silver 85%
            );
            border-color: gray; /* Change border color on hover */
          }
          div::-webkit-scrollbar-thumb:active {
            background: linear-gradient(
              to right,
              silver 35%,
              transparent 35%,
              transparent 65%,
              silver 65%
            );
          }
        `}</style>
        <div className="text-start">
        <h1 className="text-xl text-[#b89564] font-bold mb-4">
            HOTEL INTERIOR DESIGN IN DUBAI
          </h1>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Dubai is synonymous with luxury, and your hotel should embody this spirit to captivate guests from around the world. At WeDo Interior Design & Fitout, we specialize in designing stunning hotel interiors that reflect elegance, comfort, and impeccable hospitality. From boutique hotels to grand resorts, we create spaces that elevate guest experiences and set your property apart.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            DESIGNING UNIQUE GUEST EXPERIENCE
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          In the competitive hospitality market, a hotel’s interior design plays a crucial role in attracting and retaining guests. Our team of experts blends world-class design trends with functional layouts to craft interiors that resonate with Dubai’s sophistication and global appeal.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            WHAT OUR HOTEL INTERIOR DESIGN SPECIALITY
          </h2>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            LOBBY & RECEPTION AREAS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Impressive entry spaces that leave a lasting first impression with grand designs and seamless functionality.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            GUEST ROOMS & SUITS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Luxuriously comfortable interiors that combine aesthetics with practical amenities to create memorable stays.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            RESTAURANTS & BARS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Sophisticated dining spaces designed to enhance ambiance and complement your culinary offerings.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            MEETING & EVENT SPACES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Functional, elegant areas tailored for business conferences, weddings, and other gatherings.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            SPA & WELLNESS AREAS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Tranquil, rejuvenating spaces that reflect your hotel’s commitment to relaxation and well-being.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            CORRIDORS & COMMON AREAS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Thoughtfully designed spaces to maintain the flow and aesthetics throughout the property.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            LIGHTING DESIGN
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Customized lighting solutions that set the perfect mood for every space while highlighting architectural features.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            LUXURY MATERIALS & FINISHES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Premium textures, fabrics, and surfaces that exude elegance and durability.
          </p>
        <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            A CUSTOMIZED DESIGN PROCESS
          </h2>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
          CONSULTATION
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          We start by understanding your hotel’s brand identity, target audience, and operational requirements.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            CONCEPT DEVELOPMENT
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Our designers create mood boards, layouts, and 3D renderings to ensure alignment with your vision.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            Execution
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          From sourcing materials to overseeing construction, we handle every detail to deliver flawless results.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            WHY CHOOSE US ?
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          With Dubai’s reputation as a global hospitality hub, your hotel’s design must be exceptional. Our team combines local expertise with international design trends to craft interiors that not only impress guests but also boost operational efficiency. From timeless elegance to cutting-edge modernity, we deliver designs that elevate your hotel’s brand.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            REDEFINED LUXURY HOSPITALITY
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Let us help you create a hotel interior that becomes a destination in itself. Whether you're opening a new hotel or revamping an existing one, WeDo Interior Design & Fitout will turn your vision into reality with innovative designs that exceed expectations.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            CONTACT US TODAY
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          To discuss your hotel interior design project in Dubai!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
