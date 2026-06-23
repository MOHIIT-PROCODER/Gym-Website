import React from "react";

function TermsOfService() {
  return (
    <div className="bg-slate-950 min-h-screen text-gray-300 py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-lime-400 mb-8 uppercase tracking-wider">Terms of Service</h1>
        
        <p className="mb-6">
          Welcome to FITIPS! These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By registering an account or purchasing a membership plan, you accept and agree to these Terms. If you do not agree to these Terms, you may not access or use the Service.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Memberships & Payments</h2>
        <p className="mb-6">
          All membership fees are billed at the beginning of the paying period. Payments are non-refundable unless otherwise specified by local law. We reserve the right to change our subscription plans or adjust pricing.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Health Disclaimer</h2>
        <p className="mb-6">
          The fitness programs, nutrition guidelines, and advice provided by FITIPS are for informational purposes only. You should consult a physician before beginning any new exercise or diet program. We are not a medical organization and cannot give you medical advice or diagnosis.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. User Conduct</h2>
        <p className="mb-6">
          You agree not to use the service for any unlawful purpose or to violate any local, state, national, or international laws. We reserve the right to terminate your account if you violate these rules.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">5. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about these Terms, please contact us at support@fitips.com.
        </p>

        <p className="text-sm text-gray-500 mt-12 pt-6 border-t border-slate-800">
          Last updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
}

export default TermsOfService;
