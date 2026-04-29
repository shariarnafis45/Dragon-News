import NavBar from "@/components/shared/NavBar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
