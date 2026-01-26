import React from 'react';
import { FileCode, Activity, Laptop, Zap } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Workflow</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-display font-bold text-slate-900 uppercase">
            The Tuning Process
            </h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              { 
                icon: Activity, 
                title: "1. Health Check", 
                desc: "We scan the vehicle and log data to ensure the engine is healthy before adding power." 
              },
              { 
                icon: Laptop, 
                title: "2. Read ECU", 
                desc: "We extract the original software file from your car's Engine Control Unit." 
              },
              { 
                icon: FileCode, 
                title: "3. Calibration", 
                desc: "Our engineers adjust parameters (boost, timing, fuel) for your specific stage goals." 
              },
              { 
                icon: Zap, 
                title: "4. Flash & Dyno", 
                desc: "We write the new file to the car and validate power gains on the road or dyno." 
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white border-2 border-brand-red rounded-full flex items-center justify-center mb-6 shadow-xl shadow-slate-200 group-hover:shadow-brand-red/20 transition-all duration-300 relative">
                  <step.icon className="h-8 w-8 text-slate-900" />
                  <div className="absolute -bottom-3 bg-white border border-slate-200 px-2 py-0.5 rounded text-xs font-mono text-brand-red font-bold">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;