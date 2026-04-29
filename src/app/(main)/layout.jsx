import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import NavBar from "@/components/shared/NavBar";
import React from "react";

const MainLayout = ({children}) => {
  return (
    <>
      <header>
        <Header />
        <BreakingNews/>
        <NavBar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
