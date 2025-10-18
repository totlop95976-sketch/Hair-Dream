
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface RecommendedProduct {
  productName: string;
  reason: string;
  type: string;
}
export interface HairCareRoutine {
  morning: string[];
  evening: string[];
  weekly: string[];
  recommendedProducts: RecommendedProduct[];
}
