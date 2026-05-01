import NavBar from "@/components/shared/NavBar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="bg-[#F3F3F3]">{children}</main>
    </>
  );
};

export default AuthLayout;
