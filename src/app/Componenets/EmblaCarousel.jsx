"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"; // Note the import without curly braces
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
  const options = {
    loop: true,
    draggable: true,
    threshold: 5,
  };

  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 4000 })]);

  return (
    <div className="embla w-full h-120 overflow-hidden" ref={emblaRef}>
    <div className="embla__container flex h-full">
      
    <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/luxury-interior-design-home-design-dubai.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/dubai-interior-design-companies-apartment-sitting-area.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/dubai-restaurant-interior-design-best-company.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/luxury-apartment-dinning-experience.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/office-reception-interior-design-dubai.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/dubai-atlantis-the-royal-luxury-apartment.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/retaurant-interior-design-dubai.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/dubai-interior-design-companies-luxury-villa.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/best-retaurant-interior-design-dubai.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/palm-jumeirah-luxury-apartment-living-room-interior-design-dubai.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/dubai-luxury-home-interior-design-company.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/dubai-interior-design-company-luxury-villa-sitting-room.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>

      <div className="embla__slide flex items-center justify-center">
        <Image
          src="/images/no-1-house-interior-design-dubai.webp"
          alt="interior design"
          layout="responsive"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      {/* slides */}
    </div>
  </div>
  
  );
}


export default EmblaCarousel;
