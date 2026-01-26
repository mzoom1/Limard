import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  car: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "James Wilson",
    car: "2021 BMW M4",
    text: "The Stage 2 tune completely transformed the car. The torque delivery is immediate and the burbles sound perfect. Best shop in LA, hands down.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    car: "2018 Porsche Macan",
    text: "Got the wireless CarPlay installed. It looks and feels like it came from the factory. No more messy cables. Highly professional service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
  },
  {
    name: "Michael Ross",
    car: "2022 Audi RS6",
    text: "The performance gains are insane. 0-60 in under 3 seconds now. These guys know exactly what they're doing with high-end European cars.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
                <span className="text-brand-red font-bold uppercase tracking-widest text-sm italic">Verified Reviews</span>
                <h2 className="mt-4 text-5xl font-display font-bold text-slate-900 uppercase leading-[0.9]">
                    What LA <br/> Drivers Say
                </h2>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="font-bold text-slate-900">4.9/5 on Google</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="group relative bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-[#111111] transition-all duration-500 hover:-translate-y-2">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-200 group-hover:text-white/5 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg" />
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-white transition-colors">{t.name}</h4>
                    <p className="text-xs text-brand-red font-bold uppercase tracking-wider">{t.car}</p>
                  </div>
                </div>
                
                <p className="text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed italic">
                  "{t.text}"
                </p>

                <div className="mt-8 flex text-yellow-500">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
