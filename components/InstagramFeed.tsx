import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DMy7lo7x9Gb/media/?size=l',
    url: 'https://www.instagram.com/p/DMy7lo7x9Gb/',
    caption: 'McLaren 570S EVAP System Repair',
  },
  {
    id: 2,
    image: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DNVzpbiRRcw/media/?size=l',
    url: 'https://www.instagram.com/p/DNVzpbiRRcw/',
    caption: 'Lamborghini Urus Electronics & Diagnostics',
  },
  {
    id: 3,
    image: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DQpc_ZEkh4h/media/?size=l',
    url: 'https://www.instagram.com/p/DQpc_ZEkh4h/',
    caption: 'McLaren GT ECU Restoration',
  },
  {
    id: 4,
    image: 'https://images.weserv.nl/?url=https://www.instagram.com/p/DPo3GnGkoIz/media/?size=l',
    url: 'https://www.instagram.com/p/DPo3GnGkoIz/',
    caption: 'Porsche Cayman GTS CarPlay Upgrade',
  },
];

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-brand-red font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-2">
              <Instagram size={16} /> Live from Instagram
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 uppercase leading-[0.9]">
                Real Cars. <br/>
                <span className="text-slate-400">Real Performance.</span>
            </h2>
          </div>
          <a 
            href="https://instagram.com/limard_usa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-brand-red transition-colors group"
          >
            Follow @limard_usa
            <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden bg-slate-100 rounded-lg md:rounded-xl cursor-pointer block"
            >
              <img 
                src={post.image} 
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                <Instagram size={32} className="opacity-80" />
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Mobile View Bottom Link */}
        <div className="mt-8 flex justify-center md:hidden">
            <a 
              href="https://instagram.com/limard_usa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 border-2 border-slate-100 rounded-2xl text-slate-900 font-bold uppercase tracking-wider text-sm text-center"
            >
                View More on Instagram
            </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
