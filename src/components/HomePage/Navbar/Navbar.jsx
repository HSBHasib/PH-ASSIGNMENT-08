"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/img/logo2.png";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handlesignOut = async () => {
    await authClient.signOut();
    router.push('/');
  };

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  console.log("user data is = ", user);

  return (
    <div className="mt-4 mb-7 bg-[#D1D8BE30] text-[#424845] shadow-sm px-7 py-2.5 rounded-2xl">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex gap-2 items-center">
            <Image
              src={logo}
              alt="logo"
              width={26}
              height={26}
              className="object-cover h-auto w-6"
            />
            <h3 className="text-[#1A1D14] font-bold text-lg">Tiles Gellary</h3>
          </div>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-5 text-sm text-gray-700 font-medium">
          <li>
            <Link
              className={`hover:border-b-2 hover:pb-0.75 hover:border-[#4B635B60] ${pathname === "/" && "border-b-2 pb-0.75 border-[#4B635B]"}`}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`hover:border-b-2 hover:pb-0.75 hover:border-[#4B635B60] ${pathname === "/all-tiles" && "border-b-2 pb-0.75 border-[#4B635B]"}`}
              href={"/all-tiles"}
            >
              All Tiles
            </Link>
          </li>
          <li>
            <Link
              className={`hover:border-b-2 hover:pb-0.75 hover:border-[#4B635B60] ${pathname === "/profile" && "border-b-2 pb-0.75 border-[#4B635B]"}`}
              href={"/profile"}
            >
              My Profile
            </Link>
          </li>
        </ul>

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
            <div className="flex items-center gap-3">
              <Avatar
                  src={user.image}
                  name={user?.name?.charAt(0).toUpperCase()}
                  size="sm"
                />
              <ul className="hidden md:flex items-center gap-3 text-sm font-medium">
                <li className="bg-[#4B635B] active:scale-95 px-5 py-1.5 text-white rounded-sm font-bold">
                    <button onClick={() => handlesignOut()}>LogOut</button>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
