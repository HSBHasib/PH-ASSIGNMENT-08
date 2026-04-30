import { tilesData } from "@/lib/DataFetch";
import TilesContainer from "@/components/Cards/TilesContainer";

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

          {<TilesContainer initialTiles={tiles} />}
      </div>
    </div>
  );
};

export default AllTilesPage;
