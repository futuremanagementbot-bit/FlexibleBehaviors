import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { Star, ShoppingCart } from 'lucide-react';
import Button from './ui/Button';

const products: Product[] = [
  { id: '1', name: 'Daily Visual Schedule Board', price: 24.99, image: 'https://picsum.photos/seed/schedule/300/300', rating: 5, reviews: 124, badge: 'Bestseller' },
  { id: '2', name: 'Calming Weighted Lap Pad', price: 34.50, image: 'https://picsum.photos/seed/lappad/300/300', rating: 4.8, reviews: 89, badge: 'New' },
  { id: '3', name: 'Chewable Gem Necklace', price: 12.00, image: 'https://picsum.photos/seed/chew/300/300', rating: 4.9, reviews: 210 },
  { id: '4', name: 'Emotion Regulation Cards', price: 18.99, image: 'https://picsum.photos/seed/cards/300/300', rating: 4.7, reviews: 56 },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-softWhite">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-deepForest">Featured Tools</h2>
            <p className="text-charcoal/70 mt-2">Community favorites that make a real difference.</p>
          </div>
          <a href="#" className="hidden md:block text-deepForest font-bold hover:text-warmSage transition-colors underline decoration-2 underline-offset-4">View All</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-card overflow-hidden shadow-soft-sm hover:shadow-soft-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-cream">
                {product.badge && (
                  <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white rounded-full z-10 
                    ${product.badge === 'New' ? 'bg-mutedGold' : product.badge === 'Sale' ? 'bg-terracotta' : 'bg-deepForest'}`}>
                    {product.badge}
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-cream/90 backdrop-blur text-deepForest font-bold py-2 rounded-button shadow-md hover:bg-white flex items-center justify-center gap-2">
                    <ShoppingCart size={16} /> Quick Add
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-mutedGold fill-mutedGold" />
                  <span className="text-xs font-bold text-charcoal">{product.rating}</span>
                  <span className="text-xs text-charcoal/50">({product.reviews})</span>
                </div>
                <h3 className="font-bold text-lg text-deepForest leading-tight mb-2 group-hover:text-warmSage transition-colors">{product.name}</h3>
                <p className="text-clay font-bold">${product.price.toFixed(2)}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="secondary">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
