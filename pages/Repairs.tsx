import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Key, Lock, Settings, ShieldCheck, Database, Zap, Wrench, ChevronRight, ChevronDown, Check, Cog, RefreshCw, Search, ArrowRight } from 'lucide-react';
import Contact from '../components/Contact';

const Repairs: React.FC = () => {
  return (
    <div className="bg-white">
      
      {/* 1. Technical Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
         <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute inset-0">
                 <img 
                     src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2669&auto=format&fit=crop" 
                     alt="Circuit Board Macro" 
                     className="w-full h-full object-cover opacity-30"
                 />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505] via-[#050505]/80 via-[#050505]/40 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
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
             <div className="lg:col-span-7 flex flex-col items-start space-y-8 max-w-3xl">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-[#111111]/50 border border-white/10 px-4 py-1.5 rounded-full shadow-lg"
                 >
                    <Cpu className="w-4 h-4 text-brand-red" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Lab Services</span>
                 </motion.div>

                 <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-display font-black text-white leading-[0.9] uppercase tracking-tight"
                 >
                    Advanced <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Electronics</span>
                 </motion.h1>

                 <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-base md:text-xl text-slate-400 max-w-lg font-light leading-relaxed pl-1 border-l-2 border-brand-red/50"
                 >
                    Dealer-level diagnostics and repair for control modules and drivetrains. 
                    We fix what others replace. ECU cloning, TCU repair, Immobilizer solutions, and gearbox mechatronics.
                 </motion.p>

                 <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-4"
                 >
                    <motion.a 
                       href="#services-grid"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="group relative flex items-center justify-center gap-3 bg-brand-red hover:bg-[#cc0000] text-white text-base font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all cursor-pointer"
                       onClick={(e) => {
                         e.preventDefault();
                         document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' });
                       }}
                    >
                       <motion.div
                          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute inset-0 bg-brand-red rounded-full blur-3xl -z-10 opacity-60"
                       />
                       <span className="relative z-10">View Services</span>
                       <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <a
                       href="#contact"
                       className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-base font-medium uppercase tracking-wider px-8 py-4 rounded-full transition-all hover:border-white/30 cursor-pointer"
                       onClick={(e) => {
                         e.preventDefault();
                         document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                       }}
                    >
                       Book Repair
                    </a>
                 </motion.div>

                 {/* Trust Stats */}
                 <div className="flex items-center justify-center lg:justify-start gap-5 sm:gap-8 pt-8 w-full lg:w-auto">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-col items-center lg:items-start">
                        <span className="text-2xl sm:text-3xl font-bold text-white font-display">500+</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">ECUs Repaired</span>
                    </motion.div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-col items-center lg:items-start">
                        <span className="text-2xl sm:text-3xl font-bold text-white font-display">12 Mo</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Warranty</span>
                    </motion.div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-col items-center lg:items-start">
                        <span className="text-2xl sm:text-3xl font-bold text-white font-display">OEM</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Parts Only</span>
                    </motion.div>
                 </div>
             </div>
         </div>

         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 hidden md:block">
            <ChevronDown className="w-8 h-8" />
         </div>
      </section>

      {/* 2. Primary Electronics Services Grid */}
      <section id="services-grid" className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Component Level Repair</span>
                  <h2 className="mt-2 text-4xl md:text-5xl font-display font-black text-slate-900 uppercase tracking-tight">
                      Electronics Laboratory
                  </h2>
                  <div className="w-24 h-1 bg-brand-red mx-auto mt-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* ECU Service */}
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-red/50 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                            // Set service after a short delay to ensure the Contact component is rendered
                            setTimeout(() => {
                                const event = new CustomEvent('setService', { detail: 'ECU Repair / Diagnostics' });
                                window.dispatchEvent(event);
                            }, 500);
                        }
                      }}
                  >
                      <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                          <Cpu className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">ECU Repair & Cloning</h3>
                      <ul className="space-y-3 text-slate-600 text-sm">
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> Water damage repair & data recovery</li>
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> Full Cloning (Old to New Unit)</li>
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> FRM Footwell Module Repair</li>
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> MSD80 / MSD81 MOSFET Repair</li>
                      </ul>
                  </motion.div>

                  {/* Keys & Immo */}
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-red/50 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                            setTimeout(() => {
                                const event = new CustomEvent('setService', { detail: 'Keys & Immobilizer' });
                                window.dispatchEvent(event);
                            }, 500);
                        }
                      }}
                  >
                      <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                          <Key className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Keys & Immobilizer</h3>
                      <ul className="space-y-3 text-slate-600 text-sm">
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> "All Keys Lost" programming</li>
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> Spare Smart Key coding</li>
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> CAS / FEM / BDC Module Repair</li>
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> ELV Steering Lock Reset/Emulator</li>
                      </ul>
                  </motion.div>

                  {/* TCU / Gearbox Electronics */}
                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-brand-red/50 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                            setTimeout(() => {
                                const event = new CustomEvent('setService', { detail: 'TCU / Mechatronic Repair' });
                                window.dispatchEvent(event);
                            }, 500);
                        }
                      }}
                  >
                      <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                          <Database className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">TCU & Coding</h3>
                      <ul className="space-y-3 text-slate-600 text-sm">
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> VGS / Mechatronic Cloning</li>
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> ISN (Secret Key) Reading/Writing</li>
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> Airbag Module Reset (Crash Data)</li>
                          <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 flex-shrink-0"></div> Component Protection Removal</li>
                      </ul>
                  </motion.div>

              </div>
          </div>
      </section>

      
      {/* 4. Automatic Transmission Full Repair Section */}
      <section className="py-24 bg-[#050505] overflow-hidden relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 select-none pointer-events-none opacity-[0.03]">
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[15vw] font-black uppercase text-white leading-none whitespace-nowrap -rotate-90 origin-right">
            Gearbox
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                    <Cog className="w-4 h-4 text-brand-red" />
                    <span className="text-brand-red text-xs font-bold uppercase tracking-widest">Full Mechanical Service</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight leading-none mb-4">
                    Automatic Transmission <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">Repair & Rebuild</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Complete disassembly, inspection, and rebuild of automatic transmissions. 
                    We handle everything from valve body issues to full clutch pack replacement.
                </p>
            </motion.div>

            {/* Supported Transmission Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                {[
                    { name: 'ZF 6HP / 8HP', brands: 'BMW, Audi, Jaguar, Chrysler', icon: '🔧' },
                    { name: 'DSG / S-Tronic', brands: 'VW, Audi, Skoda, SEAT', icon: '⚙️' },
                    { name: '7G / 9G-Tronic', brands: 'Mercedes-Benz', icon: '🔩' },
                    { name: 'GM 6T / 8L', brands: 'Chevrolet, Cadillac, GMC', icon: '🛠️' },
                ].map((trans, i) => (
                    <motion.div
                        key={trans.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-red/40 transition-all group cursor-pointer"
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                setTimeout(() => {
                                    const event = new CustomEvent('setService', { detail: 'Transmission Rebuild' });
                                    window.dispatchEvent(event);
                                }, 500);
                            }
                        }}
                    >
                        <div className="text-2xl mb-3">{trans.icon}</div>
                        <h4 className="text-white font-display font-bold text-lg uppercase tracking-wide mb-1 group-hover:text-brand-red transition-colors">{trans.name}</h4>
                        <p className="text-slate-500 text-xs">{trans.brands}</p>
                    </motion.div>
                ))}
            </div>

            {/* Rebuild Process */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Process Steps */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight mb-8">
                        Our Rebuild Process
                    </h3>
                    <div className="space-y-6">
                        {[
                            { step: '01', icon: <Search className="w-5 h-5" />, title: 'Diagnostics & Inspection', desc: 'Full computer scan, road test, and fluid analysis to identify the root cause before disassembly.' },
                            { step: '02', icon: <Wrench className="w-5 h-5" />, title: 'Disassembly & Evaluation', desc: 'Complete teardown with inspection of every component — clutch packs, bands, seals, bearings, and planetary gears.' },
                            { step: '03', icon: <RefreshCw className="w-5 h-5" />, title: 'Rebuild & Replacement', desc: 'All worn parts replaced with OEM-spec components. Valve body cleaned or replaced, new seals and gaskets throughout.' },
                            { step: '04', icon: <Cog className="w-5 h-5" />, title: 'Testing & Calibration', desc: 'Bench testing, reinstallation, TCU adaptation reset, and extensive road testing to ensure perfect shifting.' },
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="flex gap-5 group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 bg-brand-red/10 border border-brand-red/20 rounded-xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-brand-red text-[10px] font-bold uppercase tracking-widest">Step {item.step}</span>
                                    </div>
                                    <h4 className="text-white font-bold text-lg uppercase tracking-wide">{item.title}</h4>
                                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side — Key Features + CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
                        <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-6">What's Included</h3>
                        <div className="space-y-4 mb-8">
                            {[
                                'Full transmission removal & reinstallation',
                                'OEM clutch packs, seals & gaskets',
                                'Valve body rebuild or replacement',
                                'Torque converter inspection / refurbishment',
                                'New ATF fluid & filter',
                                'TCU software reset & adaptation',
                                'Solenoid testing & replacement',
                                '12-month / 12,000 mile warranty',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-brand-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-brand-red" />
                                    </div>
                                    <span className="text-slate-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-white/10 pt-6 mb-6">
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-3xl font-display font-black text-white">$2,500</span>
                                <span className="text-slate-500 text-sm font-bold uppercase">/ Starting Price</span>
                            </div>
                            <p className="text-slate-500 text-xs">Final price depends on transmission type and extent of damage</p>
                        </div>

                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-[#cc0000] text-white font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(230,0,0,0.3)] hover:shadow-[0_0_30px_rgba(230,0,0,0.5)] text-sm"
                        >
                            Get Transmission Quote <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 5. Booking / Contact Section - Using shared Contact component */}
      <Contact type="repairs" initialService="ECU Repair / Diagnostics" />

    </div>
  );
};

export default Repairs;
