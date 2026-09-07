import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MOCK_BIKES } from '@/lib/mockData';
import { IndianRupee, CheckCircle2 } from 'lucide-react';

export default function Finance() {
 const [searchParams] = useSearchParams();
 const navigate = useNavigate();
 const bikeId = searchParams.get('bike');
 const initialLoanAmount = searchParams.get('loanAmount');
 const initialTenure = searchParams.get('tenure');

 const selectedBike = MOCK_BIKES.find(b => b.id === bikeId) || null;

  // Check for user in local storage or use mock data
  const userData = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('ritika_user') || 'null') : null;

  const [formData, setFormData] = useState({
    name: userData?.name || 'Jane Doe',
    mobile: userData?.identifier || '9876543210',
    email: 'jane.doe@example.com',
    city: 'Mumbai',
    bikeId: selectedBike?.id || '2', // Default to a bike if none selected
    downPayment: selectedBike ? Math.floor(selectedBike.basePrice * 0.2).toString() : '20000',
    loanAmount: initialLoanAmount || '80000',
    tenure: initialTenure || '24',
  });

 const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 // Simulate API call
 setTimeout(() => {
 setIsSubmitted(true);
 }, 1000);
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
 setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 if (isSubmitted) {
 return (
 <div className="pt-32 pb-20 min-h-[80vh] flex items-center justify-center bg-background">
 <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl text-center border border-gray-100">
 <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 text-green-500">
 <CheckCircle2 className="w-10 h-10" />
 </div>
 <h2 className="text-3xl font-bold text-gray-900 mb-4">Enquiry Submitted</h2>
 <p className="text-gray-600 mb-8 leading-relaxed">
 Thank you, {formData.name}. Our finance team will review your enquiry and contact you shortly at {formData.mobile}.
 </p>
 <button 
 onClick={() => navigate('/')}
 className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-medium transition-colors"
 >
 Return to Home
 </button>
 </div>
 </div>
 );
 }

 return (
 <div className="pt-24 pb-20 min-h-screen bg-background-alt">
 <div className="container mx-auto px-4 md:px-6 max-w-4xl">
 <div className="text-center mb-12">
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Apply for Finance</h1>
 <p className="text-gray-600 text-lg">Complete the form below and get one step closer to your new ride.</p>
 </div>

 <form onSubmit={handleSubmit} className="bg-white shadow-xl p-8 md:p-12 border border-gray-100">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
 
 {/* Personal Details */}
 <div className="space-y-6">
 <h3 className="text-xl font-bold border-b pb-2">Personal Details</h3>
 
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
 <input 
 required
 type="text" 
 name="name"
 value={formData.name}
 onChange={handleChange}
 className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
 placeholder="John Doe"
 />
 </div>
 
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
 <input 
 required
 type="tel" 
 name="mobile"
 value={formData.mobile}
 onChange={handleChange}
 className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
 placeholder="9876543210"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
 <input 
 type="email" 
 name="email"
 value={formData.email}
 onChange={handleChange}
 className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
 placeholder="john@example.com"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
 <input 
 required
 type="text" 
 name="city"
 value={formData.city}
 onChange={handleChange}
 className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
 placeholder="Mumbai"
 />
 </div>
 </div>

 {/* Finance Details */}
 <div className="space-y-6">
 <h3 className="text-xl font-bold border-b pb-2">Finance Details</h3>
 
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">Select Bike *</label>
 <select 
 required
 name="bikeId"
 value={formData.bikeId}
 onChange={handleChange}
 className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white"
 >
 <option value="">-- Choose a Bike --</option>
 {MOCK_BIKES.map(bike => (
 <option key={bike.id} value={bike.id}>{bike.brand} {bike.model}</option>
 ))}
 </select>
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment Intended (₹)</label>
 <input 
 type="number" 
 name="downPayment"
 value={formData.downPayment}
 onChange={handleChange}
 className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
 placeholder="50000"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">Required Loan Amount (₹) *</label>
 <input 
 required
 type="number" 
 name="loanAmount"
 value={formData.loanAmount}
 onChange={handleChange}
 className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
 placeholder="100000"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Tenure *</label>
 <select 
 required
 name="tenure"
 value={formData.tenure}
 onChange={handleChange}
 className="w-full rounded-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white"
 >
 <option value="12">12 Months</option>
 <option value="24">24 Months</option>
 <option value="36">36 Months</option>
 <option value="48">48 Months</option>
 </select>
 </div>
 </div>
 </div>

 {selectedBike && (
 <div className="bg-[#D1DCE2] p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
 <img src={selectedBike.image} alt={selectedBike.model} className="w-32 h-24 object-cover " />
 <div>
 <p className="text-sm text-gray-500">Selected Bike</p>
 <p className="font-bold text-lg">{selectedBike.brand} {selectedBike.model}</p>
 <p className="text-accent font-semibold flex items-center">
 <IndianRupee className="w-4 h-4 mr-1" />
 {selectedBike.basePrice.toLocaleString('en-IN')}
 </p>
 </div>
 </div>
 )}

 <div className="border-t pt-8">
 <button 
 type="submit"
 className="w-full md:w-auto md:min-w-[200px] bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold transition-colors mx-auto block"
 >
 Submit Enquiry
 </button>
 <p className="text-xs text-gray-400 text-center mt-4">
 By submitting this form, you agree to our terms and conditions and authorize our representatives to contact you.
 </p>
 </div>
 </form>
 </div>
 </div>
 );
}
