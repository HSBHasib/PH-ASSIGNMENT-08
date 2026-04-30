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
  const imgArray = ["/hero1.png", "/hero2.png", "/hero3.png", "/hero4.png"];
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl">
      {/* Using swiperJS */}
      <div className="h-full w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          direction={"horizontal"}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{ delay: 3000 }}
          className="h-full w-full rounded-2xl relative group"
        >
          {/* rigth and left icon design */}
          <div className="swiper-button-prev-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-[#4B635B] bg-white/80 p-3 rounded-full shadow-lg hover:bg-[#4B635B]/70 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
            <FaChevronRight />
          </div>
          <div className="swiper-button-next-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-[#4B635B] bg-white/80 p-3 rounded-full shadow-lg hover:bg-[#4B635B]/70 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
            <FaChevronLeft />
          </div>
          
          {/* show all image from imgarray to display*/}
          {imgArray.map((heroimg, idx) => (
            <SwiperSlide key={idx}>
              <Image
                className="w-full h-full rounded-2xl"
                src={heroimg}
                alt="heroImg"
                width={400}
                height={400}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content on top */}
      <div className="absolute top-0 right-40 z-20 flex flex-col h-full items-center justify-center space-y-4">
        <h1 className="text-[#FAFAEB] text-[55px] leading-14 font-black tracking-tighter">
          Elevate Your Space <br /> with Premium Tiles
        </h1>
        <p className="text-[#EEEFE0] max-w-[45%] text-center opacity-70">
          Discover an curated editorial collection of artisanal surfaces, where
          organic textures meet modern architectural precision.
        </p>
        <Link href="/all-tiles">
          <button className="bg-[#819A91] text-[#081F19] font-bold text-lg px-6 py-3 rounded-lg active:scale-95 cursor-pointer transition-all duration-400">
            Browse Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;

