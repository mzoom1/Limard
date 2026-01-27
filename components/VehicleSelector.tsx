import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Check, ShoppingCart, CarFront, Calendar, Tag, Search, Clock, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';

interface VehicleSelectorProps {
    onSelect: (selection: { brand: string; model: string; year: string; price: string }) => void;
    initialBrand?: string;
}

const BRANDS = [
  "Abarth", "Acura", "Alfa Romeo", "Alpine", "Aston Martin", "Audi", "Bentley", "BMW", 
  "Bugatti", "Buick", "BYD", "Cadillac", "Chevrolet", "Chrysler", "Citroen", "Cupra", 
  "Dacia", "Dodge", "Ferrari", "Fiat", "Ford", "Genesis", "GMC", "Honda", "Hyundai", 
  "Infiniti", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "Lexus", "Lincoln", 
  "Lotus", "Maserati", "Mazda", "McLaren", "Mercedes", "Mini", "Mitsubishi", "Nissan", 
  "Opel", "Peugeot", "Polestar", "Porsche", "Ram", "Renault", "Rivian", "Rolls-Royce", 
  "Seat", "Skoda", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"
].sort();

const MODELS: Record<string, string[]> = {
  "Abarth": ["500", "595", "695", "124 Spider"],
  "Acura": ["ILX", "TLX", "RLX", "RDX", "MDX", "NSX", "Integra"],
  "Alfa Romeo": ["Giulietta", "Giulia", "Stelvio", "4C", "Tonale"],
  "Alpine": ["A110"],
  "Aston Martin": ["Vantage", "DB11", "DBS", "DBX"],
  "Audi": ["A1", "A3/RS3", "A4/RS4", "A5/RS5", "A6/RS6", "A7/RS7", "A8/S8", "Q3", "Q5", "Q7", "Q8", "e-tron", "TT", "R8"],
  "Bentley": ["Continental GT", "Flying Spur", "Bentayga"],
  "BMW": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4", "i3", "i4", "iX"],
  "Bugatti": ["Chiron", "Veyron"],
  "Buick": ["Encore", "Envision", "Enclave", "Regal"],
  "BYD": ["Atto 3", "Han", "Tang", "Seal", "Dolphin"],
  "Cadillac": ["CT4", "CT5", "XT4", "XT5", "XT6", "Escalade"],
  "Chevrolet": ["Cruze", "Malibu", "Camaro", "Corvette", "Equinox", "Traverse", "Tahoe", "Suburban"],
  "Chrysler": ["300C", "Pacifica", "Voyager"],
  "Citroen": ["C3", "C4", "C5 Aircross", "Berlingo"],
  "Cupra": ["Leon", "Formentor", "Ateca", "Born"],
  "Dacia": ["Sandero", "Duster", "Jogger", "Logan"],
  "Dodge": ["Challenger", "Charger", "Durango", "RAM 1500"],
  "Ferrari": ["488/F8", "Roma", "Portofino", "812 Superfast", "SF90", "Purosangue"],
  "Fiat": ["500", "500X", "Panda", "Tipo"],
  "Ford": ["Focus", "Mondeo", "Fiesta", "Fusion", "Explorer", "Kuga", "Mustang", "F-150", "Ranger"],
  "Genesis": ["G70", "G80", "G90", "GV70", "GV80"],
  "GMC": ["Sierra", "Yukon", "Acadia", "Terrain", "Hummer EV"],
  "Honda": ["Civic", "Accord", "CR-V", "HR-V", "Pilot", "Odyssey"],
  "Hyundai": ["i10/i20/i30", "Elantra", "Sonata", "Tucson", "Santa Fe", "Palisade", "Kona", "Ioniq 5"],
  "Infiniti": ["Q50", "Q60", "QX50", "QX60", "QX80"],
  "Jaguar": ["XE", "XF", "XJ", "E-Pace", "F-Pace", "I-Pace", "F-Type"],
  "Jeep": ["Renegade", "Compass", "Cherokee", "Grand Cherokee", "Wrangler", "Gladiator"],
  "Kia": ["Ceed", "Cerato", "K5", "Stinger", "Sportage", "Sorento", "EV6", "Telluride"],
  "Lamborghini": ["Aventador", "Huracan", "Urus"],
  "Land Rover": ["Range Rover", "Range Rover Sport", "Range Rover Velar", "Range Rover Evoque", "Defender", "Discovery", "Discovery Sport"],
  "Lexus": ["IS", "ES", "GS", "LS", "UX", "NX", "RX", "GX", "LX", "LC"],
  "Lincoln": ["Corsair", "Nautilus", "Aviator", "Navigator"],
  "Lotus": ["Emira", "Evora", "Eletre"],
  "Maserati": ["Ghibli", "Quattroporte", "Levante", "Grecale", "MC20"],
  "Mazda": ["Mazda 2/3/6", "CX-30", "CX-5", "CX-9", "MX-5"],
  "McLaren": ["720S", "Artura", "GT", "765LT"],
  "Mercedes": ["A-Class", "B-Class", "C-Class", "E-Class", "S-Class", "CLA", "CLS", "GLA", "GLB", "GLC", "GLE", "GLS", "G-Wagon", "EQS", "SL/AMG GT"],
  "Mini": ["Cooper", "Countryman", "Clubman"],
  "Mitsubishi": ["Lancer", "Outlander", "ASX", "Pajero Sport", "Eclipse Cross"],
  "Nissan": ["Altima", "Sentra", "Rogue", "Murano", "Pathfinder", "Patrol", "Qashqai", "Leaf", "370Z/400Z", "GT-R"],
  "Opel": ["Corsa", "Astra", "Insignia", "Mokka", "Grandland"],
  "Peugeot": ["208", "308", "508", "2008", "3008", "5008"],
  "Polestar": ["Polestar 2", "Polestar 3"],
  "Porsche": ["911 (991/992)", "718 Cayman/Boxster", "Panamera", "Macan", "Cayenne", "Taycan"],
  "Ram": ["1500", "2500", "TRX"],
  "Renault": ["Clio", "Megane", "Captur", "Kadjar", "Koleos", "Arkana"],
  "Rivian": ["R1T", "R1S"],
  "Rolls-Royce": ["Ghost", "Phantom", "Cullinan"],
  "Seat": ["Ibiza", "Leon", "Ateca", "Tarraco"],
  "Skoda": ["Fabia", "Scala", "Octavia", "Superb", "Kamiq", "Karoq", "Kodiaq", "Enyaq"],
  "Smart": ["Fortwo", "Forfour", "#1"],
  "Subaru": ["Impreza", "Legacy", "Forester", "Outback", "XV", "WRX"],
  "Suzuki": ["Swift", "Vitara", "Jimny", "S-Cross"],
  "Tesla": ["Model 3", "Model Y", "Model S", "Model X"],
  "Toyota": ["Camry", "Corolla", "RAV4", "Highlander", "Land Cruiser Prado", "Land Cruiser 200/300", "Hilux", "Supra"],
  "Volkswagen": ["Golf 7/8", "Passat B8", "Tiguan", "Touareg", "Arteon", "T-Roc", "Polo", "Jetta", "ID.4/ID.6", "Teramont"],
  "Volvo": ["XC40", "XC60", "XC90", "S60", "S90", "V60", "V90"]
};

