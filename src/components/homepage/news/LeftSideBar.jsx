import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-semibold text-xl">All Categories</h2>
      <div className="flex flex-col gap-2 mt-5">
        {categories.map((category) => (
          <Link
            className={`${category.category_id === activeId && 'bg-[#E7E7E7] text-[#403F3F]'} btn btn-ghost text-[#9F9F9F]  font-medium`}
            key={category.category_id}
            href={`/category/${category.category_id}`}
          >
            {category.category_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
