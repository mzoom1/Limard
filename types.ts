import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  car: string;
  quote: string;
  rating: number;
}

export interface Product {
  id: string;
  brand: string;
  model: string;
  price: string;
  images: string[];
  colSpan?: string;
}