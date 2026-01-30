import React from 'react';
import { ArrowRight, Gauge, Zap, Timer, Activity, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  
  const handleGetTuned = (e: React.MouseEvent) => {
    e.preventDefault();
    const calcSection = document.getElementById('tuning-calc');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
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
            <picture>
              <source srcSet="/images/hero-tuning.avif" type="image/avif" />
              <source srcSet="/images/hero-tuning.webp" type="image/webp" />
              <img
                  src="/images/hero-tuning.png"
                  alt="Professional ECU tuning for BMW, Audi, Mercedes in Los Angeles - Stage 1 performance upgrades"
                  className="w-full h-full object-cover object-[65%_center] md:object-center opacity-100"
                  width="1920"
                  height="1080"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
              />
            </picture>
        </div>

        {/* Cinematic Gradient Mask - Creates the 'Text Overlay' effect */}
        {/* Darker left side for text readability with a smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505] via-[#050505]/80 via-[#050505]/40 to-transparent"></div>
        
        {/* Soft Bottom Gradient to blend into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-100"></div>

        {/* Slight vignettes to hide edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-transparent"></div>

        {/* Decorative Background Text */}
        <div className="absolute left-0 bottom-10 w-full overflow-hidden select-none pointer-events-none opacity-[0.06]">
          <span className="text-[25vw] font-black uppercase text-white leading-none whitespace-nowrap lg:-ml-20 -ml-4 tracking-tighter">
            Limard
          </span>
        </div>
        <div className="absolute lg:right-0 right-4 top-1/4 select-none pointer-events-none opacity-[0.03] rotate-90 origin-right">
          <span className="text-[10vw] font-black uppercase text-white leading-none whitespace-nowrap">
            Los Angeles
          </span>
        </div>
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 h-screen flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
            
            {/* Left Content Area (Text) */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-8">
                
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-[#111111]/50 border border-white/10 px-4 py-1.5 rounded-full shadow-lg"
                >
                    <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shadow-[0_0_10px_#E60000]"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">USA Performance Tuning Leader</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-white leading-[0.9] uppercase tracking-tight"
                >
                    Unlock <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">True Power</span>
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base md:text-xl text-slate-400 max-w-lg font-light leading-relaxed pl-1 border-l-2 border-brand-red/50"
                >
                    Specialized ECU Tuning (Stage 1-3) and premium CarPlay retrofits. Transform your vehicle's performance and technology today.
                </motion.p>

                {/* Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4"
                >
                    <motion.button
                        onClick={handleGetTuned}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center justify-center gap-3 bg-brand-red hover:bg-[#cc0000] text-white text-base font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer"
                    >
                        {/* High-End Blurred Glow Effect */}
                        <motion.div
                            animate={{ 
                                scale: [1, 1.15, 1],
                                opacity: [0.4, 0.7, 0.4]
                            }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                            className="absolute inset-0 bg-brand-red rounded-full blur-3xl -z-10 opacity-60"
                        />
                        <motion.div
                            animate={{ 
                                scale: [1, 1.3, 1],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                            className="absolute inset-0 bg-brand-red rounded-full blur-[40px] -z-10"
                        />
                        
                        <span className="relative z-10">Get Tuned</span>
                        <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                        </div>
                    </motion.button>
                    
                    <button
                        onClick={handleViewStages}
                        className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-base font-medium uppercase tracking-wider px-8 py-4 rounded-full transition-all hover:border-white/30 cursor-pointer"
                    >
                        View Stages
                    </button>
                </motion.div>

                {/* Trust Stats */}
                <div className="flex items-center justify-center lg:justify-start gap-5 sm:gap-8 pt-8 w-full lg:w-auto">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <span className="text-2xl sm:text-3xl font-bold text-white font-display">2,000+</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Vehicles Tuned</span>
                    </motion.div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <span className="text-2xl sm:text-3xl font-bold text-white font-display">100%</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Satisfaction</span>
                    </motion.div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <span className="text-2xl sm:text-3xl font-bold text-white font-display">2006</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Established</span>
                    </motion.div>
                </div>
            </div>

            {/* Right Area - Floating Performance HUD */}
            <div className="lg:col-span-5 relative h-full hidden lg:flex flex-col justify-center items-end pt-20 pr-4">
                 
                 {/* HUD Grid Container */}
                 <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
                    
                    {/* Card 1: Horsepower (Dominant) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-2 bg-[#111111] border border-white/10 p-5 rounded-2xl shadow-2xl hover:border-brand-red/50 transition-colors group cursor-default"
                    >
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
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-brand-red to-orange-600 rounded-full shadow-[0_0_10px_rgba(230,0,0,0.5)]"
                            />
                        </div>
                    </motion.div>

                    {/* Card 2: Torque (Compact) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-[#111111] border border-white/10 p-4 rounded-2xl shadow-xl hover:border-yellow-500/50 transition-colors group cursor-default"
                    >
                        <div className="p-2 w-fit bg-yellow-500/20 rounded-lg text-yellow-500 border border-yellow-500/20 mb-3 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                            <Activity className="w-5 h-5" />
                        </div>
                        <div className="text-white font-bold text-2xl font-display tracking-wide leading-none">480 lb-ft</div>
                        <div className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Peak Torque</div>
                    </motion.div>

                    {/* Card 3: 0-60 Time (Compact) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="bg-[#111111] border border-white/10 p-4 rounded-2xl shadow-xl hover:border-blue-500/50 transition-colors group cursor-default"
                    >
                         <div className="p-2 w-fit bg-blue-500/20 rounded-lg text-blue-500 border border-blue-500/20 mb-3 group-hover:bg-blue-500 group-hover:text-white transition-all">
                            <Timer className="w-5 h-5" />
                        </div>
                        <div className="text-white font-bold text-2xl font-display tracking-wide leading-none">2.8s</div>
                        <div className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">0-60 MPH</div>
                    </motion.div>

                 </div>
            </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;