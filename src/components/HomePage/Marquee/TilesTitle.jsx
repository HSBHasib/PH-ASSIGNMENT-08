import { tilesData } from "@/lib/DataFetch";
import React from "react";
import Marquee from "react-fast-marquee";

const TilesTitlePage = async () => {
    const tiles = await tilesData();
    // const data = tiles.slice(0, 4);
  return (
    <div className="mt-8 mb-7 bg-[#D1D8BE30] text-[#424845] shadow-sm py-5 rounded-lg">
      <Marquee pauseOnHover={true} speed={50} >
        {
            tiles.map(data => <p className="mr-8 text-xs font-semibold" key={data.id}>{data.title}</p>)
        }
      </Marquee>
    </div>
  );
};

export default TilesTitlePage;
