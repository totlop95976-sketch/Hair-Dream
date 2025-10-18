
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-rose-400">Hair Dream</h3>
            <p className="text-gray-400">Crafting the future of hair care with nature and science.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Shampoos</a></li>
              <li><a href="#" className="hover:text-white">Conditioners</a></li>
              <li><a href="#" className="hover:text-white">Treatments</a></li>
              <li><a href="#" className="hover:text-white">Styling</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Stay Connected</h4>
            <p className="text-gray-400 mb-4">Get the latest on new releases and sales.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none" />
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-4 py-2 rounded-r-md">Sign Up</button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hair Dream. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
