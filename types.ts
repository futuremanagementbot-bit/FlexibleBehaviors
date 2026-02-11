export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: 'New' | 'Sale' | 'Bestseller';
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string; // e.g., "Parent of 2" or "Occupational Therapist"
  rating: number;
}
