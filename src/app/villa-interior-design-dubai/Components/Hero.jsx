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
            "url('/images/majanvilla (2).webp')",
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
          TRANSFORMING LUXURY LIVING: VILLA INTERIOR DESIGN SERVICES IN DUBAI</h1>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
          Are you looking forward to lifting your villa interior design in Dubai? There are many interior design companies in Dubai  that offer designs for villas across the United Arab Emirates, but WE DO Interior Design & Fitout are among the best interior design companies in Dubai. We offer our Dubai villa design services in various places so that every project we get can have a unique vision put into it. Our expert team designs beautifully designed splendour villas that make customers feel unmatched charm, comfort, and luxury.
          WE DO Interior Design and Fitout is one of the best villa interior design companies in Dubai, transforming private villas into personalized havens. As a luxury villa interior design company and bespoke high-end designer, we specialize in the design of modern luxury villas embodying both elegance and innovation. Our commitment to exceptional interior design Dubai ensures that every project is tailored to the unique vision and needs of our clients, making us the go-to villa interior design company in Dubai. Whether it's turnkey interior design for villas or villa fit-outs, we bring your dream space to life with unparalleled quality and precision.
          </p>
          <h2 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
          THE ESSENSE OF VILLA INTERIOR DESIGN DUBAI
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h2 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           KEY DESIGN STYLES FOR DUBAI VILLAS
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h2 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           ESSENTIAL ELEMENTS OF VILLA INTERIOR DESIGN
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           HIGH QUALITY MATERIALS
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           SMART HOME INTEGRATION
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           OUTDOOR SPACES
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h2 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           OUR APPROAC TO VILLA INTERIOR DESIGN
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           CONSULTATION
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           CONCEPT CREATION
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           MATERIAL SELECTION
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           PROJECT EXECUTION
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h3 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           HANDOVER
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
           <h2 className="text-lg text-start text-[#9c733c] font-bold mt-2 mb-2">
           OUR APPROAC TO VILLA INTERIOR DESIGN
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-start leading-relaxed">
            WE DO Design & Fitout, as the best interior design company in
            Business Bay, creates exceptional spaces by bringing together
            sophistication and practicality. The reputation of the best
            fitout company in Business Bay is built upon the delivery
            of tailored solutions for clients. Whether it is high-end
            interior fit-out work or efficient fit-out work for an
            office, retail space, or residence, we ensure seamless
            execution and outstanding results.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
