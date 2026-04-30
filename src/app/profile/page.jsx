"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineEdit } from "react-icons/md";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";


const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      {/* Profile Card */}
      <div className="w-full max-w-2xl border-[5px] border-[#E8E9DA] bg-[#EEEFE0] rounded-[3rem] p-10 md:py-15 shadow-xl flex flex-col md:flex-row items-center gap-8">
        <div className="relative group">
          <div className="border-6 border-[#DCE1D4] rounded-full">
            <div className="w-48 h-48 rounded-full overflow-hidden border-5 border-[#EEEFE0] shadow-inner">
              <Image
                src={user?.image}
                alt="ProfileImg"
                width={800}
                height={800}
                quality={100}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Profile Update icon */}
          <Link
            href="/profile/update"
            className="absolute border-5 border-[#EEEFE0] rounded-full bottom-1 right-1 bg-[#4B635B] p-2 text-white shadow-lg hover:scale-110 duration-500 transition-transform"
          >
            <MdOutlineEdit size={20} />
          </Link>
        </div>

        {/* Info Section */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#4B635B] bg-[#CFEACF] px-4 py-1.5 rounded-full">
              {user?.email || "Email"}
            </span>
            <h1 className="text-2xl font-bold text-[#3E4C46] mt-4 tracking-tight ml-2">
              {user?.name || "Name"}
            </h1>
            <p className="text-[#4B635B] mt-3 leading-relaxed opacity-90 max-w-sm ml-2">
              Harmonizing mid-century organic forms with contemporary digital
              minimalism.
            </p>
          </div>

          <div className="flex pt-3 justify-center md:justify-center">
            <Link
              href="/profile/update"
              className="bg-[#4B635B] text-white w-full text-center py-3 rounded-full font-semibold shadow-lg hover:bg-[#3d524b] transition-all active:scale-95"
            >
                Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
