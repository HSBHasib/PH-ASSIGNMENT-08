"use client";

import { useRouter } from "next/navigation";

const BackButton = ({ children }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="w-[95%] mx-auto flex-1 text-xl bg-[#4B635B] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-[#3d524b] transition-all active:scale-95 duration-400"
    >
      {children}
    </button>
  );
};

export default BackButton;
