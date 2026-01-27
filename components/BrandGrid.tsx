import React, { useState } from 'react';
import { Car } from 'lucide-react';

const BrandGrid: React.FC = () => {
  const brands = [
    { name: "Mercedes-Benz", slug: "mercedes" },
    { name: "Audi", slug: "audi" },
    { name: "BMW", slug: "bmw" },
    { name: "Jaguar", slug: "jaguar" },
    { name: "Jeep", slug: "jeep" },
    { name: "Ferrari", slug: "ferrari" },
    { name: "Land Rover", slug: "landrover" },
    { name: "Alfa Romeo", slug: "alfaromeo" },
    { name: "Toyota", slug: "toyota" },
    { name: "Volkswagen", slug: "volkswagen" },
    { name: "Nissan", slug: "nissan" },
    { name: "Smart", slug: "smart" },
    { name: "Aston Martin", slug: "astonmartin" },
    { name: "Peugeot", slug: "peugeot" },
    { name: "Maserati", slug: "maserati" },
    { name: "Cadillac", slug: "cadillac" },
    { name: "Lamborghini", slug: "lamborghini" },
    { name: "McLaren", slug: "mclaren" },
    { name: "Porsche", slug: "porsche" },
    { name: "Tesla", slug: "tesla" },
    { name: "Volvo", slug: "volvo" },
    { name: "Dodge", slug: "dodge" },
    { name: "Mini", slug: "mini" },
    { name: "Lexus", slug: "lexus" },
    { name: "Skoda", slug: "skoda" },
    { name: "Ford", slug: "ford" },
    { name: "Fiat", slug: "fiat" },
    { name: "Bentley", slug: "bentley" }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs">Compatibility</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
                Supported Manufacturers
            </h2>
            <div className="w-16 h-1 bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 md:gap-6 pt-4 pb-8 -mt-4">
          {brands.map((brand, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-6 bg-[#111111] rounded-2xl border border-white/5 hover:bg-[#1a1a1a] hover:border-white/10 hover:shadow-2xl transition-all duration-500 group cursor-default overflow-hidden relative min-h-[160px]">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-full h-16 mb-4 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                 <img 
                    src={`https://cdn.simpleicons.org/${brand.slug}/white`}
                    alt={`${brand.name} logo`}
                    className="w-12 h-12 object-contain opacity-40 group-hover:opacity-100 transition-all duration-500 relative z-10"
                    loading="lazy"
                    onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                        const parent = img.parentElement;
                        if (parent) {
                            const fallback = parent.querySelector('.fallback-icon');
                            if (fallback) (fallback as HTMLElement).style.opacity = '1';
                        }
                    }}
                 />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 fallback-icon transition-all duration-300">
                    <span className="text-white/10 group-hover:text-brand-red font-display font-black italic text-xl transition-colors">
                        {brand.name[0]}
                    </span>
                 </div>
              </div>
              
              <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white text-center transition-colors duration-300">
                  {brand.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <div className="inline-block p-4 rounded-2xl bg-[#111111] border border-white/5">
                <p className="text-slate-500 text-sm font-medium">
                    We support over <span className="text-white font-bold">120+</span> specific vehicle variations.
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