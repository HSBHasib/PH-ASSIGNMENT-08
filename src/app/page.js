import HeroPage from "@/components/HomePage/Hero/Hero";
import TilesTitlePage from "@/components/HomePage/Marquee/TilesTitle";
import FeaturedCollections from "./featured/page";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <TilesTitlePage />
      <FeaturedCollections />
    </div>
  );
}
