import React from "react";

function PrivacyPolicy() {
  return (
    <div className="bg-slate-950 min-h-screen text-gray-300 py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-lime-400 mb-8 uppercase tracking-wider">Privacy Policy</h1>
        
        <p className="mb-6">
          At FITIPS, we are committed to protecting your personal data and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at support@fitips.com.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. What Information Do We Collect?</h2>
        <p className="mb-6">
          We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services. The personal information we collect may include the following: Name, Contact Data, Passwords, Payment Data, and Health Metrics.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. How Do We Use Your Information?</h2>
        <p className="mb-6">
          We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Will Your Information Be Shared With Anyone?</h2>
        <p className="mb-6">
          We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We use trusted third-party payment processors like Razorpay to handle transactions securely.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. How Long Do We Keep Your Information?</h2>
        <p className="mb-6">
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
        </p>

        <h2 className="text-2xl font-semibold text-white mt-10 mb-4">5. How Do We Keep Your Information Safe?</h2>
        <p className="mb-6">
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
        </p>

        <p className="text-sm text-gray-500 mt-12 pt-6 border-t border-slate-800">
          Last updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
