import React, { useState } from 'react';
import Button from './ui/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) setStatus('success');
  };

  return (
    <section className="py-20 bg-deepForest relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">Join Our Flexible Family</h2>
        <p className="text-cream/70 mb-8 text-lg">
          Get expert tips, free visual resources, and 10% off your first order.
        </p>

        {status === 'success' ? (
          <div className="bg-warmSage/20 border border-warmSage p-6 rounded-card animate-fade-in">
            <h3 className="text-xl font-bold text-warmSage mb-2">Welcome aboard! 🎉</h3>
            <p className="text-cream/90">Check your inbox for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-3 rounded-button bg-cream/10 border border-cream/20 text-cream placeholder-cream/50 focus:outline-none focus:ring-2 focus:ring-warmSage transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button variant="cta" type="submit">Subscribe</Button>
          </form>
        )}
        
        <p className="text-xs text-cream/40 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
