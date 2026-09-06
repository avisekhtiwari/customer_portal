import { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';

export default function SubmitQuery() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Submit a Query</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a specific question about our loan process or your existing account? Let us know.
        </p>
      </div>

      <section className="py-10 md:py-12 bg-white">
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

                <button type="submit" className="bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all shadow-sm w-full flex items-center justify-center text-lg">
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
