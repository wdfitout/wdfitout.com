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
            "url('/images/dtrest (1).webp')",
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
            RESTAURANT INTERIOR DESIGN & FITOUT COMPANY DUBAI
          </h1>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Create a dining experience that captivates your customers and keeps them coming back. At WeDo Interior Design & Fitout, we specialize in designing exceptional restaurant interiors that combine aesthetics, functionality, and brand identity to deliver a memorable ambiance.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            PREMIUM DESIGNS TO ELEVATE YOUR RESTAURANT
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Dubai is a hub for culinary diversity and world-class dining experiences. To stand out, your restaurant needs more than great food—it needs an unforgettable atmosphere. Our expert team blends creativity with technical precision to design interiors that perfectly align with your concept, whether it's a casual café, fine dining establishment, or trendy fusion eatery.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            WHAT OUR RESTAURANT INTERIOR DESIGN SERVICES INCLUDE ?
          </h2>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Concept Development
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Translating your restaurant’s vision and brand identity into an immersive design concept
        </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Space Planning
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Efficient layouts that maximize seating capacity while ensuring guest comfort and operational flow.
        </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Lighting Solutions
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Mood-enhancing lighting designs to complement your theme and highlight key areas.
        </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Mterial Selections
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Durable, stylish materials suited for Dubai’s climate and high foot traffic.
        </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Custom Furniture & Fixtures
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Bespoke furniture and decor that match your restaurant’s aesthetic and practical needs.
        </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Unique Decorative Elements
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Statement pieces, textured walls, and artistic installations that create a lasting impression.
        </p>
        <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            A SEAMLESS DESIGN PROCESS
          </h2>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Discovery
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          We begin with a consultation to understand your restaurant’s concept, target audience, and functional requirements.
          </p>
          <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Design & Visulaization
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Our team creates mood boards, layouts, and 3D renders to ensure every detail aligns with your vision.
          </p>
        <h3 className="text-start text-lg font-bold mt-2 mb-2">
            Execution & Delivery
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          From sourcing premium materials to supervising installations, we ensure your restaurant is ready to impress.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            WHY CHOOSE US ?
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          In Dubai’s competitive dining scene, a stunning interior can make all the difference. Our team combines local expertise with global design trends to create spaces that attract diners and elevate your brand. With a proven track record in restaurant design, we ensure every project is tailored to your unique needs and the city’s high standards.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            DESIGN THE ULTIMATE DINING EXPERIENCE
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Whether you're opening a new restaurant or revamping an existing space, WeDo Interior Design & Fitout, will bring your vision to life. From elegant fine dining settings to vibrant, Instagram-worthy interiors, we’ll create a space that delights both guests and staff.
          </p>
          <h2 className="text-start text-xl text-[#b89564] font-bold mt-2 mb-2">
            CONTACT US TODAY
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          To start designing your dream restaurant interior in Dubai!
          </p>

  
        </div>
      </div>
    </section>
  );
};

export default Hero;
