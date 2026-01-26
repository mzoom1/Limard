import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<{ title: string; price?: string; type?: 'performance' | 'carplay' } | null>(null);

  const handleServiceSelect = (service: { title: string; price?: string }) => {
    const type = service.title.toLowerCase().includes('retrofit') ? 'carplay' : 'performance';
    setSelectedService({ ...service, type });
  };

  return (
    <div>
      <Hero />
      <TrustBar />
      <Services onServiceSelect={handleServiceSelect} />
      <Process />
      <WhyUs />
      <Testimonials />
      <Contact 
        type={selectedService?.type || 'performance'} 
        initialCar={selectedService?.title} 
        initialPrice={selectedService?.price}
      />
      <FAQ />
    </div>
  );
};

export default Home;