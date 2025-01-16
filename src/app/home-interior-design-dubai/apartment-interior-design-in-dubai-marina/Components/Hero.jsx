import React from "react";

const Hero = () => {
  return (
      <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/dmapt (3).webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
            APARTMENT INTERIOR DESIGN IN DUBAI MARINA, DUBAI
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          Dubai is the city of superlatives, is home to some of the 
          world’s most luxurious and unique apartments .As an expert 
          Interior Designer Dubai in the realm of Interior Design,
           We are here to offer insights of Apartment Interior Design project
           Dubai Marina, Dubai.Contact us and Book Your Free Consultation Today
             With WeDo Design & Fitout.							
          </p>
        </div>
      </div>
    </section>
  );
};


export default Hero;

