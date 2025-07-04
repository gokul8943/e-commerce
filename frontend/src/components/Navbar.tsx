import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  ShoppingCart,
  Search,
  User,
  Heart,
  Menu,
  X,
  ShoppingBag
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  console.log(setCartCount);

  const categories = [
    "Electronics",
    "Clothing",
    "Home & Living",
    "Books",
    "Sports",
    "Beauty"
  ];
  const handleHome = () => {
    navigate('/')
  }
  const handleShop = () => {
    navigate('/shop')
  }
  const handleCart = () => {
    navigate('/cart')
  }

  const isUser = false;

  return (
    <nav className="border-b fixed z-20 w-full shadow-md bg-white/90">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div onClick={handleHome} className="flex items-center space-x-2 cursor-pointer">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gray-900">ShopHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <Button onClick={handleHome} variant="ghost" className='text-black text-base font-semibold drop-shadow-2xl cursor-pointer'>Home</Button>
            <Button onClick={handleShop} variant="ghost" className='text-black text-base font-semibold drop-shadow-2xl cursor-pointer'>Shop</Button>
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className='text-black text-base font-semibold drop-shadow-2xl cursor-pointer'>Categories</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.map((category) => (
                  <DropdownMenuItem key={category}>
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Bar */}
            <div className="flex items-center max-w-md w-full">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pr-10"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {isUser ? (
              <>
                <Button variant="ghost" size="icon" className='cursor-pointer'>
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className='cursor-pointer'>
                  <User className="h-8 w-8" />
                </Button>
                <Button onClick={handleCart} variant="ghost" size="icon" className="relative cursor-pointer">
                  <ShoppingCart className="h-7 w-7" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-700 text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </>
            ) : (
              <Button variant="default" onClick={() => navigate('/sign-in')}>
                Login
              </Button>
            )}
          </div>


          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-2">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full mb-2"
            />
            <div className="space-y-1">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex justify-evenly border-t mt-2 pt-2">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;