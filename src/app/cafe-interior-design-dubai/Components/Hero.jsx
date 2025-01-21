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
            "url('/images/karakna (1).webp')",
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
            CAFE INTERIOR DESIGN & FITOUT DUBAI
          </h1>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          A beautifully designed café is more than just a place to grab a coffee—it’s a space where people connect, unwind, and create memories. At WeDo Interior Design & Fitout, we craft captivating café interiors that blend aesthetics, functionality, and your brand’s personality to create a space that stands out in Dubai’s thriving café culture.
           </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            CRAFTING UNIQUE CAFE EXPERIENCE
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Dubai’s café scene is as diverse as its culture, making it essential to have a space that speaks to your target audience. Whether you’re opening a trendy coffee shop, an artisan bakery, or a cozy tea lounge, our expert designers create interiors that reflect your concept and enhance the overall experience for your customers.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            CAFE INTERIOR DESIGN & FITOUT SERVICES IN DUBAI
          </h2>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Concept Development
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Designing interiors that align with your café’s theme and vision.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            Space Planning
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Efficient layouts to maximize seating capacity while ensuring guest comfort and smooth operations.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            Custom Furniture
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Bespoke tables, chairs, and display units that complement your style and ensure durability.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            Unique Lighting
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Ambiance-enhancing lighting tailored to create a warm and inviting atmosphere.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            Material Selection
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Durable, easy-to-maintain surfaces suited for Dubai’s dynamic environment and café operations.
          </p>
        <h3 className="text-lg font-bold mt-2 mb-2">
            Feature Walls & Branding
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Unique design elements that make your café instantly recognizable and Instagram-worthy.
          </p>
        <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            OUR PROCESS
          </h2>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Consultation
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Understanding your concept, target audience, and operational needs.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            Design Development
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          We create mood boards, layouts, and 3D renderings to visualize your café’s unique style.
          </p>
          <h3 className="text-lg font-bold mt-2 mb-2">
            Implementation
          </h3>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Our team manages the project from start to finish, ensuring every detail is perfect.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            WHY CHOOSE US ?
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Dubai’s café market is competitive, and creating a memorable space is key to success. With years of experience designing hospitality interiors, our team knows how to combine creativity and practicality to deliver results that attract customers and elevate your brand.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            DESIGN A CAFE THAT SOUNDS OUT 
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          Whether you’re launching a new café or redesigning an existing one, WeDo Interior Design & Fitout will bring your vision to life with creative and functional designs that reflect Dubai’s vibrant spirit.
          </p>
          <h2 className="text-xl text-[#b89564] font-bold mt-2 mb-2">
            CONTACT US TODAY
          </h2>
          <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
          To sdiscuss your café interior design project in Dubai!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
