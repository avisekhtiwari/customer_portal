import { useState } from 'react';
import { Search, CheckCircle } from 'lucide-react';

export default function QueryStatus() {
  const [hasSearched, setHasSearched] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: any) => {
    e.preventDefault();
    if(searchTerm) setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-[#D1DCE2]">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Check Query Reply</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Track the status of your submitted queries or read our executive's responses instantly.
        </p>
      </div>

      <section className="py-10 md:py-12 bg-white">
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
              <button type="submit" className="bg-[#768EA6] hover:bg-[#7C91A6] text-white font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all shadow-sm flex items-center">
                Check Status <Search className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>

          {hasSearched && (
            <div className="bg-[#D1DCE2] rounded-3xl p-8 border border-gray-100 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
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
