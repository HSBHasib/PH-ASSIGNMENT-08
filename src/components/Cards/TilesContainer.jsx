"use client";

import React, { useState } from "react";
import TilesCardPage from "@/components/Cards/TilesCard";
import { IoSearchSharp } from "react-icons/io5";

const TilesContainer = ({ initialTiles }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTiles = initialTiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="mt-4 -mb-4">
        {/* Searching by title  */}
        <div className="w-full flex flex-col items-center px-4">
          <div className="max-w-xl md:w-2xl mb-10">
            <div className="flex items-center  bg-[##EFF0E1] rounded-full p-2 pl-6 shadow-sm border border-black/5">
              <IoSearchSharp className="text-[#4B635B] mr-2" size={23} />
              <input
                type="text"
                placeholder="Search by tiles title..."
                className="w-full bg-transparent outline-none text-[#424845] placeholder:text-[#4248450] text-sm md:text-base"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-[#4B635B] text-white px-8 py-3 rounded-full font-medium hover:bg-[#3d524b] transition-all active:scale-95 duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tiles Card */}
      <div className="pt-5 pb-10 px-4 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* tiles={filteredTilesCat} */}
          <TilesCardPage tiles={filteredTiles} searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
};

export default TilesContainer;
