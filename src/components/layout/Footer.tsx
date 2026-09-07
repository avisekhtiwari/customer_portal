import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Social Row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-800 pb-8 mb-8">
          <Link to="/" className="flex items-center gap-3 group mb-4 md:mb-0">
            <img src="/logo.jpeg" alt="Logo" className="w-12 h-12 rounded-full object-cover" />
            <span className="font-bold text-2xl tracking-tight text-white">
              Ritika Financial Corporation
            </span>
          </Link>
          
          <div className="flex gap-4">
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#25D366] transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#1877F2] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#1DA1F2] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#E4405F] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#0A66C2] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#768EA6] uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Home</Link></li>
              <li><Link to="/emi-calculator" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">EMI Calculator</Link></li>
              <li><Link to="/interest-rates" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Interest Rates</Link></li>
            </ul>
          </div>

          {/* Dealers & Staff */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#768EA6] uppercase tracking-widest">Dealers & Staff</h4>
            <ul className="space-y-2">
              <li><Link to="/dealers" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Our Dealers</Link></li>
              <li><Link to="/presence" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Our Presence</Link></li>
              <li><Link to="/staff" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Our Staff</Link></li>
              <li><Link to="/dealer-reviews" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Dealer Testimonials</Link></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#768EA6] uppercase tracking-widest">About Us</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Company Overview</Link></li>
              <li><Link to="/gallery" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Our Gallery</Link></li>
              <li><Link to="/goals" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Our Goals</Link></li>
              <li><Link to="/reviews" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Our Reviews</Link></li>
              <li><Link to="/stories" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Our Stories</Link></li>
              <li><Link to="/founders" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Our Founders</Link></li>
            </ul>
          </div>

          {/* Contact & Queries */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#768EA6] uppercase tracking-widest">Contact & Queries</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Contact Us</Link></li>
              <li><Link to="/submit-query" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Submit a Query</Link></li>
              <li><Link to="/query-status" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Check Query Reply</Link></li>
              <li><Link to="/purchase-bike" className="text-white text-sm font-bold uppercase tracking-wider hover:text-[#768EA6] transition-colors">Purchase a Bike</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Contact Info Footer Row */}
        <div className="bg-white/5 rounded-2xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#768EA6]/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#768EA6]" />
            </div>
            <div>
              <p className="text-[#768EA6] font-bold text-sm">Head Office</p>
              <p className="text-white text-sm">Ritika Towers, Cybercity, Gurugram</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:border-l md:border-gray-800 md:pl-6">
            <div className="w-12 h-12 rounded-full bg-[#768EA6]/20 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-[#768EA6]" />
            </div>
            <div>
              <p className="text-[#768EA6] font-bold text-sm">Helpline</p>
              <p className="text-white text-sm">1800-200-5555</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:border-l md:border-gray-800 md:pl-6">
            <div className="w-12 h-12 rounded-full bg-[#768EA6]/20 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#768EA6]" />
            </div>
            <div>
              <p className="text-[#768EA6] font-bold text-sm">Email Support</p>
              <p className="text-white text-sm">support@ritikafinancial.com</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Ritika Financial Corporation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/dealer-staff-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Dealer & Staff Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
