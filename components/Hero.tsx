import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-cream pt-8 md:pt-16 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          className="lg:col-span-5 space-y-8 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand/30 text-deepForest text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-clay" />
            <span>Trusted by 500+ Schools</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deepForest leading-[1.15]">
            Calm the Chaos, <br />
            <span className="text-warmSage italic font-serif">Spark the Joy.</span>
          </h1>
          
          <p className="text-lg text-charcoal/80 leading-relaxed max-w-md">
            Affordable, practical sensory tools and visual aids designed for real life. Supporting neurodiverse families and professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" icon={<ArrowRight />}>
              Shop for Home
            </Button>
            <Button variant="secondary">
              Shop for Professionals
            </Button>
          </div>
          
          <div className="pt-4 flex items-center gap-4 text-sm text-charcoal/70">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/seed/face${i}/50/50`} 
                  alt="User" 
                  className="w-8 h-8 rounded-full border-2 border-cream" 
                />
              ))}
            </div>
            <p>Join our supportive community</p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="lg:col-span-7 relative"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative rounded-hero overflow-hidden shadow-soft-lg group">
             {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-softFern/20 blur-3xl rounded-full -z-10"></div>
            
            <img 
              src="https://picsum.photos/seed/autismhappiness/800/600" 
              alt="Child playing with sensory toy" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-deepForest/30 to-transparent pointer-events-none"></div>
          </div>

          {/* Floating Card */}
          <motion.div 
            className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 bg-cream/90 backdrop-blur-sm p-4 rounded-card shadow-soft-lg border border-white/40 max-w-xs"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-warmSage/20 flex items-center justify-center text-deepForest font-bold">
                5★
              </div>
              <div>
                <p className="text-sm font-bold text-deepForest">"A game changer for our mornings!"</p>
                <p className="text-xs text-charcoal/60">- Sarah, Mom of 2</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
