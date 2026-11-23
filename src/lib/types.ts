export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  rating: number;
  reviewsCount: number;
  originalPrice: number;
  sellingPrice: number;
  discount: number;
  image: string;
  bestseller?: boolean;
  featured?: boolean;
  specs: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  modelsCount: string;
  color: string;
  bgGrad: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  purifierBought: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

