import os

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/layout/Footer.tsx"

footer_content = """import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#04407E] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-bold text-2xl tracking-tight text-[#dcb285]">
                Ritika Financial
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Premium motorcycle financing solutions. Simple, transparent, and flexible options for your next ride.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-700/20 text-blue-500 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#dcb285]">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/dealers" className="text-white/70 hover:text-white transition-colors">Our Dealers</Link></li>
              <li><Link to="/interest-rates" className="text-white/70 hover:text-white transition-colors">Interest Rates</Link></li>
              <li><Link to="/emi-calculator" className="text-white/70 hover:text-white transition-colors">EMI Calculator</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#dcb285]">Support & Policies</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/submit-query" className="text-white/70 hover:text-white transition-colors">Submit a Query</Link></li>
              <li><Link to="/privacy-policy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/dealer-staff-policy" className="text-white/70 hover:text-white transition-colors">Dealer & Staff Policies</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#dcb285]">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#dcb285] shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  Ritika Towers, Financial District, <br />
                  Cybercity, Gurugram 122002
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#dcb285] shrink-0" />
                <span className="text-white/70 text-sm">1800-200-5555</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#dcb285] shrink-0" />
                <span className="text-white/70 text-sm">support@ritikafinancial.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Ritika Financial Corporation. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/dealer-staff-policy" className="text-white/40 hover:text-white text-sm transition-colors">Dealer & Staff Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
"""

with open(filepath, "w") as f:
    f.write(footer_content)

print("Footer updated")
