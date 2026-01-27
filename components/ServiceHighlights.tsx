import React from 'react';
import { ShieldCheck, Zap, Gauge, Award, Cpu, Smartphone } from 'lucide-react';

const ServiceHighlights: React.FC<{ type?: 'performance' | 'carplay' }> = ({ type = 'performance' }) => {
  const commonHighlights = [
    {
      icon: ShieldCheck,
      title: "Lifetime Warranty",
      desc: "Software protection for life."
    },
    {
      icon: Zap,
      title: "2-Hour Turnaround",
      desc: "Fast professional service."
    },
    {
      icon: Award,
      title: "OEM Integration",
      desc: "Keeps factory look & feel."
    }
  ];

  const specificHighlight = type === 'performance' 
    ? {
        icon: Gauge,
        title: "Dyno Proven",
        desc: "Precision calibrated power."
      }
    : {
        icon: Smartphone,
        title: "Wireless Tech",
        desc: "No more messy cables."
      };

  const highlights = [specificHighlight, ...commonHighlights];

  return (
    <section className="bg-[#050505] py-12 relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-300">
                <item.icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-black text-lg uppercase leading-none tracking-tight">{item.title}</span>
                <span className="text-slate-500 text-xs mt-1 font-medium italic">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
