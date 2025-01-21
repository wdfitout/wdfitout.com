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
            "url('/images/x.learning (4).webp')",
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
            OFFICE INTERIOR DESIGN & FITOUT COMPANY DUBAI
          </h1>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          In today’s dynamic work environment, a well-designed office is more than just a workspace—it’s a hub for productivity, creativity, and collaboration. At WeDo Interior Design & Fitout, we specialize in crafting innovative office interiors that reflect your company’s culture while optimizing functionality.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            CREATING WORKSPACES THAT INSPIRE SUCCESS
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Dubai’s fast-paced business landscape demands office spaces that stand out. Whether you’re establishing a new office or upgrading an existing one, we design interiors that balance aesthetics, ergonomics, and efficiency. From sleek corporate offices to creative coworking spaces, we tailor each project to suit your needs.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            OUR OFFICE INTERIOR FITOUT SERVICES
          </h2>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Space Planning
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Translating your restaurant’s vision and brand identity into an immersive design concept
        </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Ergonomic Furniture
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Efficient layouts that maximize seating capacity while ensuring guest comfort and operational flow.
        </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Branded Interiors
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Mood-enhancing lighting designs to complement your theme and highlight key areas.
        </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Lighting & Acoustics
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Durable, stylish materials suited for Dubai’s climate and high foot traffic.
        </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Breakout & Wellness Areas
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Bespoke furniture and decor that match your restaurant’s aesthetic and practical needs.
        </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Sustainable Solutions
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Statement pieces, textured walls, and artistic installations that create a lasting impression.
        </p>
        <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            THE DESIGN PROCESS
          </h2>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Consultation
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We take the time to understand your business, operations, and goals.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Design Development
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Using the latest tools, we craft detailed layouts and 3D visualizations tailored to your office needs.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Implementation
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our team oversees every detail, ensuring timely and quality delivery.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            WHY CHOOSE US ?
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          With years of experience designing offices in Dubai, we understand the importance of blending form and function. Our designs create spaces that not only enhance employee satisfaction but also leave a lasting impression on clients and visitors. Whether it’s a modern corporate setting or a vibrant creative studio, we bring your vision to life.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            ELEVATE YOUR WORKSPACE
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          A well-designed office is an investment in your business’s success. Let [WeDo Interior Design & Fitout help you create an inspiring and efficient workspace that supports your team and grows your business in Dubai’s competitive market.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            CONTACT US TODAY
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          To start designing your ideal office interior in Dubai!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
