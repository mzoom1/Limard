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
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-brand-red/10 rounded-xl text-brand-red mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-display font-bold text-slate-900 uppercase tracking-tight">Questions & Answers</h2>
          <p className="mt-4 text-slate-500">Everything you need to know about our upgrades and installation process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-red flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-[#111111] rounded-[2rem] text-white">
            <p className="text-slate-400 mb-4 text-sm">Still have questions? Chat with our experts in LA.</p>
            <a href="tel:+12139320154" className="text-2xl font-display font-bold hover:text-brand-red transition-colors">+1 (213) 932-0154</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
