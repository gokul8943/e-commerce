import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star } from "lucide-react";

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Summer Collection 2025",
      subtitle: "Up to 40% Off",
      description: "Discover the latest trends in summer fashion with exclusive deals",
      bgColor: "from-purple-600 to-blue-600"
    },
    {
      title: "New Arrivals",
      subtitle: "Fresh Styles",
      description: "Be the first to shop our newest collections and exclusive items",
      bgColor: "from-teal-600 to-emerald-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden h-[500px] w-full rounded-lg">
      {/* Animated Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} transition-colors duration-1000`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white/20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `scale(${1 + Math.random()})`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full space-y-8 max-w-2xl">
          {/* Sale Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full w-fit animate-fade-in-up">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-white font-medium">Special Offer</span>
          </div>

          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-lg font-medium text-white/90">
              {slides[currentSlide].subtitle}
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl text-white/80">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold group transition-all duration-300"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-white border-white hover:bg-white/10 backdrop-blur-sm"
            >
              View Collection
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;

const keyframes = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const styles = document.createElement('style');
styles.textContent = keyframes;
document.head.appendChild(styles);