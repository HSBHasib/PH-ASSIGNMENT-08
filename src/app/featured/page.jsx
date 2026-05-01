import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { tilesData } from "@/lib/DataFetch";
import Link from "next/link";
import TilesCardPage from "@/components/Cards/TilesCard";

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
          <Link href="/all-tiles">
            <button className="hidden md:flex items-center gap-2 text-[#1A1D14] font-semibold cursor-pointer active:scale-95 hover:underline transition-all duration-300">
              View All Collections <ArrowRight size={20} />
            </button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          {<TilesCardPage tiles={data} />}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
