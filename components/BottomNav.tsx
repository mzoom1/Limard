import React from 'react';
import { Zap, Gauge, Calendar, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface BottomNavProps {
  activePage: 'home' | 'carplay';
  setActivePage: (page: 'home' | 'carplay') => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] px-4 pb-6 pt-2 pointer-events-none">
      <div className="bg-white/90 backdrop-blur-lg border border-slate-200 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex items-center justify-around p-1.5 pointer-events-auto">
        <button 
          onClick={() => setActivePage('home')}
          className={`flex flex-col items-center justify-center gap-1 flex-1 py-2.5 rounded-full transition-all duration-300 ${activePage === 'home' ? 'bg-slate-900 text-white scale-105' : 'text-slate-400'}`}
        >
          <Gauge className="w-5 h-5" />
          <span className="text-[9px] font-bold uppercase tracking-tight">Tuning</span>
        </button>

        <button 
          onClick={() => setActivePage('carplay')}
          className={`flex flex-col items-center justify-center gap-1 flex-1 py-2.5 rounded-full transition-all duration-300 ${activePage === 'carplay' ? 'bg-slate-900 text-white scale-105' : 'text-slate-400'}`}
        >
          <Zap className="w-5 h-5" />
          <span className="text-[9px] font-bold uppercase tracking-tight">CarPlay</span>
        </button>

        <a 
          href="tel:+12139320154"
          className="flex flex-col items-center justify-center gap-1 flex-1 py-2.5 text-green-600 transition-all active:scale-90"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[9px] font-bold uppercase tracking-tight">Call</span>
        </a>

        <a 
          href="#contact"
          className="flex flex-col items-center justify-center gap-1 flex-1 py-2.5 bg-brand-red text-white rounded-full shadow-[0_5px_15px_rgba(230,0,0,0.4)] transition-all active:scale-95"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[9px] font-bold uppercase tracking-tight">Book</span>
        </a>
      </div>
    </div>
  );
};

export default BottomNav;
