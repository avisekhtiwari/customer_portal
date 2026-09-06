import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { IndianRupee } from 'lucide-react';
import { MOCK_BIKES } from '@/lib/mockData';

export default function EMICalculator() {
 const [searchParams] = useSearchParams();
 const bikeId = searchParams.get('bike');
 
 const [bikePrice, setBikePrice] = useState(150000);
 const [downPayment, setDownPayment] = useState(30000);
 const [interestRate, setInterestRate] = useState(10.5);
 const [tenure, setTenure] = useState(24);

 useEffect(() => {
 if (bikeId) {
 const bike = MOCK_BIKES.find(b => b.id === bikeId);
 if (bike) {
 setBikePrice(bike.basePrice);
 setDownPayment(Math.floor(bike.basePrice * 0.2));
 }
 }
 }, [bikeId]);

 const loanAmount = Math.max(0, bikePrice - downPayment);
 
 // EMI Formula: P x R x (1+R)^N / [(1+R)^N-1]
 // P = Principal (Loan Amount)
 // R = Monthly Interest Rate (Annual Rate / 12 / 100)
 // N = Tenure in Months
 
 const calculateEMI = () => {
 if (loanAmount <= 0) return 0;
 const r = interestRate / 12 / 100;
 const emi = (loanAmount * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1);
 return Math.round(emi);
 };

 const emiAmount = calculateEMI();
 const totalPayable = emiAmount * tenure;
 const totalInterest = Math.max(0, totalPayable - loanAmount);

 return (
 <div className="pt-24 pb-20 min-h-screen bg-background-alt">
 <div className="container mx-auto px-4 md:px-6">
 <div className="text-center max-w-2xl mx-auto mb-12">
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Smart EMI Calculator</h1>
 <p className="text-gray-600 text-lg">Plan your finance with our transparent EMI estimator.</p>
 </div>

 <div className="bg-white shadow-xl overflow-hidden max-w-5xl mx-auto border border-gray-100 flex flex-col md:flex-row">
 
 {/* Controls */}
 <div className="w-full md:w-3/5 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
 <h3 className="text-2xl font-bold mb-8">Loan Details</h3>
 
 <div className="space-y-8">
 <div>
 <div className="flex justify-between mb-2">
 <label className="font-semibold text-gray-700">Bike Price</label>
 <span className="font-bold flex items-center"><IndianRupee className="w-4 h-4" /> {bikePrice.toLocaleString('en-IN')}</span>
 </div>
 <input 
 type="range" 
 min="10000" max="500000" step="5000"
 value={bikePrice}
 onChange={(e) => setBikePrice(Number(e.target.value))}
 className="w-full h-2 bg-gray-200 appearance-none cursor-pointer accent-accent"
 />
 </div>

 <div>
 <div className="flex justify-between mb-2">
 <label className="font-semibold text-gray-700">Down Payment</label>
 <span className="font-bold flex items-center"><IndianRupee className="w-4 h-4" /> {downPayment.toLocaleString('en-IN')}</span>
 </div>
 <input 
 type="range" 
 min="0" max={bikePrice} step="5000"
 value={downPayment}
 onChange={(e) => setDownPayment(Number(e.target.value))}
 className="w-full h-2 bg-gray-200 appearance-none cursor-pointer accent-accent"
 />
 </div>

 <div>
 <div className="flex justify-between mb-2">
 <label className="font-semibold text-gray-700">Interest Rate (% p.a.)</label>
 <span className="font-bold">{interestRate}%</span>
 </div>
 <input 
 type="range" 
 min="7" max="20" step="0.5"
 value={interestRate}
 onChange={(e) => setInterestRate(Number(e.target.value))}
 className="w-full h-2 bg-gray-200 appearance-none cursor-pointer accent-accent"
 />
 </div>

 <div>
 <div className="flex justify-between mb-2">
 <label className="font-semibold text-gray-700">Tenure (Months)</label>
 <span className="font-bold">{tenure} Months</span>
 </div>
 <div className="flex gap-2">
 {[12, 24, 36, 48].map(t => (
 <button
 key={t}
 onClick={() => setTenure(t)}
 className={`flex-1 py-3 font-medium transition-colors ${tenure === t ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
 >
 {t}m
 </button>
 ))}
 </div>
 </div>
 </div>
 </div>

 {/* Results */}
 <div className="w-full md:w-2/5 p-8 md:p-12 bg-gray-50 flex flex-col justify-between">
 <div>
 <h3 className="text-2xl font-bold mb-8">Estimated Summary</h3>
 
 <div className="mb-8">
 <p className="text-gray-500 mb-2">Monthly EMI</p>
 <p className="text-5xl font-bold text-accent flex items-center">
 <IndianRupee className="w-8 h-8 mr-1" />
 {emiAmount.toLocaleString('en-IN')}
 </p>
 </div>

 <div className="space-y-4 mb-8">
 <div className="flex justify-between items-center py-3 border-b border-gray-200">
 <span className="text-gray-600">Principal Amount</span>
 <span className="font-bold text-gray-900 flex items-center"><IndianRupee className="w-4 h-4 mr-1"/> {loanAmount.toLocaleString('en-IN')}</span>
 </div>
 <div className="flex justify-between items-center py-3 border-b border-gray-200">
 <span className="text-gray-600">Total Interest</span>
 <span className="font-bold text-gray-900 flex items-center"><IndianRupee className="w-4 h-4 mr-1"/> {totalInterest.toLocaleString('en-IN')}</span>
 </div>
 <div className="flex justify-between items-center py-3">
 <span className="text-gray-900 font-bold">Total Payable</span>
 <span className="font-bold text-accent flex items-center"><IndianRupee className="w-4 h-4 mr-1"/> {totalPayable.toLocaleString('en-IN')}</span>
 </div>
 </div>
 </div>

 <Link 
 to={`/finance?loanAmount=${loanAmount}&tenure=${tenure}${bikeId ? `&bike=${bikeId}` : ''}`}
 className="w-full block text-center bg-primary hover:bg-primary/90 text-white py-4 font-bold transition-colors"
 >
 Apply for Finance
 </Link>
 </div>
 
 </div>
 </div>
 </div>
 );
}
