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
        <h2 className="font-semibold text-xl">All Categories</h2>
        <div className="flex flex-col gap-2 mt-5">
            {
                categories.map(category => <button className="btn btn-ghost text-[#9F9F9F]  font-medium" key={category.category_id}>{category.category_name}</button>) 
            }
        </div>
      </div>
      <div className="bg-red-100 col-span-6">
        <h2>News</h2>
      </div>
      <div className="bg-red-100 col-span-3">
        <h2>Social</h2>
      </div>
    </div>
  );
};

export default HomePage;
