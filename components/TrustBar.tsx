import React from 'react';

const TrustBar: React.FC = () => {
  const brands = [
    { name: "Porsche" },
    { name: "BMW" },
    { name: "Mercedes-Benz" },
    { name: "Audi" },
    { name: "Land Rover" },
    { name: "Jaguar" },
    { name: "Ferrari" },
    { name: "Lamborghini" },
    { name: "Bentley" },
    { name: "Rolls-Royce" },
    { name: "McLaren" },
    { name: "Aston Martin" },
    { name: "Maserati" },
    { name: "Bugatti" },
    { name: "Lexus" },
    { name: "Tesla" },
    { name: "Koenigsegg" },
    { name: "Pagani" }
  ];

  const row1 = brands.slice(0, 9);
  const row2 = brands.slice(9);

  return (
    <section className="bg-black border-y border-white/5 py-8 relative overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-scroll-left:hover, .animate-scroll-right:hover {
            animation-play-state: paused;
        }
      `}</style>
      
      <div className="w-full relative">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] opacity-70">
            Trusted by Owners of Elite Vehicles
            </p>
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none"></div>

        <div className="flex flex-col gap-8">
            {/* Row 1 - Left */}
            <div className="flex overflow-hidden">
                <div className="flex animate-scroll-left whitespace-nowrap gap-16 md:gap-32 px-8 min-w-full items-center">
                    {[...row1, ...row1].map((brand, idx) => (
                    <div key={`a-${idx}`} className="flex items-center justify-center shrink-0">
                        <span className="text-white/20 hover:text-brand-red transition-all duration-500 font-display font-black italic uppercase tracking-[0.25em] text-xl md:text-3xl cursor-default select-none">
                            {brand.name}
                        </span>
                    </div>
                    ))}
                </div>
            </div>

            {/* Row 2 - Right */}
            <div className="flex overflow-hidden">
                <div className="flex animate-scroll-right whitespace-nowrap gap-16 md:gap-32 px-8 min-w-full items-center">
                    {[...row2, ...row2].map((brand, idx) => (
                    <div key={`b-${idx}`} className="flex items-center justify-center shrink-0">
                        <span className="text-white/20 hover:text-brand-red transition-all duration-500 font-display font-black italic uppercase tracking-[0.25em] text-xl md:text-3xl cursor-default select-none">
                            {brand.name}
                        </span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;