import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Zap, FolderOpen, Instagram, Star, Info, MessageSquare, Calendar, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activePage?: 'home' | 'carplay' | 'repairs';
  setActivePage?: (page: 'home' | 'carplay' | 'repairs') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage = 'home', setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Reset isScrolled when page changes to ensure navbar starts transparent on new page
  useEffect(() => {
    setIsScrolled(false);
    setIsMobileMenuOpen(false);
  }, [activePage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'carplay' | 'repairs', e: React.MouseEvent) => {
    e.preventDefault();
    if (setActivePage) {
        setActivePage(page);
    }
    setIsMobileMenuOpen(false);
  };

  // Determine text color based on scroll state
  // On Hero (unscrolled), we want white text to match the dark aesthetic
  const textColorClass = isScrolled ? 'text-slate-900' : 'text-white';
  const navBgClass = isScrolled 
    ? 'bg-white/95 border-b border-slate-200 py-3 shadow-sm' 
    : 'bg-[#050505]/20 backdrop-blur-md py-6 border-b border-white/5';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer relative z-20"
            onClick={(e) => handleNavClick('home', e)}
          >
            <img 
              src="/images/logo.png" 
              alt="Limard" 
              className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105"
            />
          </div>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-8">
            <button 
                onClick={(e) => handleNavClick('home', e)}
                className={`transition-colors font-medium text-sm uppercase tracking-wider hover:text-brand-red ${activePage === 'home' ? 'text-brand-red' : textColorClass}`}
            >
                Tuning
            </button>
            
            <button 
                onClick={(e) => handleNavClick('carplay', e)}
                className={`flex items-center gap-2 transition-colors font-medium text-sm uppercase tracking-wider hover:text-brand-red ${activePage === 'carplay' ? 'text-brand-red' : textColorClass}`}
            >
                <Zap className="w-4 h-4" />
                CarPlay
            </button>

            <button 
                onClick={(e) => handleNavClick('repairs', e)}
                className={`flex items-center gap-2 transition-colors font-medium text-sm uppercase tracking-wider hover:text-brand-red ${activePage === 'repairs' ? 'text-brand-red' : textColorClass}`}
            >
                <Wrench className="w-4 h-4" />
                Repairs
            </button>

            <a 
                href="https://files.limard.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 transition-colors font-medium text-sm uppercase tracking-wider hover:text-brand-red ${textColorClass}`}
            >
                <FolderOpen className="w-4 h-4" />
                Files
            </a>

                      </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-6 relative z-20">
            <a href="tel:+12139320154" className={`flex items-center gap-2 font-bold transition-colors hover:text-brand-red ${textColorClass}`}>
              <Phone className="h-4 w-4 text-brand-red" />
              <span className="text-sm">+1 (213) 932-0154</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wide transition-all duration-200 shadow-[0_0_15px_rgba(230,0,0,0.3)] hover:shadow-[0_0_25px_rgba(230,0,0,0.5)] transform hover:-translate-y-0.5 text-sm"
            >
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${textColorClass}`}
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/5 absolute w-full shadow-2xl z-40 overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-6 py-8 space-y-6">
              {/* Primary Actions (Mobile Grid) */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <a href="https://www.instagram.com/limard_usa" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <Instagram className="h-6 w-6 text-pink-500 mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Instagram</span>
                </a>
                <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <Star className="h-6 w-6 text-yellow-500 mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Reviews</span>
                </a>
              </div>

              {/* Functional Links */}
              <div className="space-y-4">
                
                <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 text-white hover:text-brand-red transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-yellow-500" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider">Common Questions</span>
                </a>
                
                <a href="https://files.limard.com/" target="_blank" className="flex items-center gap-4 text-white hover:text-brand-red transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                    <FolderOpen className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider">File Service</span>
                </a>

                <a href="tel:+12139320154" className="flex items-center gap-4 text-white hover:text-brand-red transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider">Direct Call</span>
                </a>

                <button onClick={(e) => { handleNavClick('repairs', e); }} className="flex items-center gap-4 text-white hover:text-brand-red transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                    <Wrench className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider">Repairs Lab</span>
                </button>
              </div>

              {/* Bottom CTAs */}
              <div className="pt-8 border-t border-white/5 space-y-4">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-4 bg-brand-red text-white font-bold uppercase tracking-widest rounded-2xl shadow-xl shadow-brand-red/20 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" /> Book Appointment
                </a>
                <p className="text-[10px] text-white/20 text-center uppercase tracking-[0.3em] font-medium">Los Angeles, CA</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;