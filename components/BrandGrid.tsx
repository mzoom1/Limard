import React, { useState } from 'react';
import { Car } from 'lucide-react';

const BrandGrid: React.FC = () => {
  const brands = [
    { name: "Mercedes-Benz", slug: "mercedes-benz", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/MB%20Logo.svg" },
    { name: "Audi", slug: "audi", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Audi%20Logo.svg" },
    { name: "BMW", slug: "bmw", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/BMW%20Logo.svg" },
    { name: "Jaguar", slug: "jaguar", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Jaguar%20Logo.svg" },
    { name: "Jeep", slug: "jeep", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Jeep%20Logo.svg" },
    { name: "Ferrari", slug: "ferrari", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Ferrari%20Logo.svg" },
    { name: "Land Rover", slug: "land-rover", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Landrover%20Logo.svg" },
    { name: "Alfa Romeo", slug: "alfa-romeo", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Alfa%20Romeo%20Logo.svg" },
    { name: "Toyota", slug: "toyota", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Toyota%20Logo.svg" },
    { name: "Volkswagen", slug: "volkswagen", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Volkswagen%20Logo.svg" },
    { name: "Nissan", slug: "nissan", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Nissan%20Logo.svg" },
    { name: "Smart", slug: "smart", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Smart%20Logo.svg" },
    { name: "Aston Martin", slug: "aston-martin", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Aston%20Martin%20Logo.svg" },
    { name: "Peugeot", slug: "peugeot", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Peugeot%20Logo.svg" },
    { name: "Maserati", slug: "maserati", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Maserati%20Logo.svg" },
    { name: "Cadillac", slug: "cadillac", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Cadillac%20Logo.svg" },
    { name: "Lamborghini", slug: "lamborghini", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Lamborghini%20Logo.svg" },
    { name: "McLaren", slug: "mclaren", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/McLaren%20Logo.svg" },
    { name: "Porsche", slug: "porsche", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Porsche%20Logo.svg" },
    { name: "Tesla", slug: "tesla", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Tesla%20Logo.svg" },
    { name: "Volvo", slug: "volvo", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Volvo%20Logo.svg" },
    { name: "Dodge", slug: "dodge", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Dodge%20Logo.svg" },
    { name: "Mini", slug: "mini", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Mini%20Logo.svg" },
    { name: "Lexus", slug: "lexus", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Lexus%20Logo.svg" },
    { name: "Skoda", slug: "skoda", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/skoda.svg" },
    { name: "Ford", slug: "ford", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Ford%20Logo.svg" },
    { name: "Fiat", slug: "fiat", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Fiat%20Logo.svg" },
    { name: "Bentley", slug: "bentley", logo: "https://cdn.jsdelivr.net/gh/cardog-ai/icons/core/optimized/Bentley%20Logo.svg" }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs">Compatibility</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-slate-900 uppercase tracking-tight">
                Supported Manufacturers
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-6">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-6 bg-slate-50/50 rounded-2xl border border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-xl transition-all duration-500 group cursor-default overflow-hidden relative min-h-[160px]">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-24 h-24 mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                 <img 
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 relative z-10"
                    loading="lazy"
                    onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        // Fallback to simple-icons if cardog-ai fails
                        if (img.src.includes('cardog-ai')) {
                           const simpleSlug = brand.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                           img.src = `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${simpleSlug}.svg`;
                        } else {
                           img.style.display = 'none';
                           const parent = img.parentElement;
                           if (parent) {
                               const fallback = parent.querySelector('.fallback-icon');
                               if (fallback) (fallback as HTMLElement).style.opacity = '1';
                           }
                        }
                    }}
                 />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 fallback-icon transition-all duration-300">
                    <Car className="w-12 h-12 text-slate-200 group-hover:text-brand-red transition-colors" />
                 </div>
              </div>
              
              <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 text-center transition-colors duration-300">
                  {brand.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <div className="inline-block p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-slate-500 text-sm font-medium">
                    We support over <span className="text-slate-900 font-bold">120+</span> specific vehicle variations.
                    <br className="sm:hidden" />
                    <span className="mx-2 hidden sm:inline">•</span>
                    <button className="text-brand-red font-bold hover:underline">Verify your VIN</button>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;