import React from 'react';
import { Check, ShieldCheck, Zap, Smartphone, Wifi, Bluetooth } from 'lucide-react';

interface ContactProps {
  initialCar?: string;
  initialPrice?: string;
  type?: 'performance' | 'carplay';
}

const Contact: React.FC<ContactProps> = ({ initialCar = '', initialPrice, type = 'performance' }) => {
  const [carDetails, setCarDetails] = React.useState(initialCar);
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (initialCar) setCarDetails(initialCar);
  }, [initialCar]);

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
    if (carDetails.includes('Stage 1')) return 'Stage 1';
    if (carDetails.includes('Stage 2')) return 'Stage 2';
    if (carDetails.includes('Stage 3')) return 'Stage 3';
    if (carDetails.includes('TCU')) return 'TCU Tune';
    return null;
  }, [carDetails]);

  const content = {
    performance: {
      tagline: selectedStage ? `Professional ${selectedStage}` : detectedBrand ? `${detectedBrand} Tuning Specialist` : 'Limard Performance Lab',
      title: selectedStage 
        ? `${selectedStage} <br/> Software` 
        : detectedBrand 
        ? `${detectedBrand} <br/> Optimization` 
        : 'Performance <br/> Consultation',
      price: initialPrice || '$599',
      priceLabel: initialPrice ? ' / Estimated Rate' : ' / Stage 1 start',
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
      title: detectedBrand ? `${detectedBrand} <br/> Retrofit` : 'CarPlay <br/> Installation',
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
          : 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop',
      thumb1: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=600&auto=format&fit=crop',
      thumb2: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=600&auto=format&fit=crop',
      icon: <Smartphone className="w-4 h-4 text-brand-red group-hover:scale-125 transition-transform" />
    }
  };

  const activeContent = content[type];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this is where you'd send to SendGrid/Hubspot/CRM
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side (Product Page Style) */}
          <div className="relative pl-0 md:pl-0"> {/* Adjusted padding */}
             <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[600px] relative z-10 transition-all duration-300">
                <img 
                    src={activeContent.image} 
                    alt="Professional Installation" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white z-20">
                    <div className="text-sm font-bold uppercase tracking-wider opacity-80 mb-1">Location</div>
                    <div className="text-xl font-display font-bold">Los Angeles, CA</div>
                </div>
             </div>

             {/* Thumbnail Overlays - Floating Left */}
             {/* Thumbnail 1 */}
             <div className="absolute -left-6 top-12 w-28 h-28 rounded-2xl shadow-xl border-4 border-white overflow-hidden hidden md:block z-20 transform hover:scale-110 transition-transform duration-300">
                 <img src={activeContent.thumb1} alt="Detail" className="w-full h-full object-cover" />
             </div>
             
             {/* Thumbnail 2 */}
             <div className="absolute -left-6 top-48 w-28 h-28 rounded-2xl shadow-xl border-4 border-white overflow-hidden hidden md:block z-20 transform hover:scale-110 transition-transform duration-300 delay-100">
                 <img src={activeContent.thumb2} alt="Detail" className="w-full h-full object-cover" />
             </div>
          </div>

          {/* Form Side (Product Info Style) */}
          <div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{activeContent.tagline}</span>
            <h2 
                className="mt-2 text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-none"
                dangerouslySetInnerHTML={{ __html: activeContent.title }}
            />
            
            <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-slate-900">{activeContent.price}<span className="text-lg font-normal text-slate-500">{activeContent.priceLabel}</span></span>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Available Slots
                </div>
            </div>

            <div className="space-y-4 mb-8">
                {activeContent.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600">
                        <Check className="h-5 w-5 text-slate-900" />
                        <span>{benefit}</span>
                    </div>
                ))}
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl mb-8 min-h-[300px] flex flex-col justify-center">
                {submitted ? (
                    <div className="text-center animate-fade-in">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                        <p className="text-slate-500">Our Los Angeles team will contact you within 2 business hours with {type === 'carplay' ? 'compatibility details' : 'performance stats'} for your {carDetails || 'vehicle'}.</p>
                        <button 
                            onClick={() => setSubmitted(false)}
                            className="mt-6 text-brand-red font-bold uppercase text-xs hover:underline"
                        >
                            Send another request
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 className="font-bold text-slate-900 mb-4">{activeContent.formTitle}</h3>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input required type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 outline-none focus:border-slate-900 transition-colors" placeholder="Full Name" />
                            <input 
                                required
                                type="text" 
                                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 outline-none focus:border-slate-900 transition-colors" 
                                placeholder="Car Model & Year"
                                value={carDetails}
                                onChange={(e) => setCarDetails(e.target.value)}
                            />
                            <input required type="tel" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 outline-none focus:border-slate-900 transition-colors" placeholder="Phone Number" />
                            <button type="submit" className="w-full bg-[#111111] hover:bg-black text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                                {activeContent.buttonText} {activeContent.icon}
                            </button>
                        </form>
                    </>
                )}
            </div>

            <div className="flex gap-6 text-xs font-medium text-slate-500">
                 <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> Lifetime Software Warranty</span>
                 <span className="flex items-center gap-1"><Zap className="h-4 w-4" /> 24hr Turnaround</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;