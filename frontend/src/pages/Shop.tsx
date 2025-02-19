import { useState } from 'react'
import ProductCard from "@/components/ProductCard"
import { Search } from "lucide-react"

const Shop = () => {
  // Sample products array - replace with your actual products data
  const products = [
    { 
      id: 1, 
      name: "Wireless Headphones", 
      price: 99.99,
      image: "/headphones.jpg",
      category: "Electronics",
      rating: 4.5
    },
    { 
      id: 2, 
      name: "Smart Watch", 
      price: 199.99,
      image: "/watch.jpg",
      category: "Electronics",
      rating: 4.8
    },
    // Add more products as needed
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", "Electronics", "Fashion", "Home", "Books"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-5">
      {/* Header Section */}
      <div className="mb-8 p-3 rounded-md bg-gradient-to-r from-sky-200 via-violet-100 to-blue-400">
        <h1 className=" flex justify-center text-3xl font-bold text-gray-900 mb-4">Shop your Products</h1>
        <p className= " flex justify-center text-gray-600">Discover our amazing collection of products</p>
      </div>

      {/* Filters and Search Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                ${selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria</p>
        </div>
      )}
    </div>
  )
}

export default Shop