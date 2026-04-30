import { IoSearchSharp } from "react-icons/io5";
import React from "react";

const SearchCateforyPage = ({ tiles }) => {
  return (
    <div className="w-full flex flex-col items-center px-4">
      <div className="w-full max-w-2xl mb-10">
        <div className="flex items-center  bg-[##EFF0E1] rounded-full p-2 pl-6 shadow-sm border border-black/5">
          <IoSearchSharp className="text-[#4B635B] mr-2" size={23} />
          <input
            type="text"
            placeholder="Search by tile title, material, or style..."
            className="w-full bg-transparent outline-none text-[#42484550] placeholder:text-[#42484550] text-sm md:text-base"
          />
          <button className="bg-[#4B635B] text-white px-8 py-3 rounded-full font-medium hover:bg-[#3d524b] transition-all active:scale-95 duration-300">
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center w-full gap-4 ">
        <button className="px-6 py-1.5 bg-[#D4E4D4] transition] rounded-full text-sm font-medium text-[#424845]">
          All Category
        </button>
        {tiles.map((cat, index) => (
          <button
            key={index}
            className={`px-6 py-1.5 bg-[#E8E9DA] rounded-full text-sm font-medium text-[#424845] hover:bg-[#D4E4D4] transition-all`}
          >
            {cat.category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchCateforyPage;
