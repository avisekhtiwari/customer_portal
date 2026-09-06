import os

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/layout/Navbar.tsx"

new_content = """import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Calculator, User, MessageSquare, Menu, Bell, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const mobileNavLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'EMI', path: '/emi-calculator', icon: Calculator },
  { name: 'Dealers', path: '/dealers', icon: User },
  { name: 'Contact', path: '/contact', icon: MessageSquare },
  { name: 'Portal', path: '/portal', icon: Compass },
];

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [user, setUser] = useState<{name: string, initials: string} | null>(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowMobileNav(false);
      } else {
        setShowMobileNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const userData = localStorage.getItem('ritika_user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, lastScrollY]);

  // Close sidebar on navigation
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 flex flex-col font-sans shadow-sm">
        {/* Top White Bar */}
        <div className="bg-white flex justify-between items-center h-16 px-4 md:px-8">
          <div className="flex items-center space-x-4 md:space-x-6">
            <button 
              className="md:hidden text-gray-800 p-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center space-x-2 group shrink-0">
              <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 rounded-full" />
              <span className="font-extrabold text-[#04407E] text-xl md:text-2xl tracking-tighter">RITIKA</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-[#04407E] transition-colors relative">
                  <Bell className="w-6 h-6" />
                  <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="flex items-center space-x-3 bg-gray-50 py-1.5 px-1.5 pr-4 rounded-full border border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#04407E] to-[#032c57] flex items-center justify-center text-white font-bold text-sm">
                    {user.initials}
                  </div>
                  <span className="text-sm font-semibold text-gray-700 hidden md:block">{user.name}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login" className="text-sm font-bold text-[#04407E] hover:text-[#032c57] px-2 py-2 hidden md:block">Login</Link>
                <Link to="/portal" className="bg-black hover:bg-gray-800 text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors shadow-sm whitespace-nowrap">
                  Customer Portal
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Dark Nav Bar (Desktop Only) */}
        <div className="bg-gray-900 hidden md:block relative z-40 border-t border-gray-800">
          <nav className="flex justify-center space-x-8 text-sm font-bold py-3 px-4">
            
            <Link to="/" className="flex items-center text-white hover:text-[#dcb285] transition-colors py-2">
              Home
            </Link>
            <Link to="/emi-calculator" className="flex items-center text-white hover:text-[#dcb285] transition-colors py-2">
              EMI Calculator
            </Link>
            <Link to="/interest-rates" className="flex items-center text-white hover:text-[#dcb285] transition-colors py-2">
              Interest Rates
            </Link>

            {/* Dealers & Staff Dropdown Trigger */}
            <div 
              className="group relative"
              onMouseEnter={() => setActiveMegaMenu('dealers')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center text-white hover:text-[#dcb285] transition-colors py-2">
                Dealers & Staff <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              <AnimatePresence>
                {activeMegaMenu === 'dealers' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white text-black shadow-xl border-t-2 border-[#dcb285] rounded-b-xl overflow-hidden z-50"
                  >
                    <div className="flex flex-col py-2">
                      <Link to="/dealers" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Dealers</Link>
                      <Link to="/presence" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Presence</Link>
                      <Link to="/staff" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Staff</Link>
                      <Link to="/dealer-reviews" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Dealer Testimonials</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About Us Dropdown Trigger */}
            <div 
              className="group relative"
              onMouseEnter={() => setActiveMegaMenu('about')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center text-white hover:text-[#dcb285] transition-colors py-2">
                About Us <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              <AnimatePresence>
                {activeMegaMenu === 'about' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white text-black shadow-xl border-t-2 border-[#dcb285] rounded-b-xl overflow-hidden z-50"
                  >
                    <div className="flex flex-col py-2">
                      <Link to="/about" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Company Overview</Link>
                      <Link to="/gallery" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Gallery</Link>
                      <Link to="/goals" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Goals</Link>
                      <Link to="/reviews" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Reviews</Link>
                      <Link to="/stories" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Stories</Link>
                      <Link to="/founders" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Founders</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Dropdown Trigger */}
            <div 
              className="group relative"
              onMouseEnter={() => setActiveMegaMenu('contact')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center text-white hover:text-[#dcb285] transition-colors py-2">
                Contact & Queries <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              <AnimatePresence>
                {activeMegaMenu === 'contact' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-white text-black shadow-xl border-t-2 border-[#dcb285] rounded-b-xl overflow-hidden z-50"
                  >
                    <div className="flex flex-col py-2">
                      <Link to="/contact" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Contact Us</Link>
                      <Link to="/submit-query" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Submit a Query</Link>
                      <Link to="/query-status" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Check Query Reply</Link>
                      <Link to="/purchase-bike" className="px-6 py-3 text-sm font-bold hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Purchase a Bike</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar (Hamburger Menu) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[70] md:hidden shadow-2xl flex flex-col overflow-y-auto"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <span className="font-extrabold text-[#04407E] text-2xl tracking-tighter">RITIKA</span>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-black">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 py-4 px-4 space-y-1">
                <Link to="/" className="block px-4 py-3 font-bold text-gray-900 rounded-xl hover:bg-gray-50">Home</Link>
                <Link to="/emi-calculator" className="block px-4 py-3 font-bold text-gray-900 rounded-xl hover:bg-gray-50">EMI Calculator</Link>
                <Link to="/interest-rates" className="block px-4 py-3 font-bold text-gray-900 rounded-xl hover:bg-gray-50">Interest Rates</Link>
                
                <div className="py-2 mt-4 border-t border-gray-100">
                  <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Dealers & Staff</p>
                  <Link to="/dealers" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Dealers</Link>
                  <Link to="/presence" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Presence</Link>
                  <Link to="/staff" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Staff</Link>
                  <Link to="/dealer-reviews" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Dealer Testimonials</Link>
                </div>

                <div className="py-2 border-t border-gray-100">
                  <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">About Us</p>
                  <Link to="/about" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Company Overview</Link>
                  <Link to="/gallery" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Gallery</Link>
                  <Link to="/goals" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Goals</Link>
                  <Link to="/reviews" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Reviews</Link>
                  <Link to="/stories" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Stories</Link>
                  <Link to="/founders" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Founders</Link>
                </div>

                <div className="py-2 border-t border-gray-100 mb-8">
                  <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Contact & Queries</p>
                  <Link to="/contact" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Contact Us</Link>
                  <Link to="/submit-query" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Submit a Query</Link>
                  <Link to="/query-status" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Check Query Reply</Link>
                  <Link to="/purchase-bike" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Purchase a Bike</Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Premium Attached Bottom Navigation Bar (Mobile Only) */}
      <nav className={cn(
        "md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300", 
        showMobileNav ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="bg-white rounded-t-3xl border-t-2 border-[#dcb285] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] px-6 pt-3 pb-6 flex justify-between items-center relative">
          {mobileNavLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative z-10 flex flex-col items-center justify-center gap-1"
              >
                <div
                  className={cn(
                    "flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300",
                    isActive ? "bg-[#dcb285] text-black shadow-md scale-110" : "bg-transparent text-gray-400 hover:text-gray-900"
                  )}
                >
                  <link.icon className="w-5 h-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={cn("text-[10px] font-bold transition-colors", isActive ? "text-[#dcb285]" : "text-gray-400")}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
"""

with open(filepath, "w") as f:
    f.write(new_content)

print("Navbar rewrited successfully.")
