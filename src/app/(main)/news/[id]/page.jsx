import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

export const generateMetadata = async ({params}) => {
  const {id} = await params;
  const news = await getNewsDetailsById(id);
  return {
    title: `${news.title}`,
    description: `${news.details}`,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto gap-7">
      <div className="col-span-9">
        <div className="p-6 space-y-3 shadow-sm">
          <Image
            src={news.image_url}
            width={500}
            height={500}
            alt={news.title}
            className="w-full mt-2"
          />
          <h2 className="text-xl font-semibold text-[#403F3F]">{news.title}</h2>
          <p className="text-[#706F6F]">{news.details}</p>

          <Link href={`/category/${news.category_id}`}>
            <button className="btn btn-md bg-[#D72050] text-white">
              <BiLeftArrow /> All news in this category
            </button>
          </Link>
        </div>
      </div>
      <div className="col-span-3">
        <RightSideBar />
      </div>
    </div>
  );
};

export default NewsDetailsPage;
