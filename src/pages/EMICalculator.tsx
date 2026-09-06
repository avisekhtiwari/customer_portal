import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function EMICalculator() {
  const [amount, setAmount] = useState(80000);
  const [rate, setRate] = useState(9.5);
  const [tenure, setTenure] = useState(24);

  // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = rate / 12 / 100;
  const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - amount;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-[#04407E] selection:text-white pt-16">
      
      {/* HERO SECTION */}
      <section className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">EMI Calculator</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Plan your finances accurately. Calculate your monthly installments for your dream two-wheeler in seconds.
        </p>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="bg-[#f8f9fa] py-10 md:py-12">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-12">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-extrabold text-black mb-8 flex items-center">
              <Calculator className="mr-4 text-[#9e7146]" /> Enter Details
            </h2>
            
            <div className="mb-6">
              <label className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                <span>Loan Amount (₹)</span>
                <span className="text-[#9e7146]">₹{amount.toLocaleString()}</span>
              </label>
              <input 
                type="range" min="10000" max="500000" step="5000"
                value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#dcb285]"
              />
            </div>

            <div className="mb-6">
              <label className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                <span>Interest Rate (% p.a.)</span>
                <span className="text-[#9e7146]">{rate}%</span>
              </label>
              <input 
                type="range" min="5" max="25" step="0.5"
                value={rate} onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#dcb285]"
              />
            </div>

            <div className="mb-6">
              <label className="flex justify-between text-sm font-bold text-gray-700 mb-2">
                <span>Loan Tenure (Months)</span>
                <span className="text-[#9e7146]">{tenure} Months</span>
              </label>
              <input 
                type="range" min="6" max="60" step="6"
                value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#dcb285]"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-gray-900 p-10 rounded-3xl shadow-lg text-white">
            <h3 className="text-xl font-bold text-gray-400 mb-4 uppercase tracking-wider">Your EMI Details</h3>
            
            <div className="mb-8 border-b border-gray-700 pb-8">
              <span className="block text-gray-400 mb-2">Monthly EMI</span>
              <span className="text-6xl font-extrabold text-[#dcb285]">₹{Math.round(emi).toLocaleString()}</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Principal Amount</span>
                <span className="font-bold text-lg">₹{amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Interest</span>
                <span className="font-bold text-lg text-red-400">₹{Math.round(totalInterest).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                <span className="text-gray-300 font-bold">Total Amount Payable</span>
                <span className="font-bold text-2xl text-white">₹{Math.round(totalAmount).toLocaleString()}</span>
              </div>
            </div>
            
            <button className="mt-10 bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all shadow-sm w-full">
              Apply for Loan Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
