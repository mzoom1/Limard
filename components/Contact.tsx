import React, { useState, useEffect, useRef } from 'react';
import { Check, ShieldCheck, Zap, Smartphone, Wifi, Bluetooth, ChevronDown, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import VehicleSelector from './VehicleSelector';

const SERVICES = [
    { label: "Stage 1 Tuning (+20-30%)", value: "Stage 1 Tuning", category: "Performance" },
    { label: "Stage 2 Tuning (Full HW)", value: "Stage 2 Tuning", category: "Performance" },
    { label: "Stage 3 & Custom Project", value: "Stage 3 & Custom", category: "Performance" },
    { label: "TCU Transmission Tune", value: "TCU Transmission Tune", category: "Performance" },
    { label: "CarPlay / Android Auto", value: "CarPlay Retrofit", category: "Tech" },
    { label: "Exhaust & Intake Install", value: "Exhaust & Intake", category: "Hardware" },
    { label: "General Diagnostics", value: "Diagnostics / Other", category: "Other" }
];

interface ContactProps {
  initialCar?: string;
  initialPrice?: string;
  initialService?: string;
  type?: 'performance' | 'carplay';
}

const Contact: React.FC<ContactProps> = ({ initialCar = '', initialPrice, initialService = '', type = 'performance' }) => {
  const [carDetails, setCarDetails] = React.useState(initialCar);
  const [serviceType, setServiceType] = React.useState(initialService || (type === 'performance' ? 'Stage 1 Tuning' : 'CarPlay Retrofit'));
  const [submitted, setSubmitted] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showVehicleSelector, setShowVehicleSelector] = useState(false);
  const [quickBrand, setQuickBrand] = useState<string | undefined>(undefined);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const STAGES = [
    { id: 'Stage 1 Tuning', label: 'Stage 1', icon: <Zap className="w-4 h-4" /> },
    { id: 'Stage 2 Tuning', label: 'Stage 2', icon: <Zap className="w-4 h-4" /> },
    { id: 'Stage 3 & Custom', label: 'Stage 3', icon: <Zap className="w-4 h-4" /> },
    { id: 'TCU Transmission Tune', label: 'TCU', icon: <Zap className="w-4 h-4" /> }
  ];

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  React.useEffect(() => {
    if (initialCar) setCarDetails(initialCar);
    if (initialService) setServiceType(initialService);
  }, [initialCar, initialService]);

  // Detect brand for personality
  const detectedBrand = React.useMemo(() => {
    if (!carDetails) return null;
    const commonBrands = [
        'BMW', 'Mercedes', 'Audi', 'Porsche', 'Tesla', 'Volkswagen', 'Toyota', 'Honda', 
        'Lexus', 'Hyundai', 'Kia', 'Ford', 'Chevrolet', 'Dodge', 'Jeep', 'Land Rover', 
        'Range Rover', 'Maserati', 'Ferrari', 'Lamborghini', 'McLaren'
    ];
    return commonBrands.find(b => carDetails.toLowerCase().includes(b.toLowerCase()));
  }, [carDetails]);

  // Detect Stage/Service for content
  const selectedStage = React.useMemo(() => {
    if (serviceType.includes('Stage 1')) return 'Stage 1';
    if (serviceType.includes('Stage 2')) return 'Stage 2';
    if (serviceType.includes('Stage 3')) return 'Stage 3';
    if (serviceType.includes('TCU')) return 'TCU Tune';
    return null;
  }, [serviceType]);

  const content = {
    performance: {
      tagline: selectedStage ? `Professional ${selectedStage}` : detectedBrand ? `${detectedBrand} Tuning Specialist` : 'Limard Performance Lab',
      title: selectedStage 
        ? `${selectedStage} Software` 
        : detectedBrand 
        ? `${detectedBrand} Optimization` 
        : 'Performance Consultation',
      price: selectedStage === 'Stage 1' ? '$599' : selectedStage === 'Stage 2' ? '$899' : selectedStage === 'Stage 3' ? '$1,499' : selectedStage === 'TCU Tune' ? '$450' : initialPrice || '$599',
      priceLabel: (selectedStage || initialPrice) ? ' / Estimated Rate' : ' / Stage 1 start',
      benefits: selectedStage === 'Stage 2' 
        ? ['Downpipe & Intake Required', 'Optimized for 91/93 Octane', 'Pops & Bangs (Optional)']
        : selectedStage === 'Stage 3'
        ? ['Custom Fueling Setup', 'Big Turbo Hardware Required', 'Extreme Power Gains']
        : selectedStage === 'TCU Tune'
        ? ['Faster Shift Speeds', 'Increased Torque Limits', 'Optimized Launch Control']
        : [
            'Custom ECU & TCU Mapping',
            detectedBrand ? `Specific ${detectedBrand} Diagnostics` : 'Before & After Diagnostics',
            'Satisfaction Guarantee'
          ],
      formTitle: selectedStage ? `Configure your ${selectedStage}` : 'Request Quote & HP Gains',
      buttonText: 'Get Performance Stats',
      image: selectedStage === 'Stage 2' || selectedStage === 'Stage 3'
        ? 'https://images.unsplash.com/photo-1600706432502-78b9b4661b01?q=80&w=2000&auto=format&fit=crop' // Deep Engine
        : selectedStage === 'Stage 1'
        ? 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop' // Pulley/Engine
        : (detectedBrand === 'BMW' || detectedBrand === 'Audi' || detectedBrand === 'Mercedes') 
        ? 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2000&auto=format&fit=crop'
        : 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop',
      thumb1: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600&auto=format&fit=crop',
      thumb2: 'https://images.unsplash.com/photo-1600706432502-78b9b4661b01?q=80&w=600&auto=format&fit=crop',
      icon: <Zap className="w-4 h-4 text-brand-red group-hover:scale-125 transition-transform" />
    },
    carplay: {
      tagline: detectedBrand ? `${detectedBrand} Interior Tech` : 'Limard Automotive Tech',
      title: detectedBrand ? `${detectedBrand} Retrofit` : 'CarPlay Installation',
      price: initialPrice || '$499',
      priceLabel: initialPrice ? ' / Total estimate' : ' / Retrofit start',
      benefits: [
        'Wireless Apple CarPlay & Android Auto',
        'Full OEM Display Integration',
        detectedBrand ? `Perfect ${detectedBrand} Fitment` : 'Native Steering Wheel Controls'
      ],
      formTitle: 'Check Compatibility & Pricing',
      buttonText: 'Request Installation Info',
      image: detectedBrand === 'BMW' 
          ? 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2000&auto=format&fit=crop'
          : detectedBrand === 'Mercedes'
          ? 'https://images.unsplash.com/photo-1506469717960-433ce8b6699e?q=80&w=2000&auto=format&fit=crop'
          : detectedBrand === 'Audi'
          ? 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?q=80&w=2000&auto=format&fit=crop'
          : detectedBrand === 'Hyundai' || detectedBrand === 'Kia'
          ? 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2000&auto=format&fit=crop'
          : '/images/hero-carplay.avif',
      thumb1: '/images/hero-carplay.avif',
      thumb2: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=600&auto=format&fit=crop',
      icon: <Smartphone className="w-4 h-4 text-brand-red group-hover:scale-125 transition-transform" />
    }
  };

  const activeContent = content[type];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceType) {
        setIsDropdownOpen(true);
        return;
    }
    setSubmitted(true);
    // In a real app, this is where you'd send to SendGrid/Hubspot/CRM
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-16 md:py-24 bg-white border-t border-slate-100 relative overflow-hidden"
    >
      {/* Decorative Background Text */}
      <div className="absolute lg:right-0 right-4 bottom-20 select-none pointer-events-none opacity-[0.05] z-0">
          <span className="text-[120px] md:text-[180px] font-black uppercase text-slate-100 transform -rotate-12 block">CONTACT</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          
          {/* Image Side (Product Page Style) */}
          <div className="relative w-full lg:flex-1">
             <div className="-mx-4 sm:mx-0 rounded-none sm:rounded-[2rem] overflow-hidden shadow-xl h-[250px] sm:h-[350px] lg:h-[450px] relative z-10 transition-all duration-300 border border-slate-200">
                <img 
                    src={activeContent.image} 
                    alt="Professional Installation" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-8 text-white z-20">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-1">Our HQ</div>
                    <div className="text-xl font-display font-black uppercase tracking-tight">Los Angeles, CA</div>
                </div>
             </div>

             {/* Thumbnail Overlays - Floating Left */}
             <div className="absolute -left-4 top-10 w-28 h-28 rounded-2xl shadow-2xl border-4 border-white overflow-hidden hidden xl:block z-20 transform hover:scale-110 transition-transform duration-300">
                 <img src={activeContent.thumb1} alt="Detail" className="w-full h-full object-cover" />
             </div>
             
             <div className="absolute -left-4 top-44 w-28 h-28 rounded-2xl shadow-2xl border-4 border-white overflow-hidden hidden xl:block z-20 transform hover:scale-110 transition-transform duration-300 delay-100">
                 <img src={activeContent.thumb2} alt="Detail" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Form Side (Product Info Style) */}
          <div className="w-full lg:w-[440px] bg-slate-50 border border-slate-200/60 p-6 md:p-8 rounded-[2rem] shadow-xl">
            <div className="flex flex-col gap-4">
                {type === 'performance' && (
                    <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-1 p-1 bg-slate-200/50 rounded-xl w-full sm:w-fit mb-2">
                        {STAGES.map((stage) => (
                            <button
                                key={stage.id}
                                onClick={() => setServiceType(stage.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap ${serviceType === stage.id ? 'bg-brand-red text-white shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                {stage.icon}
                                {stage.label}
                            </button>
                        ))}
                    </div>
                )}
                
                <div>
                    <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest">{activeContent.tagline}</span>
                    <h2 
                        className="mt-1 text-2xl md:text-3xl font-display font-black text-slate-900 mb-2 tracking-tight uppercase leading-[0.9]"
                        dangerouslySetInnerHTML={{ __html: activeContent.title }}
                    />
                </div>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-display font-black text-slate-900">{activeContent.price}<span className="text-sm font-bold text-slate-400 ml-2 uppercase tracking-wide">{activeContent.priceLabel}</span></span>
                <div className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-green-500/20 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Ready To Install
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-6">
                {activeContent.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-600 text-[11px] font-bold uppercase tracking-wide">
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-red flex-shrink-0" />
                        <span className="truncate">{benefit}</span>
                    </div>
                ))}
            </div>

            <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-2xl mb-4 shadow-sm">
                {submitted ? (
                    <div className="text-center animate-fade-in py-5">
                        <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-3 border border-green-500/20">
                            <Check className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">Request Sent!</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">Our crew will reach out within 2 hours with availability.</p>
                        <button 
                            onClick={() => setSubmitted(false)}
                            className="mt-4 text-brand-red font-bold uppercase text-[10px] hover:tracking-widest transition-all"
                        >
                            Send Another Request
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 className="font-bold text-slate-400 mb-5 text-[10px] uppercase tracking-[0.2em]">{activeContent.formTitle}</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 outline-none focus:border-brand-red transition-all font-medium text-xs placeholder:text-slate-400" placeholder="Full Name" />
                            
                            <div className="space-y-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div className="relative">
                                            <input 
                                                required
                                                type="text" 
                                                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-slate-900 focus:ring-0 transition-all font-medium text-xs" 
                                                placeholder="Car Model & Year"
                                                value={carDetails}
                                                onChange={(e) => setCarDetails(e.target.value)}
                                            />
                                        </div>
                                        
                                        {/* Quick Brands */}
                                        <div className="flex flex-wrap gap-1.5 overflow-x-auto no-scrollbar pb-1">
                                            {['BMW', 'Mercedes', 'Audi', 'Porsche', 'VW'].map(brand => {
                                                const brandName = brand === 'VW' ? 'Volkswagen' : brand;
                                                return (
                                                    <button 
                                                        key={brand}
                                                        type="button"
                                                        onClick={() => {
                                                            setQuickBrand(brandName);
                                                            setShowVehicleSelector(true);
                                                        }}
                                                        className="text-[9px] font-bold px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-400 hover:border-brand-red hover:text-brand-red transition-all flex items-center gap-1.5 whitespace-nowrap"
                                                    >
                                                        {brand}
                                                    </button>
                                                );
                                            })}
                                            <button 
                                                type="button"
                                                onClick={() => {
                                                    setQuickBrand(undefined);
                                                    setShowVehicleSelector(true);
                                                }}
                                                className="text-[9px] font-bold px-3 py-1.5 rounded-lg border border-brand-red/20 text-brand-red hover:bg-brand-red/5 transition-all flex items-center gap-1.5 whitespace-nowrap"
                                            >
                                                + More
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative" ref={dropdownRef}>
                                        <button 
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-slate-900 transition-all font-medium text-xs flex items-center justify-between group"
                                        >
                                            <span className={`service-label block truncate ${serviceType ? 'text-slate-900' : 'text-slate-400'}`}>
                                                {serviceType ? SERVICES.find(s => s.id === serviceType || s.value === serviceType)?.label : 'Select Service'}
                                            </span>
                                            <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-transform duration-300 flex-shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                    className="absolute z-50 left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden py-1.5 max-h-[220px] overflow-y-auto custom-scrollbar"
                                                >
                                                    {SERVICES.map((service, idx) => (
                                                        <button
                                                            key={idx}
                                                            type="button"
                                                            onClick={() => {
                                                                setServiceType(service.value);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                            className={`w-full text-left px-4 py-2.5 text-[11px] transition-colors flex items-center justify-between group ${serviceType === service.value ? 'bg-slate-50 text-brand-red font-bold' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}`}
                                                        >
                                                            <span>{service.label}</span>
                                                            {serviceType === service.value && <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />}
                                                        </button>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                            <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 outline-none focus:border-slate-900 focus:ring-0 transition-all font-medium text-xs placeholder:text-slate-400" placeholder="Phone Number" />
                            <button type="submit" className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group tracking-tight text-xs">
                                {activeContent.buttonText} {activeContent.icon}
                            </button>
                        </form>
                    </>
                )}
            </div>

            <div className="flex gap-4 text-[8px] font-bold uppercase tracking-wider text-slate-500">
                 <span className="flex items-center gap-1"><ShieldCheck className="h-2.5 w-2.5 text-brand-red" /> Lifetime Warranty</span>
                 <span className="flex items-center gap-1"><Zap className="h-2.5 w-2.5 text-brand-red" /> 2h Response</span>
            </div>

          </div>

        </div>
      </div>

      {/* Vehicle Selection Modal */}
      <AnimatePresence>
        {showVehicleSelector && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm"
            >
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-black border border-white/10 rounded-[2.5rem] w-full max-w-5xl relative overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar shadow-[0_0_100px_rgba(230,0,0,0.2)]"
                >
                    <button 
                        onClick={() => setShowVehicleSelector(false)}
                        className="absolute right-8 top-8 z-50 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors group cursor-pointer"
                    >
                        <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                    </button>
                    
                    <div className="py-12">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Select Your Vehicle</h2>
                            <p className="text-white/40 text-sm mt-2">Pick your car to get precise performance metrics</p>
                        </div>
                        <VehicleSelector 
                            initialBrand={quickBrand}
                            onSelect={(selection) => {
                                setCarDetails(`${selection.brand} ${selection.model} (${selection.year})`);
                                setShowVehicleSelector(false);
                            }} 
                        />
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;