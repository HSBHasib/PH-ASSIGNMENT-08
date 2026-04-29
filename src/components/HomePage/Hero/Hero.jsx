import React from "react";
import Image from "next/image";
import heroImg from "@/assets/img/hero.png";
import Link from "next/link";

const HeroPage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden rounded-2xl shadow-2xl">
      <Image
        src={heroImg}
        alt="Hero Background"
        fill
        className="object-cover"
        />

      {/* Content on top */}
      <div className="relative z-10 flex flex-col h-full items-center justify-center space-y-4">
        <h1 className="text-[#FAFAEB] text-[55px] leading-14 font-black tracking-tighter">
          Elevate Your Space <br /> with Premium Tiles
        </h1>
        <p className="text-[#EEEFE0] max-w-[45%] text-center opacity-70">
          Discover an curated editorial collection of artisanal surfaces, where
          organic textures meet modern architectural precision.
        </p>
        <Link href='/all-tiles'>
          <button className="bg-[#819A91] text-[#081F19] font-bold text-lg px-6 py-3 rounded-lg active:scale-95 cursor-pointer">Browse Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;
