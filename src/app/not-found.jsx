"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center bg-[#EEEFE0] text-[#1A1D14]">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#D4E4D4] rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-[#E8E9DA] rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-[150px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#4B635B]/20 to-[#4B635B]/50 opacity-50">
          404
        </h1>

        <div className="mt-[-40px]">
          <h2 className="text-3xl font-bold text-[#1A1D14] mb-2">
            Lost in the Gallery?
          </h2>
          <p className="text-[#4B635B] max-w-sm mx-auto mb-8 opacity-80">
            The specific surface or page you are seeking doesn't exist or has been moved. Let's find your way back.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-10 py-4 bg-[#4B635B] hover:bg-[#3d524b] text-white rounded-2xl font-semibold shadow-lg hover:shadow-[#4B635B]/20 transition-all duration-300 active:scale-95"
            >
              Back to Home
            </Link>
            <button
              onClick={() => router.back()}
              className="px-10 py-4 bg-[#E8E9DA] hover:bg-[#D4E4D4] text-[#4B635B] rounded-2xl font-bold transition-all active:scale-95"
            >
              Go Back
            </button>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#4B635B]/40">
            • Tiles Gallery • 
          </p>
        </div>
      </div>
    </div>
  );
}
