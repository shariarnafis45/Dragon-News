import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

const NewsCard = ({ news }) => {
  return (
    <div className=" rounded-md shadow-sm mb-7">
      {/* Author */}
      <div className="bg-[#F3F3F3] p-3 rounded-md flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image
            src={news.author.img}
            height={40}
            width={40}
            alt="logo"
            className="rounded-full"
          />
          <div>
            <h2 className="font-semibold">{news.author.name}</h2>
            <p className="text-xs">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>
      {/* content */}
      <div className="p-6 space-y-3">
        <h2 className="text-xl font-semibold text-[#403F3F]">{news.title}</h2>
        <Image
          src={news.image_url}
          width={500}
          height={500}
          alt={news.title}
          className="w-full mt-2"
        />
        <p className="text-[#706F6F]">{news.details}</p>
        <Link
          className="btn bg-linear-to-r from-[#FF8C47] to-[#F75B5F] text-white mt-3"
          href={`/news/${news._id}`}
        >
          <button>Read More</button>
        </Link>
        
        <div className="flex justify-between border-t mt-6 border-gray-400/30 pt-4">
          <span className="flex items-center gap-2 text-xl font-medium">
            <FaStar className="text-[#FF8C47]" /> {news.rating.number}
          </span>
          <span className="flex items-center gap-2 text-xl font-medium">
            <IoEye />
            {news.total_view}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
