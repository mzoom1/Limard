import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Van, Zap, FolderOpen } from 'lucide-react';

interface NavbarProps {
  activePage?: 'home' | 'carplay';
  setActivePage?: (page: 'home' | 'carplay') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage = 'home', setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'carplay', e: React.MouseEvent) => {
    e.preventDefault();
    if (setActivePage) {
        setActivePage(page);
        window.scrollTo(0, 0);
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
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer relative z-20"
            onClick={(e) => handleNavClick('home', e)}
          >
            <div className="bg-brand-red p-1.5 rounded-sm skew-x-[-12deg]">
              <Van className="h-6 w-6 text-white skew-x-[12deg]" />
            </div>
            <span className={`font-display font-bold text-3xl tracking-wide transition-colors uppercase ${textColorClass}`}>
              Limard
            </span>
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

            <a 
                href="https://files.limard.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 transition-colors font-medium text-sm uppercase tracking-wider hover:text-brand-red ${textColorClass}`}
            >
                <FolderOpen className="w-4 h-4" />
                Files
            </a>

            {activePage === 'home' && (
                <>
                    <a href="#process" className={`transition-colors font-medium text-sm uppercase tracking-wider hover:text-brand-red ${textColorClass}`}>Process</a>
                </>
            )}
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
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111111]/95 border-t border-white/10 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={(e) => handleNavClick('home', e)} className={`block w-full text-left px-3 py-4 text-base font-medium border-l-4 transition-all ${activePage === 'home' ? 'border-brand-red text-brand-red bg-white/5' : 'border-transparent text-white hover:text-brand-red'}`}>
                Tuning & Performance
            </button>
            <button onClick={(e) => handleNavClick('carplay', e)} className={`block w-full text-left px-3 py-4 text-base font-medium border-l-4 transition-all ${activePage === 'carplay' ? 'border-brand-red text-brand-red bg-white/5' : 'border-transparent text-white hover:text-brand-red'}`}>
                CarPlay Store
            </button>
            <a 
                href="https://files.limard.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left px-3 py-4 text-base font-medium border-l-4 border-transparent text-white hover:text-brand-red flex items-center gap-2"
            >
                <FolderOpen className="w-5 h-5" />
                Files Limard
            </a>
            <div className="pt-4 pb-2 border-t border-white/10 mt-2">
                <a href="tel:+12139320154" className="block px-3 py-3 text-lg font-bold text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-red">
                        <Phone className="w-5 h-5" />
                    </div>
                    +1 (213) 932-0154
                </a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block mx-3 mt-4 text-center px-4 py-4 bg-brand-red text-white font-bold uppercase tracking-wider rounded-lg shadow-lg">
                    Book Appointment
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;