
import React from 'react';
import { Product } from '../types';
import { ShoppingCartIcon } from './icons/Icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-white text-rose-800 font-bold py-2 px-4 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ShoppingCartIcon className="w-5 h-5" />
                Add to Cart
            </button>
        </div>
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{product.category}</p>
        <p className="text-xl font-bold text-rose-800">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
