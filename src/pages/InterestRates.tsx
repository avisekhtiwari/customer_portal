import { Percent, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InterestRates() {
  const rates = [
    { type: "New Two-Wheeler Loan", rate: "9.50% - 11.50%", processingFee: "Up to 2%", tenure: "12 to 60 Months", preClosure: "Nil after 12 months" },
    { type: "Used Two-Wheeler Loan", rate: "12.50% - 15.00%", processingFee: "Up to 3%", tenure: "12 to 48 Months", preClosure: "2% of principal" },
    { type: "Electric Vehicle (EV) Loan", rate: "8.50% - 10.50%", processingFee: "Flat ₹999", tenure: "12 to 48 Months", preClosure: "Nil" },
    { type: "Superbike / Premium Bike Loan", rate: "8.99% - 11.00%", processingFee: "Up to 1.5%", tenure: "12 to 60 Months", preClosure: "1% of principal" },
    { type: "Top-Up Loan", rate: "11.00% - 14.00%", processingFee: "Up to 2%", tenure: "12 to 36 Months", preClosure: "Nil" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Interest Rates</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Transparent, competitive, and affordable. We offer the best two-wheeler financing rates in the market with zero hidden charges.
        </p>
      </div>

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-900 border-b border-gray-200">
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider">Loan Product</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider">Interest Rate (p.a.)</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider">Processing Fee</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider">Tenure</th>
                    <th className="py-5 px-6 font-bold text-sm uppercase tracking-wider">Pre-closure Charges</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {rates.map((item, idx) => (
                    <tr key={idx} className="hover:bg-yellow-50/50 transition-colors">
                      <td className="py-5 px-6 font-bold text-gray-900">{item.type}</td>
                      <td className="py-5 px-6 font-extrabold text-[#9e7146] text-lg">{item.rate}</td>
                      <td className="py-5 px-6 text-gray-600">{item.processingFee}</td>
                      <td className="py-5 px-6 text-gray-600">{item.tenure}</td>
                      <td className="py-5 px-6 text-gray-600">{item.preClosure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#f8f9fa] rounded-3xl p-10 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Percent className="text-[#dcb285] mr-3 w-8 h-8" />
                Want to know your exact EMI?
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl">
                Interest rates vary based on your credit score, vehicle model, and loan tenure. Use our EMI calculator to get a precise estimate of your monthly payments instantly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm font-bold text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> No impact on CIBIL score</li>
                <li className="flex items-center text-sm font-bold text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> 100% Free & Accurate</li>
              </ul>
            </div>
            <div className="shrink-0">
              <Link to="/emi-calculator" className="inline-block bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold py-4 px-10 rounded-full transition-colors shadow-lg text-lg">
                Calculate EMI Now
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
