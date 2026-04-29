import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { tilesData } from "@/lib/DataFetch";
import Link from "next/link";

const AllTilesPage = async () => {
  const tiles = await tilesData();
  return (
    <div className="bg-[#EEEFE0] text-[#424845]">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">All Tiles</h1>
        <p className="opacity-90 text-sm max-w-[50%] mx-auto">
          Explore our collection of artisanal ceramic, stone, and mosaic tiles
          designed for modern architectural spaces.
        </p>
      </div>
      <section className="pt-5 pb-10 px-4 md:px-16">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                    <button className="w-full cursor-pointer py-3.5 bg-[#4B635B] text-[#EEEFE0] rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95">
                      <span className="font-semibold text-sm">
                        View Details
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllTilesPage;
