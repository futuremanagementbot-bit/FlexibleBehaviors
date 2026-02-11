import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { id: '1', name: 'Visual Schedules', image: 'https://picsum.photos/seed/visual/400/300' },
  { id: '2', name: 'Fidget Tools', image: 'https://picsum.photos/seed/fidget/400/300' },
  { id: '3', name: 'Emotional Reg.', image: 'https://picsum.photos/seed/emotions/400/300' },
  { id: '4', name: 'Fine Motor', image: 'https://picsum.photos/seed/motor/400/300' },
  { id: '5', name: 'Sensory Kits', image: 'https://picsum.photos/seed/sensorykit/400/300' },
];

const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deepForest mb-4">Shop by Need</h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">Find exactly what supports your child's unique journey.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <motion.a
              key={cat.id}
              href="#"
              className="group relative block rounded-card overflow-hidden shadow-soft-sm hover:shadow-soft-hover transition-all duration-300 bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deepForest/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-cream group-hover:text-warmSage transition-colors">{cat.name}</h3>
                <span className="text-cream/80 text-sm mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}

          {/* "Not Sure?" Card */}
          <motion.a
            href="#"
            className="group flex flex-col items-center justify-center text-center p-6 rounded-card border-2 border-dashed border-sand hover:border-deepForest bg-sand/10 hover:bg-sand/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-deepForest text-cream flex items-center justify-center mb-4 text-2xl font-bold">?</div>
            <h3 className="text-xl font-bold text-deepForest mb-2">Not sure where to start?</h3>
            <p className="text-sm text-charcoal/80 mb-4">Take our 30-second quiz to find the perfect tools.</p>
            <span className="text-deepForest font-bold underline decoration-warmSage underline-offset-4 group-hover:text-terracotta transition-colors">Start Quiz</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
