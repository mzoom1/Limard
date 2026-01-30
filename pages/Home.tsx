import React from 'react';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO } from '../utils/seo';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import PerformanceSelector from '../components/PerformanceSelector';
import ServiceHighlights from '../components/ServiceHighlights';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<{ title: string; price?: string; type?: 'performance' | 'carplay'; car?: string } | null>(null);

  const handleServiceSelect = (service: { title: string; price?: string; car?: string }) => {
    const type = service.title.toLowerCase().includes('retrofit') ? 'carplay' : 'performance';
    setSelectedService({ ...service, type });
    
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <SEOHead 
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
      />
      <Hero />
      <TrustBar />
      <PerformanceSelector onOrder={(data) => handleServiceSelect({ 
        title: data.stage === 'stage1' ? 'Stage 1 Tuning' : 'Stage 2 Tuning', 
        price: `$${data.price}`,
        car: `${data.brand} ${data.model} ${data.generation} (${data.engine})`
      })} />
      <ServiceHighlights type="performance" />
      <Services onServiceSelect={handleServiceSelect} />
      <Process />
      <WhyUs />
      <Testimonials />
      <InstagramFeed />
      <Contact 
        type={selectedService?.type || 'performance'} 
        initialService={selectedService?.title} 
        initialPrice={selectedService?.price}
        initialCar={selectedService?.car}
      />
      <FAQ />
    </div>
  );
};

export default Home;