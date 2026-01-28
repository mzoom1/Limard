import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Will tuning void my vehicle warranty?",
    answer: "Stage 1 tuning is designed to work within safe factory parameters. However, most dealerships consider ECU modifications a warranty-voiding event for powertrain components. We offer a 'Revert to Stock' service if you need to visit the dealer."
  },
  {
    question: "Is this modification street legal in California?",
    answer: "Many performance tunes are for off-road or track use only and may not pass California Smog check if they modify emissions equipment. However, our CarPlay retrofits and many ECU recalibrations are designed to be invisible to emissions testing."
  },
  {
    question: "How long does the installation take?",
    answer: "Most ECU Stage 1 tunes take 2-4 hours. CarPlay retrofits typically take 3-5 hours depending on the vehicle model. We offer same-day turnaround for 90% of our services at our Los Angeles facility."
  },
  {
    question: "Do I need to run high-octane fuel?",
    answer: "Yes, our performance tunes (Stage 1+) are optimized for 91 or 93 octane fuel to prevent engine knock and ensure maximum horsepower gains as stated in our quotes."
  },
  {
    question: "Can I move my CarPlay unit to another car later?",
    answer: "Most of our retrofit kits are vehicle-specific and interface with the OEM head unit. While they can be removed, they generally only fit the same model and year range they were purchased for."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Decorative Background Text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] z-0">
          <span className="text-[200px] font-black uppercase text-stroke transform -rotate-12 block">SUPPORT</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand-red/10 rounded-2xl text-brand-red mb-5 shadow-[0_0_20px_rgba(230,0,0,0.1)]">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">Questions & Answers</h2>
          <p className="mt-3 text-sm md:text-base text-slate-400">Everything you need to know about our upgrades and installation process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-[#111111]/50 backdrop-blur-sm border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 hover:border-white/10 group"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 px-7 text-left"
              >
                <span className={`font-bold pr-8 text-sm md:text-lg transition-colors ${openIndex === index ? 'text-brand-red' : 'text-slate-200 group-hover:text-white'}`}>{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-brand-red text-white rotate-180' : 'bg-white/5 text-slate-500'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              >
                <div className="p-7 pt-0 text-slate-400 text-sm md:text-base leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-gradient-to-br from-brand-red/10 to-transparent border border-brand-red/20 rounded-[2rem] text-white">
            <p className="text-slate-400 mb-3 text-xs uppercase tracking-widest font-bold">Still have questions?</p>
            <a href="tel:+12139320154" className="text-2xl md:text-3xl font-display font-black hover:text-brand-red transition-all flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              +1 (213) 932-0154
            </a>
            <p className="mt-3 text-slate-500 text-[10px] uppercase font-bold tracking-widest">Available 9:00 AM - 6:00 PM PST</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
