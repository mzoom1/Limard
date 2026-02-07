import React from 'react';
import SEOHead from '../components/SEOHead';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <SEOHead 
        title="Privacy Policy | Limard Performance"
        description="Privacy Policy for Limard Performance. Learn how we collect, use, and protect your personal information."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-black text-slate-900 uppercase tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: February 6, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 text-sm leading-relaxed">
          
          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">1. Information We Collect</h2>
            <p>When you use our website or submit a booking request, we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Vehicle information (make, model, year)</li>
              <li>Service preferences</li>
              <li>Device and browser information (automatically collected)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Process and respond to your service requests</li>
              <li>Provide accurate quotes and pricing</li>
              <li>Communicate with you about your appointment</li>
              <li>Improve our website and services</li>
              <li>Send follow-up communications about your service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations (e.g., payment processors)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">5. Cookies</h2>
            <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">7. California Privacy Rights (CCPA)</h2>
            <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt out of the sale of your information. We do not sell personal information.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-slate-900 uppercase tracking-tight mb-3">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicy;
