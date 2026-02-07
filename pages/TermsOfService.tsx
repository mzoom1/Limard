import React from 'react';
import SEOHead from '../components/SEOHead';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <SEOHead 
        title="Terms of Service | Limard Performance"
        description="Terms of Service for Limard Performance automotive services in Los Angeles."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 uppercase tracking-tight mb-8">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: February 6, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm leading-relaxed">
          
          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">1. Services</h2>
            <p>Limard Performance provides automotive performance tuning, CarPlay retrofit installations, ECU repair and diagnostics, transmission rebuilds, and related automotive services. All services are performed at our facility in Los Angeles, California.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">2. Appointments & Scheduling</h2>
            <p>All services require an appointment. Submitting a booking request through our website does not guarantee an appointment until confirmed by our team. We will contact you within 2 hours of your request to confirm availability and scheduling.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">3. Pricing</h2>
            <p>Prices displayed on our website are estimates and starting prices. Final pricing may vary based on:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Vehicle make, model, and year</li>
              <li>Current condition of the vehicle</li>
              <li>Specific modifications or parts required</li>
              <li>Complexity of the installation or repair</li>
            </ul>
            <p className="mt-2">A detailed quote will be provided before any work begins. No work will be performed without your explicit approval of the final price.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">4. Warranty</h2>
            <p>We stand behind our work with the following warranty coverage:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>ECU Tuning:</strong> Lifetime software warranty on our tunes</li>
              <li><strong>CarPlay Retrofit:</strong> 12-month warranty on parts and labor</li>
              <li><strong>ECU Repair:</strong> 12-month warranty on repaired modules</li>
              <li><strong>Transmission Rebuild:</strong> 12-month / 12,000-mile warranty</li>
              <li><strong>Downpipe Installation:</strong> 12-month warranty on parts</li>
            </ul>
            <p className="mt-2">Warranty does not cover damage caused by misuse, accidents, unauthorized modifications, or normal wear and tear.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">5. Liability</h2>
            <p>While we take every precaution to ensure quality work, Limard Performance is not liable for:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Pre-existing vehicle conditions not disclosed at the time of service</li>
              <li>Damage resulting from racing, track use, or aggressive driving</li>
              <li>Voiding of manufacturer warranties due to aftermarket modifications (customer assumes this risk)</li>
              <li>Consequential or incidental damages beyond the cost of the service performed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">6. Payment</h2>
            <p>Payment is due upon completion of services unless otherwise agreed. We accept cash, credit/debit cards, and electronic transfers. A deposit may be required for parts orders or extensive repairs.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">7. Cancellation</h2>
            <p>Please provide at least 24 hours notice if you need to cancel or reschedule your appointment. Deposits for custom-ordered parts are non-refundable.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">8. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and design, is the property of Limard Performance and is protected by copyright laws. Unauthorized use or reproduction is prohibited.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">9. Governing Law</h2>
            <p>These Terms of Service are governed by the laws of the State of California. Any disputes arising from these terms shall be resolved in the courts of Los Angeles County, California.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">10. Contact</h2>
            <p>For questions about these Terms of Service:</p>
            <ul className="list-none space-y-1 mt-2">
              <li><strong>Phone:</strong> +1 (213) 932-0154</li>
              <li><strong>Instagram:</strong> @limard_usa</li>
              <li><strong>Location:</strong> Los Angeles, CA</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
