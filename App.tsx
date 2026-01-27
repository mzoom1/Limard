import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CarPlay from './pages/CarPlay';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [activePage, setActivePage] = useState<'home' | 'carplay'>('home');

  // Handle global scroll to top on page change
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Immediate scroll
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
    
    // Backup for some mobile browsers or layout shifts
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
    
    return () => clearTimeout(timeoutId);
  }, [activePage]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-red selection:text-white pb-20 md:pb-0 overflow-x-hidden relative">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="relative w-full overflow-x-hidden">
        {activePage === 'home' ? <Home /> : <CarPlay />}
      </main>
      <Footer setActivePage={setActivePage} />
      <BottomNav activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;