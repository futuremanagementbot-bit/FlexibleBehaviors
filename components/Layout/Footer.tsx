import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deepForest text-cream pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand & Mission */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Flexible<span className="text-warmSage">Behaviors</span></h3>
          <p className="text-cream/80 leading-relaxed max-w-sm">
            Empowering families and professionals with affordable, practical tools for special needs support. Built with love and understanding.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:text-warmSage transition-colors"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="hover:text-warmSage transition-colors"><Facebook className="w-5 h-5"/></a>
            <a href="#" className="hover:text-warmSage transition-colors"><Twitter className="w-5 h-5"/></a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-warmSage">Shop</h4>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#" className="hover:text-cream transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Sensory Tools</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Visual Aids</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">School Kits</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4 text-warmSage">Support</h4>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#" className="hover:text-cream transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Purchase Orders</a></li>
            </ul>
          </div>
        </div>

        {/* Impact Metric */}
        <div className="bg-white/5 rounded-card p-6 border border-white/10">
          <h4 className="font-bold text-lg mb-2 text-warmSage">Our Impact</h4>
          <div className="text-4xl font-bold mb-1">12,450+</div>
          <p className="text-cream/70 text-sm">Families supported since 2020</p>
          <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
             <div className="h-full bg-warmSage w-3/4 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-cream/50">
        <p>&copy; {new Date().getFullYear()} Flexible Behaviors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
