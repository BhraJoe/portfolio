import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
              In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Intellectual Property Rights</h2>
            <p className="mb-4">
              The website and its original content, features, and functionality are owned by us and are protected by international copyright, 
              trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Conduct</h2>
            <p className="mb-4">
              You agree to use our website only for lawful purposes. You agree not to take any action that might compromise the security of the website, 
              render the website inaccessible to others or otherwise cause damage to the website or the Content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall we, nor our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
              incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Revisions and Errata</h2>
            <p className="mb-4">
              The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the 
              materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at hello@atangajoseph.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
