
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

const mockProducts: Product[] = [
  { id: 1, name: 'Hydrating Argan Shampoo', category: 'Shampoo', price: 28.00, imageUrl: 'https://picsum.photos/400/400?image=102', description: 'Gently cleanses and restores moisture.' },
  { id: 2, name: 'Volumizing Keratin Conditioner', category: 'Conditioner', price: 32.00, imageUrl: 'https://picsum.photos/400/400?image=203', description: 'Adds body and shine without weighing hair down.' },
  { id: 3, name: 'Repairing Hair Mask', category: 'Treatment', price: 45.00, imageUrl: 'https://picsum.photos/400/400?image=305', description: 'Deeply nourishes and strengthens damaged hair.' },
  { id: 4, name: 'Texturizing Sea Salt Spray', category: 'Styling', price: 24.00, imageUrl: 'https://picsum.photos/400/400?image=404', description: 'Creates effortless, beachy waves with a matte finish.' },
];


const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Best Sellers</h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">Crafted with care, loved by many. Discover the products everyone is talking about.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
