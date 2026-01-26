import React from 'react';
import { ArrowRight, Gauge, Zap, Timer, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  
  const handleGetTuned = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Accessibility enhancement: Focus the first input after scrolling
      setTimeout(() => {
        const firstInput = contactSection.querySelector('input');
        if (firstInput) {
            (firstInput as HTMLElement).focus();
        }
      }, 1000);
    }
  };

  const handleViewStages = (e: React.MouseEvent) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      
      {/* 1. Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Main Hero Image - Side Profile BMW M4 Competition Style */}
        <div className="absolute inset-0">
            <img
                src="/images/hero-tuning.png"
                alt="USA Performance Tuning"
                className="w-full h-full object-cover object-[65%_center] md:object-center opacity-100"
            />
        </div>

        {/* Cinematic Gradient Mask - Creates the 'Text Overlay' effect */}
        {/* Darker left side for text readability with a smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]/20 md:to-transparent"></div>
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 h-screen flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
            
            {/* Left Content Area (Text) */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-8">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#111111]/50 border border-white/10 px-4 py-1.5 rounded-full animate-fade-in-up shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shadow-[0_0_10px_#E60000]"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">USA Performance Leader</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-display font-bold text-white leading-[0.9] uppercase tracking-tighter">
                    Unlock <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">True Power</span>
                </h1>
                
                <p className="text-base md:text-xl text-slate-400 max-w-lg font-light leading-relaxed pl-1 border-l-2 border-brand-red/50">
                    Specialized ECU Tuning (Stage 1-3) and premium CarPlay retrofits. Transform your vehicle's performance and technology today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4">
                    <button
                        onClick={handleGetTuned}
                        className="group relative flex items-center justify-center gap-3 bg-brand-red hover:bg-[#cc0000] text-white text-base font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-[0_0_30px_rgba(230,0,0,0.3)] hover:shadow-[0_0_50px_rgba(230,0,0,0.5)] overflow-hidden cursor-pointer"
                    >
                        <span className="relative z-10">Get Tuned</span>
                        <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    </button>
                    
                    <button
                        onClick={handleViewStages}
                        className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-base font-medium uppercase tracking-wider px-8 py-4 rounded-full transition-all hover:border-white/30 cursor-pointer"
                    >
                        View Stages
                    </button>
                </div>

                {/* Trust Stats */}
                <div className="flex items-center gap-8 pt-8">
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-white font-display">2,000+</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Vehicles Tuned</span>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-white font-display">100%</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Satisfaction</span>
                    </div>
                </div>
            </div>

            {/* Right Area - Floating Performance HUD */}
            <div className="lg:col-span-5 relative h-full hidden lg:flex flex-col justify-center items-end pt-20 pr-4">
                 
                 {/* HUD Grid Container */}
                 <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
                    
                    {/* Card 1: Horsepower (Dominant) */}
                    <div className="col-span-2 bg-[#111111] border border-white/10 p-5 rounded-2xl shadow-2xl hover:border-brand-red/50 transition-colors group cursor-default">
                        <div className="flex justify-between items-start mb-2">
                             <div className="p-2 bg-brand-red/20 rounded-lg text-brand-red border border-brand-red/20 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                                <Gauge className="w-6 h-6" />
                            </div>
                            <span className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-1 rounded border border-green-500/20 uppercase tracking-wider">
                                Stage 2
                            </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-white font-bold text-4xl font-display tracking-wide">+140</span>
                            <span className="text-slate-400 text-sm font-bold uppercase">HP Gain</span>
                        </div>
                        {/* Progress Bar Visual */}
                        <div className="w-full h-1.5 bg-slate-800 rounded-full mt-4 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-brand-red to-orange-600 w-[75%] rounded-full shadow-[0_0_10px_rgba(230,0,0,0.5)]"></div>
                        </div>
                    </div>

                    {/* Card 2: Torque (Compact) */}
                    <div className="bg-[#111111] border border-white/10 p-4 rounded-2xl shadow-xl hover:border-yellow-500/50 transition-colors group cursor-default">
                        <div className="p-2 w-fit bg-yellow-500/20 rounded-lg text-yellow-500 border border-yellow-500/20 mb-3 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                            <Activity className="w-5 h-5" />
                        </div>
                        <div className="text-white font-bold text-2xl font-display tracking-wide leading-none">480 lb-ft</div>
                        <div className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Peak Torque</div>
                    </div>

                    {/* Card 3: 0-60 Time (Compact) */}
                    <div className="bg-[#111111] border border-white/10 p-4 rounded-2xl shadow-xl hover:border-blue-500/50 transition-colors group cursor-default">
                         <div className="p-2 w-fit bg-blue-500/20 rounded-lg text-blue-500 border border-blue-500/20 mb-3 group-hover:bg-blue-500 group-hover:text-white transition-all">
                            <Timer className="w-5 h-5" />
                        </div>
                        <div className="text-white font-bold text-2xl font-display tracking-wide leading-none">2.8s</div>
                        <div className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">0-60 MPH</div>
                    </div>

                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;