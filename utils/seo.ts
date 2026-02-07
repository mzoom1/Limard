// SEO Configuration for Limard Performance Tuning
export const SEO_CONFIG = {
  siteName: 'Limard Performance',
  siteUrl: 'https://limard.vercel.app',
  description: 'Professional Stage 1-3 ECU tuning, wireless CarPlay installations, and automotive tech upgrades in Los Angeles. 2,000+ vehicles tuned since 2007. Expert BMW, Audi, Mercedes tuning.',
  ogImage: '/images/hero-tuning.png',
  twitterHandle: '@limard_usa',
  location: {
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
    coordinates: { lat: 34.0522, lng: -118.2437 }
  }
};

export const PAGE_SEO = {
  home: {
    title: 'Limard Performance | ECU Tuning & CarPlay Retrofit Los Angeles',
    description: 'Professional Stage 1-3 ECU tuning, wireless CarPlay installations in LA. 2,000+ vehicles tuned. Expert BMW, Audi, Mercedes tuning since 2007.',
    keywords: 'ECU Tuning Los Angeles, Stage 1 Tuning, Stage 2 Tuning, BMW Tuning LA, Audi Tuning, Mercedes Tuning, CarPlay Retrofit, Performance Upgrades, Downpipe Installation'
  },
  carplay: {
    title: 'Wireless CarPlay Retrofit Los Angeles | Limard Performance',
    description: 'Professional wireless CarPlay & Android Auto installation for BMW, Audi, Mercedes, Porsche. OEM-quality retrofit by LA experts since 2007.',
    keywords: 'CarPlay Retrofit Los Angeles, Wireless CarPlay, Android Auto Installation, BMW CarPlay, Audi CarPlay, Mercedes CarPlay, Porsche CarPlay'
  },
  repairs: {
    title: 'ECU Repair & Diagnostics Los Angeles | Limard Performance',
    description: 'Expert ECU repair, cloning, key programming, TCU mechatronic repair, and automatic transmission rebuild in Los Angeles. Dealer-level diagnostics.',
    keywords: 'ECU Repair Los Angeles, ECU Cloning, Key Programming, TCU Repair, Transmission Rebuild, Mechatronic Repair, BMW ECU Repair, Mercedes ECU Repair'
  }
};

// JSON-LD Structured Data for Local Business
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Limard Performance",
  "image": "https://limard.vercel.app/images/logo.png",
  "url": "https://limard.vercel.app",
  "telephone": "+12139320154",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.0522,
    "longitude": -118.2437
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "description": "Professional Stage 1-3 ECU tuning, wireless CarPlay installations, ECU repair, and automotive tech upgrades in Los Angeles. 2,000+ vehicles tuned since 2007.",
  "foundingDate": "2007",
  "areaServed": {
    "@type": "City",
    "name": "Los Angeles"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Automotive Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stage 1 ECU Tuning", "description": "Software-only ECU remap for 20-30% power increase" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stage 2 Performance Tuning", "description": "Hardware upgrades with ECU remap for maximum performance" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wireless CarPlay Retrofit", "description": "OEM-quality wireless Apple CarPlay and Android Auto installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ECU Repair & Diagnostics", "description": "Dealer-level ECU repair, cloning, and diagnostics" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200"
  }
};
