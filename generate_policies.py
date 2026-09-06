import os

base_dir = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages"

pages = {
    "PrivacyPolicy.tsx": """import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Privacy Policy</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We value your privacy. Read about how we handle and protect your personal information.
        </p>
      </div>

      <section className="py-20 bg-white">
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
""",

    "DealerStaffPolicy.tsx": """import React from 'react';

export default function DealerStaffPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Dealer & Staff Policies</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Guidelines and terms of engagement for our partnered dealerships and internal staff.
        </p>
      </div>

      <section className="py-20 bg-white">
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
"""
}

for filename, content in pages.items():
    filepath = os.path.join(base_dir, filename)
    with open(filepath, "w") as f:
        f.write(content)

# Update App.tsx
app_file = os.path.join(base_dir, "..", "App.tsx")
with open(app_file, "r") as f:
    app_code = f.read()

imports = """
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import DealerStaffPolicy from '@/pages/DealerStaffPolicy';
"""

if "import PrivacyPolicy from" not in app_code:
    app_code = app_code.replace("import InterestRates from '@/pages/InterestRates';", "import InterestRates from '@/pages/InterestRates';" + imports)

routes = """
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/dealer-staff-policy" element={<DealerStaffPolicy />} />
"""

if '<Route path="/privacy-policy"' not in app_code:
    app_code = app_code.replace('<Route path="/interest-rates" element={<InterestRates />} />', '<Route path="/interest-rates" element={<InterestRates />} />' + routes)

with open(app_file, "w") as f:
    f.write(app_code)

# Add Floating WhatsApp button in App.tsx
if "MessageCircle" not in app_code:
    app_code = app_code.replace("import { BookOpen } from 'lucide-react';", "import { BookOpen, MessageCircle } from 'lucide-react';")
    
    # inject before last closing tag 
    # Actually wait, I will just append a Floating WhatsApp component before closing </Router> tag.
    # The structure is:
    #      </Routes>
    #      <Footer />
    #    </div>
    #  </Router>
    floating_btn = """
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#20b858] transition-all z-50 flex items-center justify-center group"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 bg-white text-gray-900 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Chat with us!
          </span>
        </a>
"""
    app_code = app_code.replace("<Footer />\n      </div>", "<Footer />\n" + floating_btn + "      </div>")
    
    with open(app_file, "w") as f:
        f.write(app_code)

# Update DynamicTitle.tsx
title_file = os.path.join(base_dir, "..", "components", "DynamicTitle.tsx")
with open(title_file, "r") as f:
    title_code = f.read()

new_titles = """  '/privacy-policy': 'Privacy Policy',
  '/dealer-staff-policy': 'Dealer & Staff Policies',
"""
if "'/privacy-policy'" not in title_code:
    title_code = title_code.replace("'/interest-rates': 'Our Interest Rates',", "'/interest-rates': 'Our Interest Rates',\n" + new_titles)
    with open(title_file, "w") as f:
        f.write(title_code)

print("Policies and WhatsApp button generated.")
