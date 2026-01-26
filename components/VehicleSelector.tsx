import React, { useState, useMemo } from 'react';
import { ArrowRight, ChevronDown, Check, ShoppingCart, CarFront, Calendar, Tag, Search } from 'lucide-react';
import { Product } from '../types';

interface VehicleSelectorProps {
    onSelect: (selection: { brand: string; model: string; year: string; price: string }) => void;
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

const VehicleSelector: React.FC<VehicleSelectorProps> = ({ onSelect }) => {
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selection, setSelection] = useState({
    brand: '',
    model: '',
    year: ''
  });

  const filteredBrands = useMemo(() => {
    return BRANDS.filter(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const isComplete = selection.brand && selection.model && selection.year;

  const handleReset = () => {
    setSelection({ brand: '', model: '', year: '' });
    setSearchQuery('');
    setStep(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#111111] rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/5">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 blur-[120px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[100px] -ml-32 -mb-32"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Side: Selection GUI */}
                <div className="lg:col-span-8">
                    <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center gap-2 flex-shrink-0">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step >= s ? 'bg-brand-red text-white' : 'bg-white/10 text-white/40'}`}>
                                    {step > s ? <Check className="w-4 h-4" /> : s}
                                </div>
                                <span className={`text-[10px] uppercase tracking-widest font-bold ${step >= s ? 'text-white' : 'text-white/20'}`}>
                                    {s === 1 ? 'Brand' : s === 2 ? 'Model' : 'Year'}
                                </span>
                                {s < 3 && <div className="w-8 h-[1px] bg-white/10 mx-2"></div>}
                            </div>
                        ))}
                    </div>

                    <div className="min-h-[400px]">
                        {step === 1 && (
                            <div className="space-y-6 animate-fade-in">
                                {/* Search Bar */}
                                <div className="relative mb-6">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                                    <input 
                                        type="text"
                                        placeholder="Search brand (e.g. BMW, Mercedes, Porsche...)"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 transition-colors"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
                                    {filteredBrands.length > 0 ? (
                                        filteredBrands.map((brandName) => (
                                            <button 
                                                key={brandName}
                                                onClick={() => { setSelection(prev => ({ ...prev, brand: brandName })); setStep(2); }}
                                                className={`py-4 px-3 rounded-xl border transition-all duration-300 flex items-center justify-center text-center group ${selection.brand === brandName ? 'bg-brand-red border-brand-red shadow-[0_0_20px_rgba(230,0,0,0.3)]' : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'}`}
                                            >
                                                <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-colors ${selection.brand === brandName ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>{brandName}</span>
                                            </button>
                                        ))
                                    ) : (
                                        <div className="col-span-full py-12 text-center">
                                            <p className="text-white/40 text-sm">No brands found matching "{searchQuery}"</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Select Model</h4>
                                    <button onClick={() => setStep(1)} className="text-brand-red text-[10px] font-bold uppercase hover:underline">Back</button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {selection.brand && MODELS[selection.brand]?.map((m) => (
                                        <button 
                                            key={m}
                                            onClick={() => { setSelection(prev => ({ ...prev, model: m })); setStep(3); }}
                                            className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between group ${selection.model === m ? 'bg-brand-red border-brand-red text-white' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30 hover:text-white'}`}
                                        >
                                            <span className="text-sm font-bold tracking-wide">{m}</span>
                                            <ArrowRight className={`w-4 h-4 transition-transform ${selection.model === m ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6 animate-fade-in">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">Selection Year</h4>
                                    <button onClick={() => setStep(2)} className="text-brand-red text-[10px] font-bold uppercase hover:underline">Back</button>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {YEARS.map((y) => (
                                        <button 
                                            key={y}
                                            onClick={() => setSelection(prev => ({ ...prev, year: y }))}
                                            className={`p-5 rounded-xl border transition-all flex flex-col items-center gap-2 group ${selection.year === y ? 'bg-brand-red border-brand-red' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
                                        >
                                            <Calendar className={`w-5 h-5 ${selection.year === y ? 'text-white' : 'text-white/40 group-hover:text-brand-red'}`} />
                                            <span className={`text-sm font-bold tracking-widest ${selection.year === y ? 'text-white' : 'text-white/60'}`}>{y}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side: Price Card */}
                <div className="lg:col-span-4 h-full">
                    <div className={`h-full rounded-3xl p-8 border border-white/10 transition-all duration-500 overflow-hidden relative ${isComplete ? 'bg-white shadow-[0_20px_60px_-15px_rgba(230,0,0,0.3)] scale-105' : 'bg-white/5 opacity-50'}`}>
                        {isComplete ? (
                            <div className="flex flex-col h-full animate-fade-in text-slate-900">
                                <div className="mb-8">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red py-1 px-3 bg-brand-red/10 rounded-full mb-4 inline-block">Estimated Price</span>
                                    <div className="text-5xl font-display font-bold text-slate-900 mb-2">$649.00</div>
                                    <p className="text-slate-500 text-sm">Full Installation Kit included</p>
                                </div>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <CarFront className="w-5 h-5 text-brand-red" />
                                        <span>{selection.brand} {selection.model}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span>Wireless Carplay / Android Auto</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <Check className="w-5 h-5 text-green-500" />
                                        <span>2 Year Full Warranty</span>
                                    </div>
                                </div>

                                <div className="mt-auto space-y-3">
                                    <button 
                                        className="w-full bg-slate-900 hover:bg-black text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl group"
                                        onClick={() => {
                                            if (isComplete) {
                                                onSelect({ ...selection, price: '$649.00' });
                                            }
                                        }}
                                    >
                                        Order Now <ShoppingCart className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button 
                                        onClick={handleReset}
                                        className="w-full py-4 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-slate-900 transition-colors"
                                    >
                                        Change Vehicle
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center p-6 grayscale">
                                <Tag className="w-12 h-12 text-white/20 mb-4" />
                                <h4 className="text-white text-lg font-bold mb-2">Configure Selection</h4>
                                <p className="text-white/40 text-sm">Select your car brand, model and year to see the price.</p>
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