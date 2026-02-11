import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: '1', text: "The visual schedule has completely transformed our morning routine. No more meltdowns before school!", author: "Emily R.", role: "Mom of 3", rating: 5 },
  { id: '2', text: "Finally, sensory tools that don't look 'medical'. They blend right into our living room decor.", author: "Marcus T.", role: "Dad & Architect", rating: 5 },
  { id: '3', text: "I recommend Flexible Behaviors to all my clients. High quality, affordable, and durable.", author: "Sarah Jenkins", role: "Pediatric OT", rating: 5 },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-cream relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-deepForest rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-clay rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-deepForest mb-4">Loved by Parents & Pros</h2>
          <div className="flex justify-center gap-1 text-mutedGold">
            {[1,2,3,4,5].map(i => <Quote key={i} size={20} className={i===1 ? 'text-deepForest' : 'opacity-0'} />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              className="bg-white p-8 rounded-card shadow-soft-md border border-sand/20 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <Quote className="text-sand mb-4 w-8 h-8" />
              <p className="font-serif italic text-lg text-charcoal/80 mb-6 flex-grow">"{t.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-warmSage/30 rounded-full flex items-center justify-center text-deepForest font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <div className="font-bold text-deepForest">{t.author}</div>
                  <div className="text-xs text-charcoal/60 uppercase tracking-wide">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
