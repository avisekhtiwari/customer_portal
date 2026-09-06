import { useState } from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const loanProducts = [
  {
    title: "New Bike Loan",
    desc: "Up to 100% financing for your brand new two-wheeler with lowest interest rates.",
    features: ["Zero Downpayment", "Lowest EMI", "Instant Approval"]
  },
  {
    title: "Used Bike Loan",
    desc: "Get funding for pre-owned two-wheelers with flexible tenure up to 48 months.",
    features: ["Quick Valuation", "Up to 80% Funding", "Transfer Assistance"]
  },
  {
    title: "EV Loan",
    desc: "Special subsidized interest rates to support your shift to electric mobility.",
    features: ["1% Lower Interest", "Battery Cover", "Extended Tenure"]
  }
];

export default function Loans() {
  const [selectedLoan, setSelectedLoan] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-[#04407E] selection:text-white pt-16">
      
      {/* HERO SECTION */}
      <section className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Two-Wheeler Loans</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Finance your dream bike or scooter instantly with up to 100% on-road funding and zero hidden charges.
        </p>
      </section>

      {/* LOAN PRODUCTS SECTION */}
      <section className="bg-[#f8f9fa] py-10 md:py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-black mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 text-lg">Select the financing option that perfectly fits your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanProducts.map((product, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedLoan(idx)}
                className={`cursor-pointer rounded-3xl p-8 transition-all duration-300 border-2 ${selectedLoan === idx ? 'bg-white border-[#dcb285] shadow-xl scale-105' : 'bg-white border-transparent shadow-sm hover:shadow-md'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${selectedLoan === idx ? 'bg-[#dcb285] text-white' : 'bg-gray-100 text-gray-300'}`}>
                    ✓
                  </div>
                </div>
                <p className="text-gray-600 mb-8 h-16">{product.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-[#9e7146] mr-3" /> {f}
                    </li>
                  ))}
                </ul>

                <button className={`w-full font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-all shadow-sm ${selectedLoan === idx ? 'bg-[#FFD700] text-black hover:bg-[#F2C900]' : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'}`}>
                  {selectedLoan === idx ? 'Apply Now' : 'Select'}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-12 md:py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-[#04407E] mb-8">
            Not sure where to start?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Use our EMI calculator to find out exactly how much you can afford to borrow before you apply.
          </p>
          <Link to="/emi-calculator" className="bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-3 px-8 rounded-lg transition-all shadow-sm inline-flex items-center">
            Calculate EMI <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
