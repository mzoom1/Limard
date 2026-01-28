import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Gauge, Timer, Check, Info, ArrowRight, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { TUNING_DATA } from '@/data/tuningData';

interface PerformanceSelectorProps {
    onOrder?: (data: { brand: string; model: string; generation: string; engine: string; stage: 'stage1' | 'stage2'; price: number }) => void;
}

const CustomDropdown: React.FC<{
    label: string;
    value: string;
    options: string[];
    onSelect: (val: string) => void;
    placeholder: string;
    disabled?: boolean;
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
}> = ({ label, value, options, onSelect, placeholder, disabled, isOpen, setIsOpen }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [setIsOpen]);

    return (
        <div className="relative group" ref={dropdownRef}>
            <label className="block text-[9px] uppercase font-bold text-slate-500 mb-1 ml-4">{label}</label>
            <div className="relative">
                <button
                    disabled={disabled}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-left transition-all flex items-center justify-between group-hover:bg-white/[0.08] disabled:opacity-30 disabled:cursor-not-allowed ${isOpen ? 'border-brand-red/50 ring-1 ring-brand-red/20' : ''}`}
                >
                    <span className={`text-xs truncate ${value ? 'text-white font-medium' : 'text-slate-500'}`}>
                        {value || placeholder}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-red' : ''}`} />
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute z-50 left-0 right-0 mt-2 bg-[#141414] border border-white/10 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] overflow-hidden py-1.5 max-h-[280px] overflow-y-auto custom-scrollbar"
                        >
                            {options.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => {
                                        onSelect(opt);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2.5 text-xs transition-all flex items-center justify-between group ${value === opt ? 'bg-brand-red/10 text-brand-red font-bold' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <span>{opt}</span>
                                    {value === opt && <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

const PerformanceSelector: React.FC<PerformanceSelectorProps> = ({ onOrder }) => {
    const [selection, setSelection] = useState({
        brand: '',
        model: '',
        generation: '',
        engine: ''
    });
    const [activeStage, setActiveStage] = useState<'stage1' | 'stage2'>('stage1');
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const brands = TUNING_DATA.map(d => d.brand);
    const models = useMemo(() => {
        const brand = TUNING_DATA.find(d => d.brand === selection.brand);
        return brand ? brand.models.map(m => m.name) : [];
    }, [selection.brand]);

    const generations = useMemo(() => {
        const brand = TUNING_DATA.find(d => d.brand === selection.brand);
        const model = brand?.models.find(m => m.name === selection.model);
        return model ? model.generations.map(g => g.name) : [];
    }, [selection.brand, selection.model]);

    const engines = useMemo(() => {
        const brand = TUNING_DATA.find(d => d.brand === selection.brand);
        const model = brand?.models.find(m => m.name === selection.model);
        const gen = model?.generations.find(g => g.name === selection.generation);
        return gen ? gen.engines : [];
    }, [selection.brand, selection.model, selection.generation]);

    const selectedEngine = useMemo(() => {
        return engines.find(e => e.name === selection.engine);
    }, [engines, selection.engine]);

    const handleSelect = (key: keyof typeof selection, value: string) => {
        const nextSelection = { ...selection, [key]: value };
        // Reset dependent fields
        if (key === 'brand') { nextSelection.model = ''; nextSelection.generation = ''; nextSelection.engine = ''; }
        if (key === 'model') { nextSelection.generation = ''; nextSelection.engine = ''; }
        if (key === 'generation') { nextSelection.engine = ''; }
        setSelection(nextSelection);
        if (key === 'engine') setActiveStage('stage1');
    };

    const hasStage2 = selectedEngine?.stage2 !== undefined;

    return (
        <section id="tuning-calc" className="py-12 md:py-16 bg-[#050505] relative">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(230,0,0,0.08),transparent_70%)] opacity-60 pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-red/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8">
                    <span className="text-brand-red font-bold uppercase tracking-widest text-[9px]">Interactive Configurator</span>
                    <h2 className="mt-1 text-2xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
                        Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Power Gains</span>
                    </h2>
                    <p className="mt-2 text-slate-400 max-w-xl mx-auto text-[11px] md:text-sm">
                        Select your vehicle to see exact performance improvements and pricing for Stage 1 & Stage 2 tuning.
                    </p>
                </div>

                {/* Selectors Grid */}
                <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/5 rounded-3xl p-3 md:p-5 mb-6 shadow-2xl relative z-30">
                    <div className="absolute inset-0 bg-white/[0.01] rounded-3xl pointer-events-none"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 relative z-10">
                        <div className="relative z-[40]">
                            <CustomDropdown
                                label="Brand"
                                value={selection.brand}
                                options={brands}
                                onSelect={(val) => handleSelect('brand', val)}
                                placeholder="Select Brand"
                                isOpen={openDropdown === 'brand'}
                                setIsOpen={(val) => setOpenDropdown(val ? 'brand' : null)}
                            />
                        </div>

                        <div className="relative z-[30]">
                            <CustomDropdown
                                label="Model"
                                value={selection.model}
                                options={models}
                                onSelect={(val) => handleSelect('model', val)}
                                placeholder="Select Model"
                                disabled={!selection.brand}
                                isOpen={openDropdown === 'model'}
                                setIsOpen={(val) => setOpenDropdown(val ? 'model' : null)}
                            />
                        </div>

                        <div className="relative z-[20]">
                            <CustomDropdown
                                label="Generation"
                                value={selection.generation}
                                options={generations}
                                onSelect={(val) => handleSelect('generation', val)}
                                placeholder="Select Range"
                                disabled={!selection.model}
                                isOpen={openDropdown === 'generation'}
                                setIsOpen={(val) => setOpenDropdown(val ? 'generation' : null)}
                            />
                        </div>

                        <div className="relative z-[10]">
                            <CustomDropdown
                                label="Motor"
                                value={selection.engine}
                                options={engines.map(e => e.name)}
                                onSelect={(val) => handleSelect('engine', val)}
                                placeholder="Select Engine"
                                disabled={!selection.generation}
                                isOpen={openDropdown === 'engine'}
                                setIsOpen={(val) => setOpenDropdown(val ? 'engine' : null)}
                            />
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {selectedEngine && (
                        <motion.div 
                            key={selectedEngine.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6"
                        >
                            {/* Header & Stage Tabs */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div>
                                    <h3 className="text-xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">
                                        Chip Tuning <span className="text-brand-red">{selection.brand} {selection.model}</span>
                                    </h3>
                                    <p className="text-slate-400 mt-0.5 text-sm md:text-base">{selection.engine} — {selectedEngine.volume}</p>
                                </div>

                                <div className="flex bg-white/5 p-1 rounded-xl border border-white/5 w-fit">
                                    <button 
                                        onClick={() => setActiveStage('stage1')}
                                        className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeStage === 'stage1' ? 'bg-brand-red text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                                    >
                                        Stage 1
                                    </button>
                                    {hasStage2 && (
                                        <button 
                                            onClick={() => setActiveStage('stage2')}
                                            className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeStage === 'stage2' ? 'bg-brand-red text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                                        >
                                            Stage 2
                                        </button>
                                    )}
                                </div>
                            </div>

                        {/* Comparison Table */}
                        <div className="bg-[#111111] border border-white/5 rounded-3xl md:rounded-[2rem] shadow-2xl">
                            <div className="overflow-x-auto scrollbar-hide rounded-tl-[inherit] rounded-tr-[inherit]">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/5">
                                            <th className="py-3 md:py-4 px-2 md:px-8 text-[8px] md:text-[9px] uppercase tracking-wider md:tracking-[0.2em] font-bold text-slate-500">Spec</th>
                                            <th className="py-3 md:py-4 px-1 md:px-8 text-[8px] md:text-[9px] uppercase tracking-wider md:tracking-[0.2em] font-bold text-slate-500 text-center">Stock</th>
                                            <th className="py-3 md:py-4 px-1 md:px-8 text-[8px] md:text-[9px] uppercase tracking-wider md:tracking-[0.2em] font-bold text-brand-red text-center">Tuned*</th>
                                            <th className="py-3 md:py-4 px-1 md:px-8 text-[8px] md:text-[9px] uppercase tracking-wider md:tracking-[0.2em] font-bold text-green-500 text-center">Gain</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {/* Power (HP) */}
                                        <tr className="group hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 md:py-4 px-2 md:px-8">
                                                <div className="flex items-center gap-1.5 md:gap-3">
                                                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                                                        <Zap className="w-3 h-3 md:w-4 md:h-4" />
                                                    </div>
                                                    <span className="text-white font-bold text-[10px] md:text-sm">Power</span>
                                                </div>
                                            </td>
                                            <td className="py-3 md:py-4 px-1 md:px-8 text-center text-slate-400 font-medium font-display text-xs md:text-base">{selectedEngine.stock.hp}<span className="text-[9px] ml-1 opacity-50 hidden sm:inline">hp</span></td>
                                            <td className="py-3 md:py-4 px-1 md:px-8 text-center text-white font-black font-display text-sm md:text-xl">{selectedEngine[activeStage].hp}<span className="text-xs ml-1 opacity-50 hidden sm:inline">hp</span></td>
                                            <td className="py-3 md:py-4 px-1 md:px-8 text-center text-green-500 font-bold font-display text-xs md:text-base">
                                                +{selectedEngine[activeStage].hp - selectedEngine.stock.hp}
                                            </td>
                                        </tr>
                                        {/* Torque */}
                                        <tr className="group hover:bg-white/[0.02] transition-colors">
                                            <td className="py-3 md:py-4 px-2 md:px-8">
                                                <div className="flex items-center gap-1.5 md:gap-3">
                                                    <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                                                        <Gauge className="w-3 h-3 md:w-4 md:h-4" />
                                                    </div>
                                                    <span className="text-white font-bold text-[10px] md:text-sm">Torque</span>
                                                </div>
                                            </td>
                                            <td className="py-3 md:py-4 px-1 md:px-8 text-center text-slate-400 font-medium font-display text-xs md:text-base">{selectedEngine.stock.torque}<span className="text-[9px] ml-1 opacity-50 hidden sm:inline">nm</span></td>
                                            <td className="py-3 md:py-4 px-1 md:px-8 text-center text-white font-black font-display text-sm md:text-xl">{selectedEngine[activeStage].torque}<span className="text-xs ml-1 opacity-50 hidden sm:inline">nm</span></td>
                                            <td className="py-3 md:py-4 px-1 md:px-8 text-center text-green-500 font-bold font-display text-xs md:text-base">
                                                +{selectedEngine[activeStage].torque - selectedEngine.stock.torque}
                                            </td>
                                        </tr>
                                        {/* 0-100 km/h */}
                                        {selectedEngine.stock.zeroToHundred && (
                                            <tr className="group hover:bg-white/[0.02] transition-colors">
                                                <td className="py-3 md:py-4 px-2 md:px-8">
                                                    <div className="flex items-center gap-1.5 md:gap-3">
                                                        <div className="w-5 h-5 md:w-7 md:h-7 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red">
                                                            <Timer className="w-3 h-3 md:w-4 md:h-4" />
                                                        </div>
                                                        <span className="text-white font-bold text-[10px] md:text-sm text-nowrap">0-100</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 md:py-4 px-1 md:px-8 text-center text-slate-400 font-medium font-display text-xs md:text-base">{selectedEngine.stock.zeroToHundred}s</td>
                                                <td className="py-3 md:py-4 px-1 md:px-8 text-center text-white font-black font-display text-sm md:text-xl">{selectedEngine[activeStage].zeroToHundred}s</td>
                                                <td className="py-3 md:py-4 px-1 md:px-8 text-center text-brand-red font-bold font-display text-xs md:text-base">
                                                    -{(selectedEngine.stock.zeroToHundred - (selectedEngine[activeStage].zeroToHundred || 0)).toFixed(1)}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Price Banner */}
                            <div className="bg-brand-red p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
                                <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-4 text-center sm:text-left">
                                    <span className="text-white/80 text-xs md:text-base font-bold uppercase tracking-wider">Starting at:</span>
                                    <span className="text-white text-4xl md:text-6xl font-display font-black leading-none">${selectedEngine[activeStage].price}</span>
                                    <span className="text-white/60 text-[9px] md:text-xs font-bold uppercase">Fully Installed</span>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                                    <button 
                                        onClick={() => onOrder?.({
                                            brand: selection.brand,
                                            model: selection.model,
                                            generation: selection.generation,
                                            engine: selection.engine,
                                            stage: activeStage,
                                            price: selectedEngine[activeStage].price
                                        })}
                                        className="w-full sm:w-auto bg-white text-black hover:bg-slate-100 font-black uppercase tracking-widest px-8 md:px-10 py-3.5 md:py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-2xl group cursor-pointer text-xs md:text-sm"
                                    >
                                        Order Tuning <ShoppingCart className="w-4 h-4 transition-transform group-hover:scale-110" />
                                    </button>
                                    <div className="flex items-center gap-2 text-white/80 text-[9px] uppercase font-bold tracking-widest">
                                        <Check className="w-3.5 h-3.5 text-white" />
                                        2 Year Warranty
                                    </div>
                                </div>
                            </div>
                        </div>

                            {/* Info Box */}
                            <div className="flex items-start gap-4 p-4 bg-blue-600/10 border border-blue-600/20 rounded-2xl group hover:bg-blue-600/15 transition-colors">
                                <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div className="space-y-0.5">
                                    <p className="text-blue-200 text-[10px] font-bold uppercase tracking-wide">Professional Re-calibration</p>
                                    <p className="text-blue-100/60 text-[10px] leading-relaxed">
                                        Our tuning files are custom developed for each specific engine. We focus on linear power delivery, safety margins, and maintaining OEM reliability while unlocking the hidden potential of your vehicle.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default PerformanceSelector;
