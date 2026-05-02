"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import logo from "@/assets/img/logo2.png";
import { authClient } from "@/lib/auth-client";
import { RiMenu3Line } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { useState } from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const router = useRouter();

  const handlesignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  const { data } = authClient.useSession();
  const user = data?.user;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 mb-7 bg-[#D1D8BE30] text-[#424845] shadow-sm px-7 py-2.5 rounded-2xl">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex gap-2 items-center">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              quality={100}
              priority
              className="object-cover h-auto w-6"
            />
            <h3 className="text-[#1A1D14] font-bold text-lg">Tiles Gallery</h3>
          </div>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-5 text-sm text-gray-700 font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/all-tiles">All Tiles</NavLink>
          <NavLink href="/profile">My Profile</NavLink>
        </ul>

        <div className="flex items-center gap-2">
          {/* LogIn Button */}
          {!user ? (
            <div className="flex items-center gap-3">
              <ul className="hidden md:flex items-center gap-3 text-sm font-medium">
                <li className="bg-[#4B635B] active:scale-95 px-5 py-1.5 text-white rounded-sm font-bold">
                  <Link href={"/login"}>LogIn</Link>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2">
                {/* User Profile Img */}
                <div className="h-8 w-8 cursor-pointer rounded-ful hover:scale-110 transition-all duration-500">
                  <Link href="/profile">
                    <Image
                      className="rounded-full w-full h-full object-cover"
                      src={user?.image}
                      alt="profileImg"
                      width={100}
                      height={100}
                      quality={100}
                      priority
                    />
                  </Link>
                </div>

                {/* LogOut */}
                <ul className="hidden md:flex items-center gap-3 text-sm font-medium">
                  <li className="bg-[#4B635B] active:scale-95 px-5 py-1.5 text-white rounded-sm font-bold">
                    <button onClick={() => handlesignOut()}>Log Out</button>
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* Visible on Mobile */}
          <button
            className="md:hidden text-[#4B635B] active:scale-75 transition-all duration-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <GiCrossMark size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dev */}
      {isOpen && (
        <div
          className={`md:hidden absolute top-18 right-0 w-[50%] text-black bg-[#D1D8BE95] border-b border-[#D1D8BE70] rounded-bl-2xl rounded-tl-2xl z-50 pl-4 py-4 shadow-xl`}
        >
          <ul
            onClick={() => setIsOpen(false)}
            className="flex flex-col gap-2 text-sm font-medium"
          >
            {/* Linkg to nagicate other pages */}
            <NavLink href="/">Home</NavLink>
            <NavLink href="/all-tiles">All Tiles</NavLink>
            <NavLink href="/profile">My Profile</NavLink>
            <hr />
            {!user ? (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  className="bg-[#819A9199] p-2 rounded-lg text-center font-bold mr-3"
                >
                  LogIn
                </Link>
              </div>
            ) : (
              <button
                onClick={() => {
                  handlesignOut();
                  setIsOpen(false);
                }}
                className="bg-[#819A9199] p-2 rounded-lg text-center font-bold mr-3"
              >
                Log Out
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
