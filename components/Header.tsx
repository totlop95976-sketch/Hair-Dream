
import React from 'react';
import { SearchIcon, UserIcon, ShoppingCartIcon } from './icons/Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-rose-800 tracking-wider">Hair Dream</h1>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-rose-700 transition duration-300">Home</a>
          <a href="#" className="text-gray-600 hover:text-rose-700 transition duration-300">Shop</a>
          <a href="#" className="text-gray-600 hover:text-rose-700 transition duration-300">Our Story</a>
          <a href="#" className="text-gray-600 hover:text-rose-700 transition duration-300">Contact</a>
        </nav>
        <div className="flex items-center space-x-5">
          <button className="text-gray-600 hover:text-rose-700 transition duration-300"><SearchIcon /></button>
          <button className="text-gray-600 hover:text-rose-700 transition duration-300"><UserIcon /></button>
          <button className="text-gray-600 hover:text-rose-700 transition duration-300 relative">
            <ShoppingCartIcon />
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
