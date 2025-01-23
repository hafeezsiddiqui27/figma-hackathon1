"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const Herosection = () => {
  const slides = [
  
    {
      image: "/imagseslide1.png",
      heading: "AUTUMN STYLE",
      subheading: "TRENDING NOW",
      description: "Discover the latest trends for the upcoming season.",
    },
    {
      image: "/image4.png",
      heading: "WINTER WARMERS",
      subheading: "STAY COZY",
      description: "Comfortable and stylish designs for the colder months.",
    },
    {
      image: "/image1.png",
      heading: "WINTER WARMERS",
      subheading: "STAY COZY",
      description: "Comfortable and stylish designs for the colder months.",
    },
    {
      image: "/image2.png",
      heading: "WINTER WARMERS",
      subheading: "STAY COZY",
      description: "Comfortable and stylish designs for the colder months.",
    },
  ];

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[716px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start lg:pl-16 text-white text-center lg:text-left px-4 sm:px-6 md:px-8 bg-gradient-to-t from-black via-transparent to-transparent">
                <h2 className="text-[12px] sm:text-[14px] md:text-[16px] font-semibold tracking-wide mb-2 sm:mb-3">
                  {slide.heading}
                </h2>
                <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[58px] font-bold mb-4 sm:mb-5 leading-tight">
                  {slide.subheading}
                </h1>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed mb-4 sm:mb-6">
                  {slide.description}
                </p>
                <Link href="/products">
                  <button className="px-4 py-2 sm:px-5 sm:py-3 bg-[#2DC071] text-white font-bold rounded hover:bg-green-700 transition-all">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Herosection;
