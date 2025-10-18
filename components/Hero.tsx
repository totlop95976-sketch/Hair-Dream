
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white" 
      style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1062')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.6)'}}>Discover Your Perfect Hair</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
          Premium, natural ingredients for hair that doesn't just look good, but feels incredible.
        </p>
        <button className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full hover:bg-rose-600 transition-transform duration-300 transform hover:scale-105 shadow-lg">
          Shop New Arrivals
        </button>
      </div>
    </section>
  );
};

export default Hero;
