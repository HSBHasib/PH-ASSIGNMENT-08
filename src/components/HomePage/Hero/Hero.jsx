"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";


const HeroPage = () => {
  const heroImgArr = ["/hr1.png", "/hr2.png", "/hr3.png", "/hr4.png"];
  return (
    <div className="relative md:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
      {/* Using swiperJS */}
      <div className="h-full w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          direction={"horizontal"}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="h-full w-full rounded-2xl relative group"
        >
          {/* show all image from imgarray to display*/}
          {heroImgArr.map((heroimg, idx) => (
            <SwiperSlide key={idx}>
             <div className="relative w-full h-full">
                 <Image
                className="object-cove w-full h-full"
                src={heroimg}
                alt="heroImg"
                width={400}
                height={400}
              />
             {/* For clear text simple darks shadow  */}
             <div className="absolute inset-0 bg-black/30 z-10"></div>
             </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content on top */}
      <div className="absolute inset-0 z-20 flex flex-col h-full items-center justify-center md:space-y-4">
        <h1 className="text-[#FAFAEB] text-[23px] sm:text-[55px] md:leading-14 leading-7 font-black tracking-tighter">
          Elevate Your Space <br /> with Premium Tiles
        </h1>
        <p className="text-[#EEEFE0] mb-2 mt-1 max-[400px]:text-[10px] text-sm md:text-lg max-w-2xl lg:max-w-[45%] md:max-w-[70%] max-w-[85%] text-center opacity-80">
          Discover an curated editorial collection of artisanal surfaces, where
          organic textures meet modern architectural precision.
        </p>
        <Link href="/all-tiles">
          <button className="bg-[#819A91] max-[400px]:text-[11px] text-[#081F19] font-bold text-lg px-4 py-1.5 text-[13px] md:text-[18px] md:px-6 md:py-3 rounded-lg active:scale-95 cursor-pointer transition-all duration-400">
            Browse Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;
