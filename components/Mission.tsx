import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Button from './ui/Button';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-deepForest text-cream overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-12 bg-warmSage/20 rounded-full flex items-center justify-center mb-6 text-warmSage">
            <Heart size={24} fill="currentColor" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed with love, grounded in science.</h2>
          <p className="text-lg text-cream/80 mb-6 leading-relaxed">
            We know the struggle of finding tools that are both functional and beautiful. That's why we bridge the gap between clinical effectiveness and home aesthetics.
          </p>
          <p className="text-lg text-cream/80 mb-8 leading-relaxed">
            Every product is tested by our network of occupational therapists and parents before it reaches your hands.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-8 border-t border-cream/10 pt-8">
            <div>
              <div className="text-4xl font-bold text-warmSage mb-1">12k+</div>
              <div className="text-sm text-cream/60">Happy Families</div>
            </div>
             <div>
              <div className="text-4xl font-bold text-warmSage mb-1">500+</div>
              <div className="text-sm text-cream/60">Schools Partnered</div>
            </div>
          </div>

          <Button variant="cta">Read Our Story</Button>
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://picsum.photos/seed/happykid1/400/500" alt="Happy child" className="rounded-card shadow-lg translate-y-8" />
          <img src="https://picsum.photos/seed/therapytool/400/500" alt="Therapy tool" className="rounded-card shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
