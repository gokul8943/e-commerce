import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowRight, CreditCard, Gift, Shield, Truck } from 'lucide-react';

const CartPaymentDetails = () => {
  const [promoCode, setPromoCode] = useState('');
  
  // Sample cart data
  const cartSummary = {
    subtotal: 399.98,
    shipping: 15.00,
    tax: 32.00,
    discount: 40.00
  };

  const total = cartSummary.subtotal + cartSummary.shipping + cartSummary.tax - cartSummary.discount;

  return (
    <Card className="bg-white rounded-xl shadow-lg">
      <CardContent className="p-6">
        {/* Order Summary Header */}
        <div className="border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
          <p className="text-gray-500 text-sm mt-1">Prices are inclusive of all taxes</p>
        </div>

        {/* Price Breakdown */}
        <div className="mt-6 space-y-4">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="font-medium text-gray-900">${cartSummary.subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span className="font-medium text-gray-900">${cartSummary.shipping.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-gray-600">
            <span>Estimated Tax</span>
            <span className="font-medium text-gray-900">${cartSummary.tax.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-green-600">
            <span>Discount Applied</span>
            <span className="font-medium">-${cartSummary.discount.toFixed(2)}</span>
          </div>
        </div>

        {/* Promo Code Input */}
        <div className="mt-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Gift className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Apply
            </button>
          </div>
        </div>

        {/* Total Amount */}
        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold">Total Amount</span>
            <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
            <CreditCard size={20} />
            Proceed to Checkout
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Additional Information */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Truck size={18} className="text-blue-600" />
            <span>Free shipping on orders above $500</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield size={18} className="text-blue-600" />
            <span>Secure checkout powered by Stripe</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartPaymentDetails;