import React from 'react';
import { Gauge, Shield, Cpu, Check } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-12 md:py-16 bg-[#050505] relative overflow-hidden">
        {/* Decorative elements for dark mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.02]"></div>

        {/* Decorative Background Brands */}
        <div className="absolute -left-10 top-1/4 select-none pointer-events-none opacity-[0.12]">
            <span className="text-[180px] font-black uppercase text-stroke transform -rotate-90 block">BMW</span>
        </div>
        <div className="absolute -right-10 bottom-1/4 select-none pointer-events-none opacity-[0.12]">
            <span className="text-[180px] font-black uppercase text-stroke transform rotate-90 block tracking-[10px]">AUDI</span>
        </div>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 select-none pointer-events-none opacity-[0.08]">
            <span className="text-[250px] font-black uppercase text-stroke leading-none">PORSCHE</span>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-widest text-[10px]">Why Choose Limard</span>
            <h2 className="mt-1 text-3xl md:text-5xl font-display font-black text-white uppercase leading-tight mb-6 tracking-tight">
              Proven Performance <br />
              <span className="text-white/40">Reliable Results.</span>
            </h2>
            <p className="text-slate-400 text-base mb-6 leading-relaxed max-w-lg">
                We don't just increase numbers. We engineer drivability. Our custom maps are developed to provide smooth power delivery, optimized fuel economy, and safe engine operation.
            </p>

            <div className="space-y-4">
                {[
                    { icon: Gauge, title: "Dyno Verified Gains", desc: "Real horsepower and torque increases you can feel and measure." },
                    { icon: Shield, title: "Safe & Reliable", desc: "We stay within factory safety limits for daily driven vehicles." },
                    { icon: Cpu, title: "Original Equipment", desc: "We use genuine tools (Autotuner, bFlash) and OEM-grade hardware." }
                ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 group">
                        <div className="flex-shrink-0 mt-1">
                            <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                                <item.icon className="h-5 w-5 text-brand-red group-hover:text-white transition-colors" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white uppercase tracking-wide">{item.title}</h4>
                            <p className="text-slate-500 mt-0.5 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          <div className="relative pt-10 pl-10">
             {/* Image Composition */}
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/60 to-transparent z-10"></div>
                
                <img 
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2670&auto=format&fit=crop" 
                    alt="Car Electronics and Diagnostic Device" 
                    className="w-full h-auto object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                />
             </div>

             {/* Floating Card - Dark Styled */}
             <div className="absolute -bottom-8 -left-8 bg-[#111111]/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-3xl max-w-xs hidden md:block z-20">
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                         {[
                             "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                             "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                             "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                         ].map((src, i) => (
                             <div key={i} className="w-10 h-10 rounded-full border-2 border-[#111111] overflow-hidden">
                                <img src={src} className="w-full h-full object-cover" alt="User" />
                             </div>
                         ))}
                    </div>
                    <div className="text-white font-bold leading-tight">
                        2,100+ <br/>
                        <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">Happy Leads</span>
                    </div>
                </div>
                <div className="flex gap-1 mb-2">
                     {[1,2,3,4,5].map(i => <Check key={i} className="w-3 h-3 text-brand-red" />)}
                </div>
                <p className="text-slate-400 text-xs italic leading-relaxed">
                    "Stage 2 on my BMW M3 changed the car completely. Incredible service in Los Angeles."
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;