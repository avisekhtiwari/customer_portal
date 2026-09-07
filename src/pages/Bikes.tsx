import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, IndianRupee, ArrowRight } from 'lucide-react';
import { MOCK_BIKES } from '@/lib/mockData';
import { motion } from 'framer-motion';

export default function Bikes() {
 const [searchTerm, setSearchTerm] = useState('');
 const [selectedBrand, setSelectedBrand] = useState('All');

 const brands = ['All', ...Array.from(new Set(MOCK_BIKES.map(bike => bike.brand)))];

 const filteredBikes = MOCK_BIKES.filter(bike => {
 const matchesSearch = bike.model.toLowerCase().includes(searchTerm.toLowerCase()) || 
 bike.brand.toLowerCase().includes(searchTerm.toLowerCase());
 const matchesBrand = selectedBrand === 'All' || bike.brand === selectedBrand;
 return matchesSearch && matchesBrand;
 });

 return (
 <div className="pt-24 pb-20 min-h-screen bg-background-alt text-gray-900">
 <div className="container mx-auto px-4 md:px-6">
 
 {/* Header Section */}
 <div className="text-center max-w-2xl mx-auto mb-10">
 <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Find Your Perfect Ride</h1>
 <p className="text-gray-600 text-lg">Browse our extensive collection of premium motorcycles available for immediate financing.</p>
 </div>

 {/* Search and Filter */}
 <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
 <div className="flex-1 relative">
 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
 <Search className="w-5 h-5 text-gray-400" />
 </div>
 <input
 type="text"
 placeholder="Search by brand or model..."
 value={searchTerm}
 onChange={(e) => setSearchTerm(e.target.value)}
 className="w-full rounded-full pl-12 pr-4 py-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white shadow-sm"
 />
 </div>
 <div className="relative md:w-64">
 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
 <Filter className="w-5 h-5 text-gray-400" />
 </div>
 <select
 value={selectedBrand}
 onChange={(e) => setSelectedBrand(e.target.value)}
 className="w-full rounded-full pl-12 pr-10 py-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent appearance-none bg-white shadow-sm font-medium text-gray-700"
 >
 {brands.map(brand => (
 <option key={brand} value={brand}>{brand}</option>
 ))}
 </select>
 </div>
 </div>

 {/* Bikes Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredBikes.map((bike, index) => (
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 key={bike.id} 
 className="group bg-white p-4 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
 >
 <div className="relative h-64 bg-[#D1DCE2] overflow-hidden mb-6 flex items-center justify-center p-6">
 <img 
 src={bike.image} 
 alt={bike.model} 
 className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" 
 />
 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-gray-900 shadow-sm">
 {bike.brand}
 </div>
 </div>
 
 <div className="px-4 pb-4">
 <div className="flex justify-between items-start mb-2">
 <h3 className="text-2xl font-bold text-gray-900">{bike.model}</h3>
 <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
 Available
 </div>
 </div>
 <p className="text-gray-500 text-sm mb-6 line-clamp-2">A premium {bike.type} motorcycle from {bike.brand}.</p>
 
 <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-100">
 <div>
 <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Starting Price</p>
 <p className="text-2xl font-bold text-gray-900 flex items-center">
 <IndianRupee className="w-5 h-5 mr-0.5" />
 {bike.basePrice.toLocaleString('en-IN')}
 </p>
 </div>
 <div className="text-right">
 <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">Est. EMI</p>
 <p className="text-lg font-bold text-accent">
 ₹{Math.round(bike.basePrice * 0.03).toLocaleString('en-IN')}<span className="text-xs font-normal text-gray-500">/mo</span>
 </p>
 </div>
 </div>

 <div className="flex gap-3">
 <Link 
 to={`/bikes/${bike.id}`} 
 className="flex-1 text-center bg-[#D1DCE2] hover:bg-gray-100 text-gray-900 py-3.5 font-bold transition-colors"
 >
 View Details
 </Link>
 <Link 
 to={`/finance?bike=${bike.id}`} 
 className="w-14 h-14 bg-accent hover:bg-accent/90 text-white flex items-center justify-center transition-all group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] shrink-0"
 >
 <ArrowRight className="w-5 h-5" />
 </Link>
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 
 {filteredBikes.length === 0 && (
 <div className="text-center py-10 md:py-12 bg-white border border-gray-100 shadow-sm">
 <h3 className="text-2xl font-bold text-gray-900 mb-2">No bikes found</h3>
 <p className="text-gray-500">Try adjusting your search or filters.</p>
 </div>
 )}
 </div>
 </div>
 );
}
