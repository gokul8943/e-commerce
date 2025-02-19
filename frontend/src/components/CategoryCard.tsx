import { ArrowRight } from 'lucide-react';
import image from '../assets/images/airdopes1.png'

const CategoryCard = ({
  title = "Premium Electronics",
  itemCount = 120,
  imageUrl = image,
  discount = "20% OFF",
  // featured = true,
  description = "Discover cutting-edge technology and exclusive deals"
}) => {
  return (
    <div className="group relative w-74 rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-500">
      {discount && (
        <div className="absolute top-4 right-4 z-20 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {discount}
        </div>
      )}
      
{/* 
      {featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-lime-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
          <Star className="w-4 h-4" />
          <span>Featured</span>
        </div>
      )} */}

    
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out"
        />
        
   
        <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
              {itemCount} Products
            </span>
            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
              New Arrivals
            </span>
          </div>
        </div>
      </div>

 
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 group-hover:gap-3">
            <span>Explore Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div className="w-8 h-8 rounded-full bg-gray-300" />
            <div className="w-8 h-8 rounded-full bg-gray-400" />
          </div>
        </div>
      </div>


      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
      <div className="absolute -left-8 -top-8 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
    </div>
  );
};

export default CategoryCard;