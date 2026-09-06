

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Privacy Policy</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We value your privacy. Read about how we handle and protect your personal information.
        </p>
      </div>

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">1. Information Collection</h2>
            <p>At Ritika Financial Corporation, we collect personal information such as name, contact details, identification documents, and financial data required to process loan applications and ensure compliance with regulatory frameworks.</p>

            <h2 className="text-2xl font-bold text-gray-900">2. Use of Information</h2>
            <p>Your information is solely used to verify your identity, process your two-wheeler loan applications, manage your account, and communicate with you via SMS, Email, and WhatsApp regarding EMI schedules, approvals, and support.</p>

            <h2 className="text-2xl font-bold text-gray-900">3. Data Security</h2>
            <p>We implement robust industry-standard encryption to protect your data against unauthorized access, alteration, or destruction. We do not sell or rent your personal information to third parties.</p>

            <h2 className="text-2xl font-bold text-gray-900">4. Terms and Conditions</h2>
            <p>By applying for a loan, you confirm that you have read, understood, and accepted all the terms and conditions of Ritika Financial Corporation. You agree to repay the loan in accordance with the approved repayment schedule and authorize the company to recover all applicable dues, charges, and penalties as specified in the loan agreement.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
