import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Shield, Settings, Zap, IndianRupee, ArrowRight } from 'lucide-react';
import { MOCK_BIKES } from '@/lib/mockData';
import { motion } from 'framer-motion';

export default function BikeDetail() {
 const { id } = useParams();
 const bike = MOCK_BIKES.find(b => b.id === id);

 if (!bike) {
 return (
 <div className="pt-32 pb-20 min-h-screen text-center">
 <h1 className="text-3xl font-bold mb-4">Bike not found</h1>
 <Link to="/bikes" className="text-accent hover:underline">Back to Catalogue</Link>
 </div>
 );
 }

 return (
 <div className="pt-24 pb-20 min-h-screen bg-background-alt">
 <div className="container mx-auto px-4 md:px-6">
 
 <Link to="/bikes" className="inline-flex items-center gap-2 text-gray-500 hover:text-accent font-medium mb-8 transition-colors">
 <ArrowLeft className="w-4 h-4" /> Back to Catalogue
 </Link>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
 
 {/* Image Gallery */}
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6 }}
 className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 flex items-center justify-center relative shadow-sm hover:shadow-2xl transition-shadow duration-500"
 >
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100/50 via-white to-white " />
 <img 
 src={bike.image} 
 alt={bike.model} 
 className="w-full max-w-lg h-auto object-contain relative z-10 drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] mix-blend-multiply hover:scale-105 transition-transform duration-700"
 />
 <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 font-bold text-gray-900 text-sm shadow-sm z-20 border border-gray-100">
 {bike.brand}
 </div>
 </motion.div>

 {/* Details */}
 <motion.div
 initial={{ opacity: 0, x: 30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="flex flex-col justify-center"
 >
 <div className="mb-8">
 <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">{bike.model}</h1>
 <p className="text-xl text-gray-500 leading-relaxed">Experience the thrill of the {bike.brand} {bike.model}. A premium {bike.type} motorcycle ready for the road.</p>
 </div>

 <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-10">
 <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Ex-Showroom Price</p>
 <h2 className="text-4xl font-black text-gray-900 flex items-center mb-6">
 <IndianRupee className="w-8 h-8 mr-1" />
 {bike.basePrice.toLocaleString('en-IN')}
 </h2>
 
 <Link 
 to={`/finance?bike=${bike.id}`} 
 className="w-full rounded-full bg-accent hover:bg-accent/90 text-white py-5 font-bold transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] text-lg"
 >
 Apply for Finance
 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>

 {/* Key Specs */}
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
 {[
 { icon: Zap, label: "Engine", value: bike.variants[0]?.engine || 'N/A' },
 { icon: Settings, label: "Type", value: bike.type },
 { icon: Shield, label: "Mileage", value: bike.variants[0]?.mileage || 'N/A' },
 { icon: CheckCircle2, label: "Weight", value: bike.variants[0]?.weight || 'N/A' }
 ].map((spec, i) => (
 <div key={i} className="bg-white p-5 border border-gray-100 text-center hover:-translate-y-1 transition-transform">
 <div className="w-10 h-10 rounded-full bg-[#D1DCE2] flex items-center justify-center mx-auto text-accent mb-3">
 <spec.icon className="w-5 h-5" />
 </div>
 <p className="text-gray-900 font-bold mb-1">{spec.value}</p>
 <p className="text-xs text-gray-500 font-medium">{spec.label}</p>
 </div>
 ))}
 </div>

 {/* Variants */}
 <div className="mt-10">
 <h3 className="text-xl font-bold text-gray-900 mb-6">Available Variants</h3>
 <div className="space-y-4">
 {bike.variants.map((variant, i) => (
 <div key={i} className="flex justify-between items-center p-5 border border-gray-100 bg-white hover:border-accent hover:shadow-md transition-all cursor-pointer group">
 <span className="font-bold text-gray-900 group-hover:text-accent transition-colors">{variant.name}</span>
 <span className="font-bold text-gray-900 flex items-center">
 <IndianRupee className="w-5 h-5 mr-0.5" />
 {variant.price.toLocaleString('en-IN')}
 </span>
 </div>
 ))}
 </div>
 </div>

 </motion.div>
 </div>
 </div>
 </div>
 );
}
