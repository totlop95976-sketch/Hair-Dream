
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import PersonalizedStylist from './components/PersonalizedStylist';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-stone-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <PersonalizedStylist />
      </main>
      <Footer />
    </div>
  );
};

export default App;
