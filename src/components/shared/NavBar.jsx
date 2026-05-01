"use client";
import Image from "next/image";
import React from "react";
import AvaterIcon from "@/assets/user.png";
import NavLink from "@/components/shared/NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = async () => {
    await authClient.signOut();
    redirect("/signin");
  };

  const navLinks = [
    { path: "/", linkName: "Home" },
    { path: "/about", linkName: "About" },
    { path: "/career", linkName: "Career" },
  ];
  return (
    <div className="max-w-7xl mx-auto mt-6 px-5">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((link, i) => (
                <NavLink key={i} pathName={link.linkName} path={link.path} />
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden sm:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link, i) => (
              <NavLink key={i} pathName={link.linkName} path={link.path} />
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {isPending ? <span className="loading loading-infinity loading-xl"></span> : user ? (
            <div className="flex gap-3 items-center">
              <h2>Welcome Back ! {user.name}</h2>
              <Image
                src={user.image || AvaterIcon}
                height={40}
                width={40}
                alt="Avater"
              />
              <button
                onClick={handleSignOut}
                className="btn bg-[#403F3F] text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-2">
              <Link className="btn bg-[#403F3F] text-white" href={"/signin"}>
              Login
            </Link>
            <Link className="btn bg-[#403F3F] text-white" href={"/signup"}>
              Signup
            </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
