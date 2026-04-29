import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getAllCategories, getNewsByCategory } from "@/lib/data";

const NewsPage = async({params}) => {
    const {id} = await params;
    const categories = await getAllCategories();
  const news = await getNewsByCategory(id);
  return (
    <div>
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-12 gap-7 px-5">
        <div className=" col-span-3 px-3">
          <LeftSideBar categories={categories} activeId={id} />
        </div>
        <div className=" col-span-6">
          <h2 className="font-semibold text-xl">Dragon News Home</h2>
          <div className="mt-5">
            {news.map((n) => (
              <div key={n._id} className="p-3 border mb-3 rounded-md">
                <h2>{n.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
