import BackButton from "@/components/BackButton";
import { tilesData } from "@/lib/DataFetch";
import Image from "next/image";
import React from "react";

const SingleTailsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const tiles = await tilesData();
  const targetTiles = tiles?.find((tile) => Number(tile.id) === Number(id));
  const {
    title,
    description,
    image,
    category,
    material,
    dimensions,
    price,
    currency,
    inStock,
  } = targetTiles;

  return (
    <div className="min-h-screen py-10 px-6 md:px-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start text-[#424845]">
        {/* Left Image */}
        <div className="relative aspect-square w-full h-[95vh] overflow-hidden rounded-4xl shadow-2xl">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover transition-transform duration-1000 hover:scale-110"
          />
        </div>

        {/* RIGHT: Details Content */}
        <div className="flex flex-col space-y-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4B635B] bg-[#D4E4D4] px-4 py-1.5 rounded-full">
              {category} Collection
            </span>
            <h1 className="text-5xl md:text-5xl font-semibold text-[#1A1D14] mt-5 tracking-tighter">
              {title}
            </h1>
            <p className="text-lg italic text-[#4B635B] pl-2 mt-2 font-medium">
              Designed by Elara Studio
            </p>
          </div>

          <p className="text-[17px] leading-relaxed max-w-lg pl-2">
            {description}
          </p>

          {/* Tags Section */}
          <div className="flex flex-wrap gap-3 pl-2 -mt-2">
            <span className="px-6 py-2 bg-[#E8E9DA] rounded-full text-xs font-bold uppercase tracking-widest border border-black/5">
              Handmade
            </span>
            <span className="px-6 py-2 bg-[#E8E9DA] rounded-full text-xs font-bold uppercase tracking-widest border border-black/5">
              {material}
            </span>
            <span className="px-6 py-2 bg-[#E8E9DA] rounded-full text-xs font-bold uppercase tracking-widest border border-black/5">
              Eco-Glaze
            </span>
          </div>

          {/* Info */}
          <div className="ml-2 shadow rounded-[2rem] p-10 grid grid-cols-2 gap-y-10 gap-x-6 border border-black/5">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">
                Dimensions
              </h4>
              <p className="text-[#1A1D14] font-bold text-lg">{dimensions}</p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">
                Price
              </h4>
              <p className="text-[#1A1D14] font-bold text-lg">
                {price} {currency}
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold  uppercase tracking-widest mb-1">
                Availability
              </h4>
              <p
                className={`font-bold text-lg ${inStock ? "text-green-700" : "text-red-700"}`}
              >
                {inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">
                Lead Time
              </h4>
              <p className="text-[#1A1D14] font-bold text-lg">2-4 Weeks</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <BackButton>Back</BackButton>
          </div>

          <div className="pt-6 border-t border-black/10 flex justify-between items-center text-xs font-bold tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Certified Quality
            </div>
            <button className="hover:text-black transition-colors underline underline-offset-4 ">
              Inquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTailsDetailsPage;

