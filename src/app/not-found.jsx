import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h2 className="text-8xl font-bold text-[#D72050]">404</h2>
      <p className="text-2xl font-bold mt-2 ">Page Not Found</p>
      <Link href={"/"}>
        <button className="btn mt-5 bg-[#D72050] text-white">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
