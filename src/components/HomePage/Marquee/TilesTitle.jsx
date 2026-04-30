import { tilesData } from "@/lib/DataFetch";
import React from "react";
import Marquee from "react-fast-marquee";

const TilesTitlePage = async () => {
  const tiles = await tilesData();

  return (
    <div className="mt-8 mb-7 bg-[#D1D8BE30] text-[#424845] shadow-sm py-5 rounded-lg">
      <Marquee pauseOnHover={true} speed={50}>
        {tiles.map((data) => (
          <p className="mr-20 text-[13px] font-semibold " key={data.id}>
            {
              <>
                New Arrivals:{data.title}
                <span className="mx-3 opacity-40">|</span> 
                Weekly Feature:{data.category} <span className="mx-2 opacity-40">|</span> {data.material} <span className="mx-2 opacity-40">|</span> Join
                the Community...
              </>
            }
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default TilesTitlePage;
