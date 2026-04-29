import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="px-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-[#F3F3F3] p-3 rounded-sm gap-2">
        <Link href={"/"}>
          <button className="btn btn-md bg-[#D72050] text-white">Latest</button>
        </Link>
        <Marquee>
          <p>Breaking News Here</p>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
