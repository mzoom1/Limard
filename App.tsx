import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CarPlay from './pages/CarPlay';
import Footer from './components/Footer';

function App() {
  const [activePage, setActivePage] = useState<'home' | 'carplay'>('home');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-red selection:text-white">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
        {activePage === 'home' ? <Home /> : <CarPlay />}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;