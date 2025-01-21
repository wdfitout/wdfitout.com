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
            "url('/images/manalajaj (1).webp')",
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
            LUXURY BOUTIQUE DESIGNS IN DUBAI, UAE
          </h1>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          A boutique is more than just a store—it’s a curated space that reflects your brand's personality and offers customers a unique shopping experience. At [Your Company Name], we specialize in designing stylish, functional, and memorable boutique interiors that captivate your clientele and set your brand apart in Dubai’s dynamic retail market.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            DESIGNING LUXURY SHOPPING EXPERIENCE
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Dubai is a hub of luxury and innovation, making it essential for your boutique to stand out. Our team combines creative vision with practical expertise to design interiors that align with your brand’s aesthetic, showcase your products beautifully, and create an inviting atmosphere that keeps customers coming back.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            Wedo BOUTIQUE INTERIOR DESIGN INCLDING
          </h2>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            SPACE PLANNING
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Optimized layouts to maximize product display, customer flow, and functionality in limited spaces.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            CUSTOM DISPLAY FIXTURES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Bespoke shelving, racks, and display units that enhance product visibility and fit your boutique’s style.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            LIGHTING SOLUTIONS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Strategically placed lighting to highlight products and create a welcoming ambiance.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            MATERIAL & FINISH SELECTION
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Luxurious, durable materials that exude quality and align with your brand identity.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            WINDOW DISPLAYS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Eye-catching designs to attract customers and communicate your brand’s message.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            CHANGING ROOMS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Comfortable and stylish fitting areas that enhance the customer experience.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            SEATING & LOUNGE AREAS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Thoughtfully designed spaces to provide comfort and encourage longer visits.
          </p>
          
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            OUR DESIGN PROCESS
          </h2>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            CONSULTATION
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          We begin by understanding your brand, target audience, and unique vision for your boutique.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            DESIGN DEVELOPMENT
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Our team creates detailed layouts, mood boards, and 3D visualizations to bring your concept to life.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            IMPLEMENTATION
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          From sourcing premium materials to supervising installations, we ensure every detail is executed flawlessly.
          </p>

          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            WHY CHOOSE US?
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          In Dubai’s competitive retail landscape, a well-designed boutique can be the key to your success. With years of experience designing retail spaces, we understand the importance of balancing aesthetics and functionality. Whether your boutique caters to luxury fashion, jewelry, or niche products, our designs will elevate your space and enhance your brand.
          </p>

          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            ELEVATE YOUR BOUTIQUE EXPERIENCE
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Let us help you create a boutique interior that is as unique as your brand. Whether you’re launching a new boutique or revamping an existing one, [Your Company Name] is here to design a space that leaves a lasting impression.
          </p>

          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            CONTACT US TODAY
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          To start designing your dream boutique in Dubai!
          </p>
      
        </div>
      </div>
    </section>
  );
};

export default Hero;
