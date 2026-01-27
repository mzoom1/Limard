import React from 'react';
import { Gauge, Cpu, Wind, Zap, Settings, Flame } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Stage 1 Tuning",
    description: "Software-only ECU remap optimized for stock hardware. Increases horsepower and torque by 20-30% while maintaining reliability.",
    icon: Cpu
  },
  {
    id: 2,
    title: "Stage 2 Tuning",
    description: "Requires hardware upgrades (downpipe, intake, intercooler). Unlocks deeper potential and aggressive exhaust sound (pops & bangs).",
    icon: Flame
  },
  {
    id: 3,
    title: "Stage 3 & Custom",
    description: "Big turbo upgrades, fuel system changes, and custom engine internals. Extreme performance for track and street.",
    icon: Gauge
  },
  {
    id: 4,
    title: "TCU Transmission Tune",
    description: "Faster shift speeds, raised torque limits, and optimized launch control for DSG, ZF, and DCT gearboxes.",
    icon: Settings
  },
  {
    id: 5,
    title: "Exhaust & Intake",
    description: "Installation of high-flow downpipes, cat-back systems, and cold air intakes to let your engine breathe.",
    icon: Wind
  },
  {
    id: 6,
    title: "CarPlay Retrofit",
    description: "Wireless Apple CarPlay / Android Auto integration, digital cluster upgrades, and ambient lighting installation.",
    icon: Zap
  }
];

interface ServicesProps {
    onServiceSelect?: (service: { title: string; price?: string }) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  const handleServiceClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    
    if (onServiceSelect) {
        // Assign default prices for each stage
        let price = "$599";
        if (title.includes("Stage 2")) price = "$899";
        if (title.includes("Stage 3")) price = "$1,499+";
        if (title.includes("TCU")) price = "$399";
        if (title.includes("Exhaust")) price = "$299+";
        if (title.includes("Retrofit")) price = "$499";
        
        onServiceSelect({ title, price });
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 md:py-16 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-brand-red font-bold uppercase tracking-widest text-[10px]">Our Expertise</span>
          <h2 className="mt-1 text-3xl md:text-5xl font-display font-bold text-white uppercase">
            Performance & <br className="md:hidden"/> Technology
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-5"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 pt-2">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={(e) => handleServiceClick(e, service.title)}
              className="group relative p-4 md:p-7 bg-[#111111] border border-white/5 hover:border-brand-red/50 transition-all duration-300 md:hover:-translate-y-1 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:z-10"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-brand-red/10 blur-3xl rounded-full group-hover:bg-brand-red/20 transition-all"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-2 md:p-3 bg-white/5 rounded-lg md:rounded-xl text-brand-red mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-sm">
                  <service.icon className="h-5 w-5 md:h-7 md:w-7" />
                </div>
                <h3 className="text-[12px] md:text-lg font-bold text-white mb-1.5 md:mb-2 uppercase tracking-wide group-hover:text-brand-red transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-[10px] md:text-xs line-clamp-2 md:line-clamp-3">
                  {service.description}
                </p>
                <div className="mt-4 md:mt-5 flex items-center text-brand-red text-[9px] md:text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Select Tune <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;