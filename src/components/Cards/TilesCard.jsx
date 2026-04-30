import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const TilesCardPage = ({ tiles, searchTerm }) => {
  return (
    <>
      {tiles.length > 0 ? (
        tiles.map((tile) => (
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
                className="object-contain transition-transform duration-1000 hover:scale-110"
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
                <Link href={`/all-tiles/${tile.id}`}>
                  <button className="w-full cursor-pointer py-3.5 bg-[#4B635B] text-[#EEEFE0] rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all duration-400">
                    <span className="font-semibold text-sm">View Details</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-3">
          <div className="h-[40vh] flex flex-col items-center justify-center">
            <div className="animate-pulse mb-2">
              <IoSearchSharp className="text-[#4B635B]" size={90} />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-medium text-[#1A1D14]">
                No results for "{searchTerm}"
              </h3>
              <p className="text-sm text-[#4B635B] opacity-70 md:max-w-[60%] mx-auto">
                We couldn't find what you're looking for. Please try another
                keyword.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TilesCardPage;

