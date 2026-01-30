import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceHighlights from '../components/ServiceHighlights';
import Comparison from '../components/Comparison';
import VehicleSelector from '../components/VehicleSelector';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import { Product } from '../types';
import { ArrowRight, ChevronDown, Wifi, Smartphone, Music } from 'lucide-react';

const CarPlay: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const shopSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const handleSelection = (selection: { brand: string; model: string; year: string; price: string }) => {
    const carString = `${selection.brand} ${selection.model} (${selection.year})`;
    setSelectedCar(carString);
    setSelectedPrice(selection.price);
    
    // Smooth scroll to contact section
    if (contactSectionRef.current) {
        contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToShop = () => {
      if (shopSectionRef.current) {
          shopSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  }

  return (
    <div className="bg-[#050505]">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
         {/* Background Layer - Cinematic BMW Interior */}
         <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute inset-0">
                 <img 
                    src="/images/hero-carplay.avif"
                    alt="BMW Interior CarPlay" 
                    className="w-full h-full object-cover object-[70%_center] md:object-center opacity-100 font-display"
                    loading="eager"
                    fetchPriority="high"
                 />
             </div>
             
             {/* Darker left side for text readability with a smooth transition */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505] via-[#050505]/80 via-[#050505]/40 to-transparent"></div>
             
             {/* Soft Bottom Gradient to blend into the next section */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>

             {/* Slight vignette from top */}
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
         
         <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 h-screen flex flex-col justify-center">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
                 
                 {/* Left Text Content */}
                 <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
                     <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-[#111111]/50 border border-white/10 px-4 py-1.5 rounded-full shadow-lg"
                     >
                        <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shadow-[0_0_10px_#E60000]"></span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Wireless Tech Upgrade</span>
                     </motion.div>
                     
                     <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-white leading-[0.9] uppercase tracking-tight"
                     >
                        Modernize <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Your Drive</span>
                     </motion.h1>
                     
                     <motion.p 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base md:text-xl text-slate-400 max-w-lg font-light leading-relaxed pl-1 border-l-2 border-brand-red/50"
                     >
                        Install Apple CarPlay and Android Auto in any classic or modern vehicle. OEM integration, crystal clear display, wire-free experience.
                     </motion.p>
                     
                     <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4"
                     >
                         <motion.button 
                            onClick={scrollToShop}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center justify-center gap-3 bg-brand-red hover:bg-[#cc0000] text-white text-base font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-[0_0_30px_rgba(230,0,0,0.3)] hover:shadow-[0_0_50px_rgba(230,0,0,0.5)] overflow-hidden cursor-pointer"
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
                             />                             <motion.div
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
                             />                             <span className="relative z-10">Select Your Car</span>
                             <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                             {/* Shimmer */}
                             <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                             </div>
                         </motion.button>
                         <a href="#compatibility" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-base font-medium uppercase tracking-wider px-8 py-4 rounded-full transition-all hover:border-white/30 cursor-pointer">
                            Compatibility
                         </a>
                     </motion.div>

                     {/* Trust Stats */}
                     <div className="flex items-center justify-center lg:justify-start gap-5 sm:gap-8 pt-8 w-full lg:w-auto">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            <span className="text-2xl sm:text-3xl font-bold text-white font-display">500+</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Installs Done</span>
                        </motion.div>
                        <div className="w-px h-8 bg-white/10"></div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            <span className="text-2xl sm:text-3xl font-bold text-white font-display">100%</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">OEM Match</span>
                        </motion.div>
                        <div className="w-px h-8 bg-white/10"></div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            <span className="text-2xl sm:text-3xl font-bold text-white font-display">2007</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Established</span>
                        </motion.div>
                     </div>
                 </div>

                 {/* Right Area - Floating HUD cards */}
                 <div className="lg:col-span-5 relative hidden lg:flex flex-col justify-center items-end pt-20 pr-4">
                    
                    {/* HUD Grid Container */}
                    <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
                        
                        {/* Card 1: Wireless (Dominant) */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="col-span-2 bg-[#111111] border border-white/10 p-5 rounded-2xl shadow-2xl hover:border-brand-red/50 transition-colors group cursor-default"
                        >
                            <div className="flex justify-between items-start mb-2">
                                 <div className="p-2 bg-brand-red/20 rounded-lg text-brand-red border border-brand-red/20 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                                    <Wifi className="w-6 h-6" />
                                </div>
                                <span className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-1 rounded border border-green-500/20 uppercase tracking-wider">
                                    Wireless
                                </span>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-white font-bold text-4xl font-display tracking-wide">5GHz</span>
                                <span className="text-slate-400 text-sm font-bold uppercase">Stability</span>
                            </div>
                            {/* Progress Bar Visual */}
                            <div className="w-full h-1.5 bg-slate-800 rounded-full mt-4 overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: "95%" }}
                                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-brand-red to-orange-600 rounded-full shadow-[0_0_10px_rgba(230,0,0,0.5)]"
                                />
                            </div>
                        </motion.div>

                        {/* Card 2: Audio (Compact) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-[#111111] border border-white/10 p-4 rounded-2xl shadow-xl hover:border-blue-500/50 transition-colors group cursor-default"
                        >
                            <div className="p-2 w-fit bg-blue-500/20 rounded-lg text-blue-500 border border-blue-500/20 mb-3 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <Music className="w-5 h-5" />
                            </div>
                            <div className="text-white font-bold text-2xl font-display tracking-wide leading-none">Lossless</div>
                            <div className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">High-Res Audio</div>
                        </motion.div>

                        {/* Card 3: Integration (Compact) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="bg-[#111111] border border-white/10 p-4 rounded-2xl shadow-xl hover:border-green-500/50 transition-colors group cursor-default"
                        >
                            <div className="p-2 w-fit bg-green-500/20 rounded-lg text-green-500 border border-green-500/20 mb-3 group-hover:bg-green-500 group-hover:text-black transition-all">
                                <Smartphone className="w-5 h-5" />
                            </div>
                            <div className="text-white font-bold text-2xl font-display tracking-wide leading-none">Full OEM</div>
                            <div className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Native Control</div>
                        </motion.div>
                    </div>
                 </div>

             </div>
         </div>

         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
            <ChevronDown className="w-8 h-8" />
         </div>
      </section>

      {/* 2. Compact Highlights (Replacing BrandGrid) */}
      <ServiceHighlights type="carplay" />

      {/* 3. The Comparison (Dark Mode Section) */}
      <Comparison />

      {/* 4. Shopping Section (Combined Selector + Detail) */}
      <div id="shop-section" ref={shopSectionRef} className="bg-[#050505] py-16 md:py-20 border-t border-white/5 relative overflow-hidden">
         {/* Decorative Background Text for Shop Section */}
         <div className="absolute left-4 top-20 select-none pointer-events-none opacity-[0.04] z-0">
             <span className="text-[80px] md:text-[120px] font-black uppercase text-stroke transform -rotate-90 block">WIRELESS</span>
         </div>
         <div className="absolute lg:-right-20 -right-4 bottom-1/4 select-none pointer-events-none opacity-[0.04] z-0">
             <span className="text-[100px] md:text-[150px] font-black uppercase text-stroke block tracking-[10px] md:tracking-[20px]">RETROFIT</span>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
             <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px]"
             >
                Limard Store
             </motion.span>
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight"
             >
                Premium Retrofit Solutions
             </motion.h2>
             <div className="w-10 h-1 bg-brand-red mx-auto mt-5"></div>
         </div>

         {/* Selector */}
         <div className="relative z-10">
            <VehicleSelector onSelect={handleSelection} />
         </div>
      </div>

      {/* 5. Contact Section */}
      <div id="contact" ref={contactSectionRef}>
        <Contact 
            type="carplay" 
            initialCar={selectedCar} 
            initialPrice={selectedPrice} 
            initialService="CarPlay Retrofit"
        />
      </div>

      {/* 6. FAQ Section */}
      <FAQ />
    </div>
  );
};

export default CarPlay;