const YEARS = ["2005-2008", "2009-2012", "2013-2015", "2016-2018", "2019-2021", "2022-2024", "2025+"];

const TOP_BRANDS = ["Audi", "BMW", "Ford", "Honda", "Lexus", "Mercedes", "Porsche", "Tesla", "Toyota", "Volkswagen"];

const VehicleSelector: React.FC<VehicleSelectorProps> = ({ onSelect, initialBrand }) => {
  const [step, setStep] = useState(initialBrand ? 2 : 1);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllBrands, setShowAllBrands] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const priceCardRef = useRef<HTMLDivElement>(null);
  const [selection, setSelection] = useState({
    brand: initialBrand || '',
    model: '',
    year: ''
  });

  const isComplete = selection.brand && selection.model && selection.year;

  // Auto-scroll to price card when selection is complete (especially on mobile)
  useEffect(() => {
    if (isComplete && step === 3) {
      // Small timeout to allow the price card to render/animate in
      const timer = setTimeout(() => {
        // Use 'start' for better alignment on mobile, 'center' can sometimes be off
        priceCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isComplete, step]);

  // Handle initialBrand changes
  useEffect(() => {
    if (initialBrand) {
      setSelection(prev => ({ ...prev, brand: initialBrand }));
      setStep(2);
    }
  }, [initialBrand]);

  // Auto-focus search on step 1 (Removed to prevent keyboard popup on mobile)
  /* 
  useEffect(() => {
    if (step === 1 && searchInputRef.current) {
        // Prevent scroll jumping by using preventScroll option
        searchInputRef.current.focus({ preventScroll: true });
    }
  }, [step]);
  */

  const filteredBrands = useMemo(() => {
    return BRANDS.filter(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const handleReset = () => {
    setSelection({ brand: '', model: '', year: '' });
    setSearchQuery('');
    setStep(1);
  };

  const goToStep = (targetStep: number) => {
    if (targetStep < step) {
        setStep(targetStep);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#111111] rounded-[2rem] p-4 md:p-8 shadow-2xl relative border border-white/5">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/10 blur-[100px] -mr-40 -mt-40 overflow-hidden pointer-events-none rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[80px] -ml-32 -mb-32 overflow-hidden pointer-events-none rounded-full"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                
                {/* Left Side: Selection GUI */}
                <div className="lg:col-span-8 flex flex-col">
                    {/* Clickable Steppers */}
                    <div className="flex items-center gap-3 mb-6 overflow-x-auto pt-2 pb-4 px-2 no-scrollbar -mt-2 -mx-2">
                        {[1, 2, 3].map((s) => (
                            <button 
                                key={s} 
                                onClick={() => goToStep(s)}
                                disabled={s >= step}
                                className={`flex items-center gap-2 flex-shrink-0 transition-all duration-300 ${s < step ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
                            >
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${step === s ? 'bg-brand-red text-white scale-110 shadow-[0_0_15px_rgba(230,0,0,0.5)]' : step > s ? 'bg-green-500 text-white' : 'bg-white/10 text-white/40'}`}>
                                    {step > s ? <Check className="w-3.5 h-3.5" /> : s}
                                </div>
                                <span className={`text-[9px] uppercase tracking-widest font-bold transition-colors duration-300 ${step >= s ? 'text-white' : 'text-white/20'}`}>
                                    {s === 1 ? 'Brand' : s === 2 ? 'Model' : 'Year'}
                                </span>
                                {s < 3 && <div className="w-6 h-[1px] bg-white/10 mx-1"></div>}
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[360px] relative">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div 
                                    key="step1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                        {/* Search Bar */}
                                <div className="relative mb-4">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                    <input 
                                        ref={searchInputRef}
                                        type="text"
                                        placeholder="Search brand (e.g. BMW, Mercedes, Porsche...)"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 transition-colors"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5 max-h-[350px] overflow-y-auto pt-1 pb-4 px-1 -mt-2 -mx-1 custom-scrollbar">
                                    {(!searchQuery && !showAllBrands) ? (
                                        <>
                                            {TOP_BRANDS.map((brandName) => (
                                                <motion.button 
                                                    key={brandName}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => { setSelection(prev => ({ ...prev, brand: brandName })); setStep(2); }}
                                                    className={`py-3 px-2 rounded-xl border transition-all duration-300 flex items-center justify-center text-center group ${selection.brand === brandName ? 'bg-brand-red border-brand-red shadow-[0_0_20px_rgba(230,0,0,0.3)]' : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'}`}
                                                >
                                                    <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-colors ${selection.brand === brandName ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>{brandName}</span>
                                                </motion.button>
                                            ))}
                                            <button 
                                                onClick={() => setShowAllBrands(true)}
                                                className="col-span-2 py-3 px-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group"
                                            >
                                                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-red">Browse All Brands</span>
                                                <ChevronDown className="w-3 h-3 text-brand-red group-hover:translate-y-0.5 transition-transform" />
                                            </button>
                                        </>
                                    ) : filteredBrands.length > 0 ? (
                                        filteredBrands.map((brandName) => (
                                            <motion.button 
                                                key={brandName}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => { setSelection(prev => ({ ...prev, brand: brandName })); setStep(2); }}
                                                className={`py-3 px-2 rounded-xl border transition-all duration-300 flex items-center justify-center text-center group ${selection.brand === brandName ? 'bg-brand-red border-brand-red shadow-[0_0_20px_rgba(230,0,0,0.3)]' : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'}`}
                                            >
                                                <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-colors ${selection.brand === brandName ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>{brandName}</span>
                                            </motion.button>
                                        ))
                                    ) : (
                                        <div className="col-span-full py-8 text-center">
                                            <p className="text-white/40 text-xs">No brands found</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div 
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center justify-between">
                                    <h4 className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-bold">Select Model</h4>
                                    <button onClick={() => setStep(1)} className="text-brand-red text-[9px] font-bold uppercase hover:underline">Back</button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                                    {selection.brand && MODELS[selection.brand]?.map((m) => (
                                        <motion.button 
                                            key={m}
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => { setSelection(prev => ({ ...prev, model: m })); setStep(3); }}
                                            className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between group ${selection.model === m ? 'bg-brand-red border-brand-red text-white' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white'}`}
                                        >
                                            <span className="text-xs font-bold tracking-wide">{m}</span>
                                            <ArrowRight className={`w-3.5 h-3.5 transition-transform ${selection.model === m ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div 
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center justify-between">
                                    <h4 className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-bold">Select Year Range</h4>
                                    <button onClick={() => setStep(2)} className="text-brand-red text-[9px] font-bold uppercase hover:underline">Back</button>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {YEARS.map((y) => (
                                        <motion.button 
                                            key={y}
                                            whileHover={{ y: -3 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelection(prev => ({ ...prev, year: y }))}
                                            className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-1 group ${selection.year === y ? 'bg-brand-red border-brand-red shadow-[0_10px_20px_rgba(230,0,0,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                                        >
                                            <Calendar className={`w-4 h-4 ${selection.year === y ? 'text-white' : 'text-white/40 group-hover:text-brand-red'}`} />
                                            <span className={`text-xs font-bold tracking-widest ${selection.year === y ? 'text-white' : 'text-white/60'}`}>{y}</span>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Side: Price Card & Summary */}
                <div 
                    ref={priceCardRef}
                    className={`lg:col-span-4 h-full pt-10 pb-10 -mt-10 ${selection.brand ? 'block' : 'hidden lg:block'}`}
                >
                    <div className={`h-full rounded-3xl p-8 border transition-all duration-500 relative flex flex-col ${isComplete ? 'bg-white shadow-[0_30px_60px_-15px_rgba(230,0,0,0.4)] scale-105 border-white' : 'bg-white/[0.03] border-white/10'}`}>
                        
                        {/* Summary Header */}
                        <div className="mb-8">
                            <h3 className={`text-xs font-bold uppercase tracking-[0.2em] mb-6 ${isComplete ? 'text-brand-red' : 'text-white/40'}`}>
                                {isComplete ? 'Ready to Upgrade' : 'Your Configuration'}
                            </h3>
                            
                            <div className="space-y-4">
                                {/* Brand Selection Step */}
                                <div className={`flex items-center gap-2.5 transition-all duration-300 ${selection.brand ? 'opacity-100' : 'opacity-20'}`}>
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] ${selection.brand ? 'bg-green-500/20 text-green-500' : 'bg-white/10 text-white'}`}>
                                        {selection.brand ? <Check className="w-2.5 h-2.5" /> : '1'}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`text-[8px] uppercase font-bold tracking-tight ${isComplete ? 'text-slate-400' : 'text-white/40'}`}>Brand</span>
                                        <span className={`text-xs font-bold ${isComplete ? 'text-slate-900' : 'text-white'}`}>{selection.brand || '---'}</span>
                                    </div>
                                </div>

                                {/* Model Selection Step */}
                                <div className={`flex items-center gap-2.5 transition-all duration-300 ${selection.model ? 'opacity-100' : 'opacity-20'}`}>
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] ${selection.model ? 'bg-green-500/20 text-green-500' : 'bg-white/10 text-white'}`}>
                                        {selection.model ? <Check className="w-2.5 h-2.5" /> : '2'}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`text-[8px] uppercase font-bold tracking-tight ${isComplete ? 'text-slate-400' : 'text-white/40'}`}>Model</span>
                                        <span className={`text-xs font-bold ${isComplete ? 'text-slate-900' : 'text-white'}`}>{selection.model || '---'}</span>
                                    </div>
                                </div>

                                {/* Year Selection Step */}
                                <div className={`flex items-center gap-2.5 transition-all duration-300 ${selection.year ? 'opacity-100' : 'opacity-20'}`}>
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] ${selection.year ? 'bg-green-500/20 text-green-500' : 'bg-white/10 text-white'}`}>
                                        {selection.year ? <Check className="w-2.5 h-2.5" /> : '3'}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`text-[8px] uppercase font-bold tracking-tight ${isComplete ? 'text-slate-400' : 'text-white/40'}`}>Year</span>
                                        <span className={`text-xs font-bold ${isComplete ? 'text-slate-900' : 'text-white'}`}>{selection.year || '---'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {isComplete ? (
                            <motion.div 
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-auto pt-6 border-t border-slate-100"
                            >
                                <div className="mb-5">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-display font-black text-slate-900">$649</span>
                                        <span className="text-slate-400 text-xs font-bold">.00</span>
                                    </div>
                                    <p className="text-slate-500 text-[9px] font-bold uppercase tracking-wider mt-0.5">Full kit + Installation</p>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-600">
                                        <ShieldCheck className="w-4 h-4 text-green-500" />
                                        <span>2 Year Warranty</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-600">
                                        <Clock className="w-4 h-4 text-brand-red" />
                                        <span>3-Hour Installation</span>
                                    </div>
                                </div>

                                <motion.button 
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-brand-red hover:bg-[#cc0000] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-xl group cursor-pointer text-sm"
                                    onClick={() => onSelect({ ...selection, price: '$649.00' })}
                                >
                                    Order Now <ShoppingCart className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <button 
                                    onClick={handleReset}
                                    className="w-full py-3 text-slate-400 text-[9px] font-bold uppercase tracking-widest hover:text-slate-900 transition-colors mt-1 cursor-pointer"
                                >
                                    Reset Selection
                                </button>
                            </motion.div>
                        ) : (
                            <div className="mt-auto py-8 flex flex-col items-center justify-center text-center border-t border-white/5">
                                <Tag className="w-8 h-8 text-white/10 mb-3" />
                                <p className="text-white/30 text-[10px] font-medium px-4 leading-relaxed">
                                    Complete all steps to see the exact price and availability for your vehicle.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default VehicleSelector;