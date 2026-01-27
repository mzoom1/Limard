import React from 'react';
import { FileCode, Activity, Laptop, Zap } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-12 md:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <span className="text-brand-red font-bold uppercase tracking-widest text-[10px]">Workflow</span>
            <h2 className="mt-1 text-3xl md:text-5xl font-display font-bold text-slate-900 uppercase">
            The Tuning Process
            </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 relative z-10">
            {[
              { 
                icon: Activity, 
                title: "Health Check", 
                desc: "Full diagnostics before tuning." 
              },
              { 
                icon: Laptop, 
                title: "Read ECU", 
                desc: "Safe software extraction." 
              },
              { 
                icon: FileCode, 
                title: "Calibration", 
                desc: "Custom parameter tuning." 
              },
              { 
                icon: Zap, 
                title: "Flash & Dyno", 
                desc: "Final validation & power." 
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-brand-red rounded-full flex items-center justify-center mb-3 md:mb-5 shadow-xl shadow-slate-200 group-hover:shadow-brand-red/20 transition-all duration-300 relative">
                  <step.icon className="h-5 w-5 md:h-7 md:w-7 text-slate-900" />
                  <div className="absolute -bottom-2 md:-bottom-2.5 bg-white border border-slate-200 px-1.5 md:px-2 py-0.5 rounded text-[8px] md:text-[10px] font-mono text-brand-red font-bold">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-[11px] md:text-lg font-bold text-slate-900 uppercase tracking-wide mb-1 leading-tight">{step.title}</h3>
                <p className="text-slate-500 text-[9px] md:text-xs leading-relaxed max-w-[120px] md:max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;