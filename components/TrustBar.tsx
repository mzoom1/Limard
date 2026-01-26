import React from 'react';

const TrustBar: React.FC = () => {
  const brands = [
    "Porsche", "BMW", "Mercedes-Benz", "Audi", "Land Rover", "Jaguar",
    "Ferrari", "Lamborghini", "Bentley", "Rolls-Royce", "McLaren",
    "Aston Martin", "Maserati", "Bugatti", "Lexus", "Tesla", "Koenigsegg", "Pagani"
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-12 relative overflow-hidden">
      {/* Inline styles for custom marquee animation since we can't easily edit global CSS */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
            animation-play-state: paused;
        }
      `}</style>
      
      <div className="w-full relative">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
            Trusted by Owners of Elite Vehicles
            </p>
        </div>

        {/* Gradient Fade Edges for Smoothness */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>

        <div className="flex overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-32 px-8 min-w-full">
            {/* First Set of Brands */}
            {brands.map((brand, idx) => (
              <span key={`a-${idx}`} className="flex items-center justify-center">
                 <span className="font-display text-4xl md:text-5xl font-bold text-slate-300 hover:text-slate-900 transition-colors duration-300 cursor-default select-none tracking-widest uppercase">
                    {brand}
                 </span>
              </span>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {brands.map((brand, idx) => (
              <span key={`b-${idx}`} className="flex items-center justify-center">
                 <span className="font-display text-4xl md:text-5xl font-bold text-slate-300 hover:text-slate-900 transition-colors duration-300 cursor-default select-none tracking-widest uppercase">
                    {brand}
                 </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;