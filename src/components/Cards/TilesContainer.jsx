"use client";
import React, { useState } from "react";
import SearchCategoryPage from "@/components/SearchCategory";
import TilesCardPage from "@/components/Cards/TilesCard";

const TilesContainer = ({ initialTiles }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTiles = initialTiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="my-4">
        <SearchCategoryPage 
            setSearchTerm={setSearchTerm} 
            tiles={initialTiles} 
        />
      </div>

      {/* Tiles Card */}
      <div className="pt-5 pb-10 px-4 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <TilesCardPage tiles={filteredTiles} searchTerm={searchTerm} />
        </div>
      </div>
    </>
  );
};

export default TilesContainer;
