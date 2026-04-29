"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ path, pathName }) => {
  const currentPath = usePathname();
  return (
    <li className={`${path === currentPath ? "border-b-2 border-[#D72050] text-[#D72050]" : ""} mr-3`}>
      <Link href={path}>{pathName}</Link>
    </li>
  );
};

export default NavLink;
