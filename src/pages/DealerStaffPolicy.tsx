

export default function DealerStaffPolicy() {
  return (
    <div className="min-h-screen bg-[#D1DCE2]">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Dealer & Staff Policies</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Guidelines and terms of engagement for our partnered dealerships and internal staff.
        </p>
      </div>

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#04407E] border-b pb-2 mb-4">A. Dealer Partner Policy</h2>
              <p className="mb-4">As an authorized dealer partner of Ritika Financial Corporation, you agree to adhere to the highest standards of transparency and customer service.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All customer KYC and documents must be verified physically before portal submission.</li>
                <li>Vehicles funded by Ritika Financial must be delivered only after the generation of the Delivery Order (DO).</li>
                <li>Dealers must not charge any hidden fees or extra margins on top of the approved loan amount.</li>
                <li>Original registration documents (RC) reflecting the hypothecation to Ritika Financial must be submitted within 30 days of vehicle delivery.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#04407E] border-b pb-2 mb-4">B. Internal Staff Policy</h2>
              <p className="mb-4">Employees of Ritika Financial represent our core values. Strict adherence to our operational protocols is mandatory.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Zero-tolerance policy towards fraudulent documentation approval or manipulation of customer CIBIL records.</li>
                <li>Customer data confidentiality must be strictly maintained; sharing internal dashboard data externally is grounds for immediate termination.</li>
                <li>All customer communications must remain professional and occur only through authorized corporate channels (Official Email, Corporate WhatsApp API, recorded lines).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
