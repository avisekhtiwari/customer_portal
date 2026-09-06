import re

hybrid_home = """import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle2, MapPin, Calculator, Wallet, Bike, Landmark, CreditCard, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeTab, setActiveTab] = useState('loans');

  useEffect(() => {
    // Add scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const products = {
    loans: [
      { title: 'Two Wheeler Loan', desc: 'Up to 100% on-road funding.', icon: Bike },
      { title: 'Personal Loan', desc: 'Instant cash up to ₹5 Lakhs.', icon: Wallet },
      { title: 'Commercial Vehicle', desc: 'Expand your transport business.', icon: CreditCard },
    ],
    invest: [
      { title: 'Fixed Deposit', desc: 'Earn up to 8.5% p.a. returns.', icon: Landmark },
      { title: 'Recurring Deposit', desc: 'Save monthly, earn big.', icon: Calculator },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-[#04407E] selection:text-white">
      {/* HERO SECTION (Jio Finance Style: Clean, White, Left Aligned) */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#04407E]/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-up translate-y-10 opacity-0 transition-all duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#04407E] rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-[#04407E] animate-pulse" />
                Trusted by Millions
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
                Finance your <br />
                <span className="text-[#04407E]">dreams today.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Experience seamless, digital-first financial services. From instant two-wheeler loans to high-return fixed deposits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/finance" className="px-8 py-4 bg-[#04407E] text-white rounded-full font-bold hover:bg-[#033060] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#04407E]/30">
                  Apply Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/emi-calculator" className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-bold hover:border-[#04407E] hover:text-[#04407E] transition-all flex items-center justify-center gap-2">
                  Calculate EMI
                </Link>
              </div>
            </div>
            <div className="relative reveal-up translate-y-10 opacity-0 transition-all duration-1000 delay-200">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#04407E]/20 to-transparent rounded-[3rem] transform rotate-3 scale-105" />
              <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80" alt="Motorcycle" className="relative z-10 rounded-[3rem] shadow-2xl object-cover h-[500px] w-full" />
              
              {/* Floating Widget */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Instant Approval</p>
                  <p className="font-bold text-gray-900">In 5 Minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION (Shriram Finance Style: Tabbed Grid) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal-up translate-y-10 opacity-0 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Our Offerings</h2>
            <p className="text-lg text-gray-600">Comprehensive financial solutions tailored for your growth and security.</p>
          </div>

          <div className="flex justify-center gap-4 mb-12 reveal-up translate-y-10 opacity-0 transition-all duration-1000 delay-100">
            <button onClick={() => setActiveTab('loans')} className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'loans' ? 'bg-[#04407E] text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>Loans</button>
            <button onClick={() => setActiveTab('invest')} className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'invest' ? 'bg-[#04407E] text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}>Investments</button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {products[activeTab as keyof typeof products].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#04407E] transition-all">
                    <item.icon className="w-8 h-8 text-[#04407E] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center text-[#04407E] font-bold group-hover:gap-2 transition-all">
                    Know More <ChevronRight className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PORTAL PREVIEW SECTION (Hybrid) */}
      <section className="py-24 bg-[#04407E] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-up translate-x-[-50px] opacity-0 transition-all duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                Customer Portal
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Your Finances, <br/><span className="text-blue-300">Simplified.</span></h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-md">
                Track your EMIs, download statements, and get exclusive pre-approved offers instantly through our secure digital portal.
              </p>
              <ul className="space-y-4 mb-10">
                {['Real-time EMI tracking', 'Instant document downloads', 'Pre-approved top-up loans'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-blue-300" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link to="/login" className="px-8 py-4 bg-white text-[#04407E] rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Access Portal <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative reveal-up translate-x-[50px] opacity-0 transition-all duration-1000 delay-200">
              <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl transform rotate-2">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#04407E]" />
                  </div>
                  <div>
                    <div className="h-4 w-32 bg-gray-200 rounded-full mb-2" />
                    <div className="h-3 w-20 bg-gray-100 rounded-full" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <div className="h-3 w-24 bg-gray-200 rounded-full mb-4" />
                    <div className="h-8 w-32 bg-gray-300 rounded-full" />
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl">
                    <div className="h-3 w-24 bg-gray-200 rounded-full mb-4" />
                    <div className="h-8 w-24 bg-gray-300 rounded-full" />
                  </div>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200" />
                        <div className="h-3 w-32 bg-gray-200 rounded-full" />
                      </div>
                      <div className="h-3 w-16 bg-gray-300 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK MAP LOCATOR */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100">
            <div className="reveal-up translate-y-10 opacity-0 transition-all duration-1000">
              <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Visit Our Office</h2>
              <p className="text-gray-600 mb-8 text-lg">Drop by our headquarters for an in-person consultation and quick finance processing.</p>
              <div className="flex items-start gap-4 mb-10">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-[#04407E] shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-2">Headquarters</h4>
                  <p className="text-gray-600 leading-relaxed">123 Finance Street, Business District,<br/>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <Link to="/contact" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="h-[400px] overflow-hidden rounded-[2rem] border-4 border-white shadow-xl reveal-up translate-y-10 opacity-0 transition-all duration-1000 delay-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995736186!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
"""

with open('src/pages/Home.tsx', 'w') as f:
    f.write(hybrid_home)
