import React from 'react';
import AnnouncementBar from './components/Layout/AnnouncementBar';
import Header from './components/Layout/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Mission from './components/Mission';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-charcoal selection:bg-warmSage/30">
      <AnnouncementBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Categories />
        <FeaturedProducts />
        <Mission />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
