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
            "url('/images/pjapt (1).webp')",
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
        <div className="text-center">
          <h1 className="text-xl text-[#b89564] font-bold mb-4">
            APARTMENT INTERIOR DESIGN & FITOUT IN DUBAI
          </h1>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Transforming apartments into luxurious and functional living spaces is at the heart of what we do. At WeDo Interior Design & Fitout, we specialize in crafting stunning interiors that reflect your personal style while maximizing every inch of your space.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            TAILORED DESIGNS FOR URBAN LIVING AREAS OF DUBAI 
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Dubai apartments often combine contemporary architecture with sleek modern aesthetics. Our expert interior designers understand the unique needs of apartment living, offering bespoke solutions that enhance both comfort and elegance. From studio apartments to expansive penthouses, we tailor every design to suit the scale and character of your home.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            WHAT OUR APARTMENT INTERIOR DESIGN SERVICES INCLUDE 
          </h2>
          <h3 className="text-start text-LG font-bold mt-2 mb-2">
             Space Optimization
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Dubai apartments often combine contemporary architecture with sleek modern aesthetics. Our expert interior designers understand the unique needs of apartment living, offering bespoke solutions that enhance both comfort and elegance. From studio apartments to expansive penthouses, we tailor every design to suit the scale and character of your home.
          </p>
          <h3 className="text-start text-LG font-bold mt-2 mb-2">
          Premium Finishes and Materials
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          High-quality textures, furniture, and finishes that add sophistication and durability to your interiors.
          </p>
          <h3 className="text-start text-LG font-bold mt-2 mb-2">
          Lighting Design
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Integrating natural light and custom lighting solutions to enhance ambiance and functionality.
          </p>
          <h3 className="text-start text-LG font-bold mt-2 mb-2">
             Storage Solutions
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Creative storage ideas that blend seamlessly into the design for a clutter-free home.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            A PROCESS TAILORED TO YOU 
          </h2>
          <h3 className="text-start text-LG font-bold mt-2 mb-2">
          Consultation
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We start by understanding your preferences, lifestyle, and the vision you have for your apartment.
          </p>
          <h3 className="text-start text-LG font-bold mt-2 mb-2">
             Design Concept
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our designers craft detailed plans and 3D visuals to bring your ideas to life.
          </p>
          <h3 className="text-start text-LG font-bold mt-2 mb-2">
             Execution
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          With precision and attention to detail, we transform your apartment into a stunning, livable masterpiece.
          </p>
       
        </div>
      </div>
    </section>
  );
};

export default Hero;
