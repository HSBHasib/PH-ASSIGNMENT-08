import React from "react";
import Link from "next/link";

// Skip this part do others work.......................................................


const Category = async ({tiles, searchParams}) => {

    // const {category} = await searchParams;
    // console.log("categoty = ",category);
      // const filteredTiles = searchParams ? tiles.filter(tile => tile?.category?.toLowerCase() === activeCategory?.toLowerCase()) : tiles

  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-4 ">
      <Link href="/all-tiles">
        {/* ${activeCategory ? 'bg-[#E8E9DA]' : 'bg-[#D4E4D4]'} */}
        <button
          className={`px-6 py-1.5 bg-[#D4E4D4] transition] rounded-full duration-500 text-sm font-medium text-[#424845]`}
        >
          All Category
        </button>
      </Link>
      {/* href={`?category=${activeCategory}`} */}
      {tiles.map((cat, index) => (
        <Link
          href={`/`}
        >
          {/* ${activeCategory ? 'bg-[#D4E4D4]' : 'bg-[#E8E9DA]'} */}
          <button
            className={`px-6 py-1.5 rounded-full text-sm font-medium bg-[#E8E9DA] text-[#424845] hover:bg-[#D4E4D4] transition-all hover:scale-105 duration-500`}
          >
            {cat.category}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Category;



// Skip this part do others work.......................................................
