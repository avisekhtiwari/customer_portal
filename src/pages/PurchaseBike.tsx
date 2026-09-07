import { useState } from 'react';
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
    <div className="min-h-screen bg-[#D1DCE2]">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Purchase a Bike</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Ready to ride? Select your dream vehicle, choose your nearest dealer, and we'll arrange the financing and delivery.
        </p>
      </div>

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          <div className="w-full lg:w-1/3">
            <div className="bg-[#f8f9fa] rounded-3xl p-8 border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How it works</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#768EA6] text-white flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                  <div>
                    <p className="font-bold text-gray-900">Select Vehicle & Dealer</p>
                    <p className="text-sm text-gray-600">Tell us what you want to buy and where from.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#768EA6] text-white flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                  <div>
                    <p className="font-bold text-gray-900">Instant Pre-Approval</p>
                    <p className="text-sm text-gray-600">Our system automatically checks your eligibility.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#768EA6] text-white flex items-center justify-center font-bold mr-4 shrink-0">3</div>
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
                  <button onClick={() => setSubmitted(false)} className="bg-[#768EA6] hover:bg-[#7C91A6] text-white font-bold uppercase tracking-wider py-3 px-8 rounded-lg transition-all shadow-sm">
                    Make another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4">Vehicle Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Select Two-Wheeler Model</label>
                      <select required className="w-full bg-[#D1DCE2] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#768EA6] text-lg">
                        <option value="">Choose a bike/scooter...</option>
                        {bikes.map(bike => <option key={bike} value={bike}>{bike}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-[#04407E]" /> Nearest Dealer
                      </label>
                      <select required className="w-full bg-[#D1DCE2] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#768EA6] text-lg">
                        <option value="">Choose a dealer...</option>
                        {dealers.map(dealer => <option key={dealer} value={dealer}>{dealer}</option>)}
                      </select>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4 pt-4">Your Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <input required type="text" className="w-full bg-[#D1DCE2] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#768EA6]" placeholder="E.g. Rahul Sharma" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number</label>
                      <input required type="tel" className="w-full bg-[#D1DCE2] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#768EA6]" placeholder="10-digit mobile number" />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl flex items-start mt-4 border border-blue-100">
                    <input type="checkbox" required id="consent" className="mt-1 mr-3 w-5 h-5 accent-[#04407E]" />
                    <label htmlFor="consent" className="text-sm text-gray-700">
                      I authorize Ritika Financial and its representatives to Call, SMS or communicate via WhatsApp regarding my loan application and vehicle purchase.
                    </label>
                  </div>

                  <button type="submit" className="bg-[#768EA6] hover:bg-[#7C91A6] text-white font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all shadow-sm w-full flex items-center justify-center text-xl shadow-lg mt-4">
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
