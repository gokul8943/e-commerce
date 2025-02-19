import { ShoppingBag, ArrowLeft } from 'lucide-react';
import CartProductCard from '../components/CartProductCard';
import CartPaymentDetails from '../components/CartPaymentDetails';

const Cart = () => {
 
  const cartItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      originalPrice: 249.99,
      quantity: 1,
      image: "/api/placeholder/200/200",
      color: "Space Gray",
      size: "One Size",
      brand: "TechPro",
      inStock: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 159.99,
      originalPrice: 199.99,
      quantity: 1,
      image: "/api/placeholder/200/200",
      color: "Black",
      size: "Standard",
      brand: "FitTech",
      inStock: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <ShoppingBag className="text-blue-600" />
              Shopping Cart
            </h1>
            <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-medium">
              <ArrowLeft size={20} />
              Continue Shopping
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Cart Items ({cartItems.length})
                </h2>
                <span className="text-sm text-gray-500">
                  Price updated 2 mins ago
                </span>
              </div>
              
              <div className="space-y-4">
                {cartItems.map(item => (
                  <CartProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>

            {/* Shipping Protection */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <ShoppingBag className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Free Shipping Protection</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Add $75.00 more to your cart to qualify for free shipping
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details Section */}
          <div className="lg:w-96">
            <div className="sticky top-8">
              <CartPaymentDetails />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;