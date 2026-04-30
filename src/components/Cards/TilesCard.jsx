import Image from "next/image";
import React from "react";

const TilesCardPage = ({ tiles }) => {
  console.log("tiles card = ", tiles);
  return (
    <>
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className=" p-5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Image Container */}
            <div className="relative h-90 w-full rounded-3xl overflow-hidden mb-6">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-2 px-2 pb-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
                {tile.category}
              </span>
              <h3 className="text-2xl font-bold text-[#1A1D14] leading-tight">
                {tile.title}
              </h3>
              <p className="text-sm leading-relaxed line-clamp-2">
                {tile.description}
              </p>

              <div className="pt-4 overflow-hidden">
                <button className="w-full cursor-pointer py-3.5 bg-[#4B635B] text-[#EEEFE0] rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all duration-400">
                  <span className="font-semibold text-sm">View Details</span>
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default TilesCardPage;
