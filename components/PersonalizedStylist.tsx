
import React, { useState } from 'react';
import { getHairCareRoutine } from '../services/geminiService';
import { HairCareRoutine } from '../types';
import { SparklesIcon, ChevronRightIcon } from './icons/Icons';

const PersonalizedStylist: React.FC = () => {
  const [hairType, setHairType] = useState('');
  const [concerns, setConcerns] = useState('');
  const [goals, setGoals] = useState('');
  const [recommendation, setRecommendation] = useState<HairCareRoutine | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hairType || !concerns || !goals) {
      setError("Please fill out all fields to get your personalized routine.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setRecommendation(null);

    try {
      const result = await getHairCareRoutine(hairType, concerns, goals);
      setRecommendation(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const RoutineSection: React.FC<{ title: string, steps: string[] }> = ({ title, steps }) => (
    <div className="bg-white/50 p-6 rounded-lg shadow-sm">
      <h4 className="font-bold text-xl mb-4 text-rose-800">{title}</h4>
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <ChevronRightIcon className="w-5 h-5 text-rose-500 mt-1 mr-2 flex-shrink-0" />
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-20 bg-rose-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SparklesIcon className="w-12 h-12 mx-auto text-rose-500 mb-4" />
            <h2 className="text-4xl font-bold text-gray-800">Your Personal AI Stylist</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Answer a few questions about your hair, and our Gemini-powered AI will craft a unique care routine just for you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="hairType" className="block text-sm font-medium text-gray-700 mb-1">Hair Type</label>
                <input type="text" id="hairType" value={hairType} onChange={e => setHairType(e.target.value)} placeholder="e.g., Fine, curly, color-treated" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"/>
              </div>
              <div>
                <label htmlFor="concerns" className="block text-sm font-medium text-gray-700 mb-1">Main Concerns</label>
                <input type="text" id="concerns" value={concerns} onChange={e => setConcerns(e.target.value)} placeholder="e.g., Frizz, dryness, breakage" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"/>
              </div>
              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">Hair Goals</label>
                <input type="text" id="goals" value={goals} onChange={e => setGoals(e.target.value)} placeholder="e.g., More volume, shine, growth" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rose-500 focus:border-rose-500"/>
              </div>
              <div className="md:col-span-3 text-center mt-4">
                <button type="submit" disabled={isLoading} className="bg-rose-800 text-white font-bold py-3 px-10 rounded-full hover:bg-rose-900 transition-all duration-300 disabled:bg-gray-400 w-full md:w-auto">
                  {isLoading ? 'Thinking...' : 'Get My Routine'}
                </button>
              </div>
            </form>
          </div>

          {error && <div className="text-center text-red-600 bg-red-100 p-4 rounded-md">{error}</div>}
          
          {isLoading && 
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-800 mx-auto"></div>
                <p className="mt-4 text-gray-600">Our AI stylist is crafting your perfect routine...</p>
            </div>
          }

          {recommendation && (
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Personalized Routine</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <RoutineSection title="Morning Routine" steps={recommendation.morning} />
                <RoutineSection title="Evening Routine" steps={recommendation.evening} />
                <RoutineSection title="Weekly Treat" steps={recommendation.weekly} />
              </div>
              <div>
                 <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Product Recommendations</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recommendation.recommendedProducts.map((prod, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                            <h5 className="font-bold text-lg text-rose-800">{prod.productName} <span className="text-sm font-normal text-gray-500 ml-2">({prod.type})</span></h5>
                            <p className="text-gray-600 mt-2">{prod.reason}</p>
                        </div>
                    ))}
                 </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PersonalizedStylist;
