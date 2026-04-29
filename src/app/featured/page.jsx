import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { tilesData } from "@/lib/DataFetch";

const FeaturedCollections = async () => {
  const tiles = await tilesData();
  const data = tiles.slice(0, 4);
  return (
    <section className="bg-[#EEEFE0] text-[#424845] py-16 px-4 md:px-16">
     <div>
        {/* Header Section */}
        <div className="flex justify-between items-end mb-9">
          <div>
            <h2 className="text-4xl font-bold text-[#1A1D14] tracking-tight mb-2">
              Featured Collections
            </h2>
            <p className="text-lg">
              Curated selections for sophisticated interiors
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#1A1D14] font-semibold cursor-pointer active:scale-95 hover:underline transition-all duration-300">
            View All Collections <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {data.map((tile) => (
            <div
              key={tile.id}
              className=" p-5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 group border-2 border-[#EEEFE090]"
            >
              {/* Image Container */}
              <div className="relative h-90 w-full rounded-3xl overflow-hidden mb-6">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-contain rounded-3xl"
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
                    <span className="font-semibold text-sm">View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
