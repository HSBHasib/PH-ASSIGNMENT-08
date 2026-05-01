import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ children, className, href }) => {
    const pathname = usePathname();
  return (
    <li>
      <Link href={href} className={`hover:border-b-2 hover:pb-0.75 hover:border-[#4B635B60] ${pathname === href && "border-b-2 pb-0.75 border-[#4B635B]"}`}>{children}</Link>
    </li>
  );
};

export default NavLink;
