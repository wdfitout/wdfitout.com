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
            "url('/images/tabs (16).webp')",
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
            BEAUTY SALON INTERIOR DESIGN IN DUBAI
          </h1>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          In Dubai’s vibrant beauty industry, a captivating salon interior is essential to attract and retain clients. At WeDo Interior Design & Fitout, we specialize in designing stunning, functional spaces that enhance customer experience and reflect your brand’s elegance and professionalism.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            DESIGNING UNIQUE BEAUTY SALON EXPERIENCE
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          A beauty salon is more than just a service center—it’s a sanctuary for relaxation and transformation. Our expert designers create interiors that blend luxury with practicality, ensuring your salon stands out in Dubai’s competitive market. From intimate boutique salons to expansive wellness centers, we tailor every design to meet your unique requirements.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            BEAUTY SALON INTERIOR DESIGN SERVICES OFFERED BY WeDo
          </h2>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Elegant Layouts
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Thoughtfully designed spaces to balance comfort, privacy, and operational efficiency.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Reception & Waiting Areas
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Welcoming, stylish areas to leave a lasting first impression on your clients.
          </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Treatment Rooms
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Cozy, serene spaces optimized for relaxation and functionality.
          </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Custom Furniture
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Bespoke chairs, stations, and storage units designed for comfort and durability.
          </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Lighting Design
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Soft, flattering lighting for client comfort and to enhance the salon’s ambiance.
          </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Luxurious Materials & Finishes
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          High-quality, easy-to-maintain materials that exude sophistication.
          </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Brand Integration
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Interiors designed to reflect your salon’s unique style and personality.
          </p>
        <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            A STEP BY STEP PROCESS
          </h2>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Consultation
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We begin by understanding your vision, services, and clientele.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Concept Development
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our team creates mood boards, layouts, and 3D renderings that bring your vision to life.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Execution
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          From sourcing premium materials to supervising installations, we ensure every detail aligns with your expectations.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            WHY CHOOSE US ?
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          With Dubai’s thriving beauty and wellness market, standing out is crucial. Our expertise in beauty salon design ensures that your space isn’t just functional but also visually appealing and aligned with global trends. We create interiors that elevate client satisfaction and help your business flourish.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            REFINED BEAUTY WITH EXCEPTIONAL DESIGN
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Let us help you create a salon interior that sets new standards in luxury and service. Whether you’re launching a new salon or revamping an existing one, WeDo Interior Design & Fitout will transform your space into a true work of art.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            CONTACT US TODAY
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          To start designing your dream beauty salon interior in Dubai!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
