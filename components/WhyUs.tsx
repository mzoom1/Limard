import React from 'react';
import { Gauge, Shield, Cpu, Check } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Why Choose Limard</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-display font-bold text-slate-900 uppercase leading-tight mb-8">
              Proven Performance <br />
              <span className="text-slate-500">Reliable Results.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We don't just increase numbers. We engineer drivability. Our custom maps are developed to provide smooth power delivery, optimized fuel economy, and safe engine operation.
            </p>

            <div className="space-y-6">
                {[
                    { icon: Gauge, title: "Dyno Verified Gains", desc: "Real horsepower and torque increases you can feel and measure." },
                    { icon: Shield, title: "Safe & Reliable", desc: "We stay within factory safety limits for daily driven vehicles." },
                    { icon: Cpu, title: "Original Equipment", desc: "We use genuine tools (Autotuner, bFlash) and OEM-grade hardware." }
                ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                            <div className="p-2 bg-brand-red/10 rounded-sm">
                                <item.icon className="h-6 w-6 text-brand-red" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 uppercase tracking-wide">{item.title}</h4>
                            <p className="text-slate-600 mt-1">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>

          <div className="relative pt-10 pl-10"> {/* Added padding to accommodate the negative margin of the card if needed, or just visual balance */}
             {/* Image Composition */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent z-10"></div>
                
                {/* Updated Image: Mechanic/Tuning Context - Diagnostic Device */}
                <img 
                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2670&auto=format&fit=crop" 
                    alt="Car Electronics and Diagnostic Device" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
             </div>

             {/* Floating Card - Positioned absolute on top */}
             <div className="absolute -bottom-8 -left-8 bg-white border border-slate-200 p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-xs hidden md:block z-20">
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-3">
                         {[
                             "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                             "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                             "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                         ].map((src, i) => (
                             <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                <img src={src} className="w-full h-full object-cover" alt="User" />
                             </div>
                         ))}
                    </div>
                    <div className="text-slate-900 font-bold leading-tight">
                        2,000+ <br/>
                        <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">Cars Tuned</span>
                    </div>
                </div>
                <div className="flex gap-1 mb-2">
                     {[1,2,3,4,5].map(i => <Check key={i} className="w-3 h-3 text-brand-red" />)}
                </div>
                <p className="text-slate-600 text-xs italic leading-relaxed">
                    "Stage 2 on my BMW M3 changed the car completely. Incredible service."
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;