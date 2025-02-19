import CategoryCard from "@/components/CategoryCard"
import HomeBanner from "@/components/HomeBanner"

const HomePage = () => {

  const categories = [
    { id: 1, name: "Electronics", image: "/electronics.jpg" },
    { id: 2, name: "Fashion", image: "/fashion.jpg" },
    { id: 3, name: "Home & Living", image: "/home.jpg" },
    { id: 4, name: "Books", image: "/books.jpg" }
  ];

  return (
    <div>
      <div className="p-2.5">
        <HomeBanner />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-4">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              {...category}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage