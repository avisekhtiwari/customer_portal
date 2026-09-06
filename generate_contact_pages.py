import os

base_dir = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages"

pages = {
    "SubmitQuery.tsx": """import { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';

export default function SubmitQuery() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Submit a Query</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a specific question about our loan process or your existing account? Let us know.
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Query Submitted!</h3>
                <p className="text-gray-600 text-lg mb-6">Your Query ID is <span className="font-bold text-[#04407E]">#QRY-8842</span>. You can use this ID or your registered mobile number to check the reply status.</p>
                <button onClick={() => setSubmitted(false)} className="text-[#04407E] font-bold hover:underline">Submit another query</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center mb-8">
                  <MessageSquare className="w-8 h-8 text-[#9e7146] mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">How can we assist you?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dcb285]" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                    <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dcb285]" placeholder="10-digit number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Query Type</label>
                  <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dcb285]">
                    <option value="">Select an option</option>
                    <option value="loan_process">New Loan Process</option>
                    <option value="emi_issues">EMI Payment Issues</option>
                    <option value="document_status">Document Verification Status</option>
                    <option value="noc">NOC / Closure Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Query Details</label>
                  <textarea required rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dcb285] resize-none" placeholder="Please describe your query in detail..."></textarea>
                </div>

                <button type="submit" className="bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold py-4 px-8 rounded-full transition-colors w-full flex items-center justify-center text-lg">
                  Submit Query <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
""",

    "QueryStatus.tsx": """import { useState } from 'react';
import { Search, CheckCircle, Clock } from 'lucide-react';

export default function QueryStatus() {
  const [hasSearched, setHasSearched] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: any) => {
    e.preventDefault();
    if(searchTerm) setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Check Query Reply</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Track the status of your submitted queries or read our executive's responses instantly.
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <form onSubmit={handleSearch} className="mb-12">
            <div className="bg-white p-4 rounded-full shadow-md border border-gray-200 flex items-center">
              <input 
                type="text" 
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter your Query ID (e.g., QRY-8842) or Mobile Number" 
                className="flex-1 bg-transparent border-none px-6 py-2 text-lg focus:outline-none text-gray-900 placeholder-gray-400"
              />
              <button type="submit" className="bg-[#04407E] hover:bg-[#032c57] text-white font-bold py-4 px-8 rounded-full transition-colors flex items-center">
                Check Status <Search className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>

          {hasSearched && (
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex justify-between items-start mb-6 pb-6 border-b border-gray-200">
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Query ID: {searchTerm.toUpperCase().includes('QRY') ? searchTerm.toUpperCase() : 'QRY-8842'}</span>
                  <h3 className="text-2xl font-bold text-gray-900">EMI Payment Deduction Issue</h3>
                </div>
                <div className="flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" /> Resolved
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-bold text-gray-500 mb-2">Your Query (Submitted 2 days ago)</p>
                  <p className="text-gray-800 bg-white p-4 rounded-xl border border-gray-100">
                    My EMI for this month was deducted twice from my bank account. Please reverse the duplicate transaction.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-bold text-[#04407E] mb-2 flex items-center">
                    <img src="/logo.jpeg" className="w-5 h-5 rounded-full mr-2" alt="Agent" />
                    Ritika Financial Support Reply (Yesterday)
                  </p>
                  <div className="text-gray-800 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <p className="mb-4">Dear Customer,</p>
                    <p className="mb-4">We apologize for the inconvenience caused. Due to a banking server sync issue, the auto-debit mandate was triggered twice.</p>
                    <p className="mb-4">We have already initiated the reversal of the duplicate amount (₹4,550). It will reflect back in your source bank account within 3-5 working days.</p>
                    <p>Best Regards,<br/>Customer Support Team</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
""",

    "PurchaseBike.tsx": """import { useState } from 'react';
import { ShoppingCart, MapPin, CheckCircle2 } from 'lucide-react';

const bikes = [
  "Honda Activa 6G", "Royal Enfield Classic 350", "TVS Jupiter", 
  "Bajaj Pulsar NS200", "Ather 450X", "Ola S1 Pro", 
  "Hero Splendor Plus", "Suzuki Access 125"
];

const dealers = [
  "SuperBikes Auto (New Delhi)", "City Scooters (Mumbai)", 
  "Green EV Motors (Bangalore)", "Royal Wheels (Chennai)", 
  "Express Honda (Pune)"
];

export default function PurchaseBike() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Purchase a Bike</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Ready to ride? Select your dream vehicle, choose your nearest dealer, and we'll arrange the financing and delivery.
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          <div className="w-full lg:w-1/3">
            <div className="bg-[#f8f9fa] rounded-3xl p-8 border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How it works</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#dcb285] text-black flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                  <div>
                    <p className="font-bold text-gray-900">Select Vehicle & Dealer</p>
                    <p className="text-sm text-gray-600">Tell us what you want to buy and where from.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#dcb285] text-black flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                  <div>
                    <p className="font-bold text-gray-900">Instant Pre-Approval</p>
                    <p className="text-sm text-gray-600">Our system automatically checks your eligibility.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#dcb285] text-black flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                  <div>
                    <p className="font-bold text-gray-900">Showroom Visit</p>
                    <p className="text-sm text-gray-600">Walk into the showroom, complete KYC, and ride out!</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Lead Generated Successfully!</h3>
                  <p className="text-gray-600 text-lg mb-8">
                    Your details have been shared with the dealer. A representative will contact you within 30 minutes to finalize your loan and schedule a showroom visit.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="bg-[#04407E] hover:bg-[#032c57] text-white font-bold py-3 px-8 rounded-full transition-colors">
                    Make another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4">Vehicle Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Select Two-Wheeler Model</label>
                      <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dcb285] text-lg">
                        <option value="">Choose a bike/scooter...</option>
                        {bikes.map(bike => <option key={bike} value={bike}>{bike}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-[#04407E]" /> Nearest Dealer
                      </label>
                      <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dcb285] text-lg">
                        <option value="">Choose a dealer...</option>
                        {dealers.map(dealer => <option key={dealer} value={dealer}>{dealer}</option>)}
                      </select>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4 pt-4">Your Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dcb285]" placeholder="E.g. Rahul Sharma" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                      <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dcb285]" placeholder="10-digit mobile number" />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl flex items-start mt-4 border border-blue-100">
                    <input type="checkbox" required id="consent" className="mt-1 mr-3 w-5 h-5 accent-[#04407E]" />
                    <label htmlFor="consent" className="text-sm text-gray-700">
                      I authorize Ritika Financial and its representatives to Call, SMS or communicate via WhatsApp regarding my loan application and vehicle purchase.
                    </label>
                  </div>

                  <button type="submit" className="bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold py-4 px-8 rounded-full transition-colors w-full flex items-center justify-center text-xl shadow-lg mt-4">
                    Submit Purchase Request <ShoppingCart className="ml-3 w-6 h-6" />
                  </button>
                </form>
              )}
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
import SubmitQuery from '@/pages/SubmitQuery';
import QueryStatus from '@/pages/QueryStatus';
import PurchaseBike from '@/pages/PurchaseBike';
"""

if "import SubmitQuery from" not in app_code:
    app_code = app_code.replace("import Contact from '@/pages/Contact';", "import Contact from '@/pages/Contact';" + imports)

routes = """
          <Route path="/submit-query" element={<SubmitQuery />} />
          <Route path="/query-status" element={<QueryStatus />} />
          <Route path="/purchase-bike" element={<PurchaseBike />} />
"""

if '<Route path="/submit-query"' not in app_code:
    app_code = app_code.replace('<Route path="/contact" element={<Contact />} />', '<Route path="/contact" element={<Contact />} />' + routes)

with open(app_file, "w") as f:
    f.write(app_code)

# Update DynamicTitle.tsx
title_file = os.path.join(base_dir, "..", "components", "DynamicTitle.tsx")
with open(title_file, "r") as f:
    title_code = f.read()

new_titles = """  '/submit-query': 'Submit a Query',
  '/query-status': 'Check Query Status',
  '/purchase-bike': 'Purchase a Bike',
"""
if "'/submit-query'" not in title_code:
    title_code = title_code.replace("'/contact': 'Contact Us',", "'/contact': 'Contact Us',\n" + new_titles)
    with open(title_file, "w") as f:
        f.write(title_code)

print("Contact subpages created and App.tsx / DynamicTitle.tsx updated.")
