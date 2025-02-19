import { Trash2, Plus, Minus, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import images from '../assets/images/airdopes1.png'

const CartProductCard = ({ product = {
  id: 1,
  name: "Premium Wireless Headphones",
  price: 199.99,
  originalPrice: 249.99,
  quantity: 1,
  image: images,
  color: "Space Gray",
  size: "One Size",
  brand: "TechPro",
  inStock: true
}}) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Card className="mb-6 hover:shadow-lg transition-all duration-300 border-0 bg-white rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex gap-6">
          {/* Product Image Section */}
          <div className="relative group">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-32 h-32 object-cover rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            {discount > 0 && (
              <div className="absolute -top-2 -left-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-md">
                {discount}%
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm text-blue-600 font-medium">{product.brand}</p>
                <h3 className="font-semibold text-xl text-gray-900">{product.name}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-gray-800"></div>
                    {product.color}
                  </span>
                  <span>|</span>
                  <span>{product.size}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Save for later"
                >
                  <Heart size={20} className="text-gray-400 hover:text-red-500 transition-colors" />
                </button>
                <button 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 size={20} className="text-gray-400 hover:text-red-500 transition-colors" />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">
                  {product.inStock ? "In Stock" : "Low Stock"}
                </div>
                
                <div className="flex items-center space-x-1">
                  <div className="flex items-center bg-gray-50 rounded-lg border shadow-sm">
                    <button 
                      className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} className="text-gray-600" />
                    </button>
                    <span className="w-12 text-center font-medium text-gray-900">{product.quantity}</span>
                    <button 
                      className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">
                  ${(product.price * product.quantity).toFixed(2)}
                </div>
                {product.originalPrice > product.price && (
                  <div className="text-sm text-gray-500 line-through">
                    ${(product.originalPrice * product.quantity).toFixed(2)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartProductCard;