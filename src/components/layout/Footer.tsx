import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
 return (
 <footer className="bg-[#04407E] text-white pt-20 pb-10 border-t border-white/5">
 <div className="container mx-auto px-4 md:px-6">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
 {/* Brand */}
 <div className="space-y-6">
 <Link to="/" className="flex items-center gap-2 group">
 <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
 <span className="font-bold text-2xl tracking-tight">
 Ritika Financial Corporation
 </span>
 </Link>
 <p className="text-white/60 text-sm leading-relaxed max-w-xs">
 Premium motorcycle financing solutions. Simple, transparent, and flexible options for your next ride.
 </p>
 <div className="flex gap-4">
 <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-white transition-colors text-xs font-bold">
 FB
 </a>
 <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-white transition-colors text-xs font-bold">
 TW
 </a>
 <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-white transition-colors text-xs font-bold">
 IG
 </a>
 <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-white transition-colors text-xs font-bold">
 LI
 </a>
 </div>
 </div>

 {/* Quick Links */}
 <div>
 <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
 <ul className="space-y-3">
 <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
 <li><Link to="/bikes" className="text-white/60 hover:text-white transition-colors">Browse Bikes</Link></li>
 <li><Link to="/emi-calculator" className="text-white/60 hover:text-white transition-colors">EMI Calculator</Link></li>
 <li><Link to="/finance" className="text-white/60 hover:text-white transition-colors">Finance Enquiry</Link></li>
 </ul>
 </div>

 {/* Support */}
 <div>
 <h4 className="text-lg font-semibold mb-6">Support</h4>
 <ul className="space-y-3">
 <li><Link to="/faqs" className="text-white/60 hover:text-white transition-colors">FAQs</Link></li>
 <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact Us</Link></li>
 <li><Link to="/login" className="text-white/60 hover:text-white transition-colors">Customer Login</Link></li>
 </ul>
 </div>

 {/* Contact */}
 <div>
 <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
 <ul className="space-y-4">
 <li className="flex items-start gap-3">
 <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
 <span className="text-white/60 text-sm">
 123 Finance Street, Business District, <br />
 Mumbai, Maharashtra 400001
 </span>
 </li>
 <li className="flex items-center gap-3">
 <Phone className="w-5 h-5 text-white shrink-0" />
 <span className="text-white/60 text-sm">1800-123-4567</span>
 </li>
 <li className="flex items-center gap-3">
 <Mail className="w-5 h-5 text-white shrink-0" />
 <span className="text-white/60 text-sm">support@ritikafinance.com</span>
 </li>
 </ul>
 </div>
 </div>

 <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
 <p className="text-white/40 text-sm text-center md:text-left">
 &copy; {new Date().getFullYear()} Ritika Financial Corporation. All rights reserved.
 </p>
 <div className="flex gap-6">
 <Link to="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</Link>
 <Link to="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms & Conditions</Link>
 </div>
 </div>
 </div>
 </footer>
 );
}
