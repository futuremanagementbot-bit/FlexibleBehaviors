import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-soft-sm py-2' : 'bg-cream py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-bold text-deepForest tracking-tight">
            Flexible<span className="text-warmSage">Behaviors</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Shop by Need', 'Tools', 'Sensory', 'For Schools', 'Mission'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-charcoal hover:text-deepForest font-semibold transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-deepForest hover:text-warmSage transition-colors p-2">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-deepForest hover:text-warmSage transition-colors p-2">
            <User className="w-5 h-5" />
          </button>
          <button className="relative text-deepForest hover:text-warmSage transition-colors p-2">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-terracotta text-white text-[10px] flex items-center justify-center rounded-full font-bold">2</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-deepForest"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream shadow-soft-lg py-6 px-6 flex flex-col gap-4 border-t border-sand/30">
           {['Shop by Need', 'Tools', 'Sensory', 'For Schools', 'Mission'].map((item) => (
            <a 
              key={item} 
              href="#"
              className="text-lg font-bold text-deepForest py-2 border-b border-sand/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex gap-4 mt-4">
             <Button variant="secondary" className="w-full">Sign In</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
