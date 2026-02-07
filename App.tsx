import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CarPlay from './pages/CarPlay';
import Repairs from './pages/Repairs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import FloatingContact from './components/FloatingContact';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [activePage, setActivePage] = useState<'home' | 'carplay' | 'repairs' | 'privacy' | 'terms'>('home');

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
    <HelmetProvider>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-red selection:text-white pb-20 md:pb-0 overflow-x-hidden relative">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main className="relative w-full overflow-x-hidden">
          {activePage === 'home' ? <Home /> 
            : activePage === 'carplay' ? <CarPlay /> 
            : activePage === 'repairs' ? <Repairs />
            : activePage === 'privacy' ? <PrivacyPolicy />
            : activePage === 'terms' ? <TermsOfService />
            : <Home />}
        </main>
        <Footer setActivePage={setActivePage} />
        <FloatingContact />
        {activePage !== 'privacy' && activePage !== 'terms' && (
          <BottomNav activePage={activePage} setActivePage={setActivePage} />
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;