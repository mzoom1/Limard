import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  setActivePage?: (page: 'home' | 'carplay' | 'repairs' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {

  const handleNavigation = (e: React.MouseEvent, page: 'home' | 'carplay' | 'repairs' | 'privacy' | 'terms', sectionId?: string) => {
    e.preventDefault();
    if (setActivePage) {
        setActivePage(page);
    }
    
    // If we have a section ID, try to scroll to it
    if (sectionId) {
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const socialLinkClass = "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-all duration-300";

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-6">
                    <img 
                    src="/images/logo.png" 
                    alt="Limard" 
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                    Limard is your destination for automotive perfection. Specializing in Stage 1-3 performance tuning, ECU remapping, and premium Apple CarPlay integration for all major car brands.
                </p>
                <div className="flex gap-4 mt-6">
                    <a href="#" className={socialLinkClass}><Facebook className="h-5 w-5" /></a>
                    <a href="https://www.instagram.com/limard_usa" target="_blank" rel="noopener noreferrer" className={socialLinkClass}><Instagram className="h-5 w-5" /></a>
                    <a href="#" className={socialLinkClass}><Twitter className="h-5 w-5" /></a>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 col-span-1 md:col-span-2 gap-8 md:gap-12">
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wide mb-6 text-sm">Services</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li>
                            <button onClick={(e) => handleNavigation(e, 'home', 'services')} className="hover:text-brand-red transition-colors text-left">
                                Stage 1 Tuning
                            </button>
                        </li>
                        <li>
                            <button onClick={(e) => handleNavigation(e, 'home', 'services')} className="hover:text-brand-red transition-colors text-left">
                                Stage 2 Performance
                            </button>
                        </li>
                        <li>
                            <button onClick={(e) => handleNavigation(e, 'carplay')} className="hover:text-brand-red transition-colors text-left">
                                CarPlay Retrofit
                            </button>
                        </li>
                        <li>
                            <button onClick={(e) => handleNavigation(e, 'home', 'services')} className="hover:text-brand-red transition-colors text-left">
                                TCU / Gearbox Tune
                            </button>
                        </li>
                        <li>
                            <button onClick={(e) => handleNavigation(e, 'home', 'services')} className="hover:text-brand-red transition-colors text-left">
                                Exhaust Systems
                            </button>
                        </li>
                        <li>
                            <button onClick={(e) => handleNavigation(e, 'repairs')} className="hover:text-brand-red transition-colors text-left">
                                ECU Repair & Diagnostics
                            </button>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-wide mb-6 text-sm">Company</h4>
                    <ul className="space-y-3 text-sm text-slate-400">
                        <li>
                            <button onClick={(e) => handleNavigation(e, 'home', 'why-us')} className="hover:text-brand-red transition-colors text-left">
                                About Us
                            </button>
                        </li>
                        <li>
                            <a href="https://files.limard.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors text-left">
                                Files Portal
                            </a>
                        </li>
                        <li>
                            <button onClick={(e) => handleNavigation(e, 'home', 'contact')} className="hover:text-brand-red transition-colors text-left">
                                Contact
                            </button>
                        </li>
                        <li>
                            <button onClick={(e) => handleNavigation(e, 'privacy')} className="hover:text-brand-red transition-colors text-left">
                                Privacy Policy
                            </button>
                        </li>
                        <li>
                            <button onClick={(e) => handleNavigation(e, 'terms')} className="hover:text-brand-red transition-colors text-left">
                                Terms of Service
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-600 text-xs">
                © {new Date().getFullYear()} Limard. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs">
                Performance Lab | Licensed & Insured
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;