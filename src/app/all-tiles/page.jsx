import React from "react";
import Image from "next/image";
import { tilesData } from "@/lib/DataFetch";
import Link from "next/link";
import TilesCardPage from "@/components/Cards/TilesCard";
import SearchCateforyPage from "@/components/SearchCatefory";

const AllTilesPage = async () => {
  const tiles = await tilesData();
  return (
    <div className="bg-[#EEEFE0] text-[#424845]">
      <div className="text-center space-y-2 flex flex-col items-center">
        <h1 className="text-3xl font-bold">All Tiles</h1>
        <p className="opacity-90 text-sm max-w-[50%]">
          Explore our collection of artisanal ceramic, stone, and mosaic tiles
          designed for modern architectural spaces.
        </p>

        <div className="my-4">
          {
            <SearchCateforyPage tiles={tiles} />
          }
        </div>
      </div>

      {/* Cards */}
      <div className="pt-5 pb-10 px-4 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {<TilesCardPage tiles={tiles} />}
        </div>
      </div>
    </div>
  );
};

export default AllTilesPage;
