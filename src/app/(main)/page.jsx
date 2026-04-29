import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";

const getAllCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data.news_category;
};
const HomePage = async () => {
  const categories = await getAllCategories();
  return (
    <div className="max-w-7xl mx-auto py-10 grid grid-cols-12 gap-7 px-5">
      <div className=" col-span-3 px-3">
        <LeftSideBar categories={categories} activeId={null}/>
      </div>
      <div className="bg-red-100 col-span-6">
        <h2>News</h2>
      </div>
      <div className="col-span-3">
        <RightSideBar/>
        
      </div>
    </div>
  );
};

export default HomePage;
