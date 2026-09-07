import { useState, useEffect } from 'react';
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isPortal = location.pathname.startsWith('/portal');
  if (isPortal) return null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col shadow-md">
        {/* Top White Bar */}
        <div className="bg-white flex items-center justify-between px-4 md:px-8 h-20">
          
          {/* Left: Hamburger & Logo */}
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              className="text-black p-1 hover:bg-gray-100 rounded transition"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm" />
              <div className="hidden md:flex flex-col">
                <span className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900 leading-none">
                  RITIKA
                </span>
                <span className="font-bold text-[10px] md:text-xs text-white uppercase tracking-wider mt-0.5 bg-[#768EA6] px-1 inline-block w-max">
                  Financial Corporation
                </span>
              </div>
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/portal" className="hidden md:flex items-center text-sm font-bold text-gray-700 hover:text-gray-900 gap-1">
              Customer Portal
            </Link>
            
            <button className="relative hidden md:block text-gray-700 hover:text-black transition">
              <Bell className="w-5 h-5" strokeWidth={2} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#768EA6] rounded-full border-2 border-white"></span>
            </button>

            <Link 
              to="/login" 
              className="flex items-center gap-2 bg-[#768EA6] hover:bg-[#7C91A6] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              <User className="w-4 h-4" strokeWidth={2.5} />
              <span className="hidden md:inline">Register / Login</span>
              <span className="md:hidden">Login</span>
            </Link>
          </div>
        </div>

        {/* Bottom Dark Nav Bar (Desktop Only) */}
        <div className="bg-black hidden md:block relative z-40">
          <nav className="flex justify-center space-x-10 text-sm font-bold uppercase tracking-wider py-3.5 px-4 max-w-7xl mx-auto">
            
            <Link to="/" className="flex items-center text-gray-200 hover:text-[#768EA6] transition-colors py-2">
              Home
            </Link>
            <Link to="/emi-calculator" className="flex items-center text-gray-200 hover:text-[#768EA6] transition-colors py-2">
              EMI Calculator
            </Link>
            <Link to="/interest-rates" className="flex items-center text-gray-200 hover:text-[#768EA6] transition-colors py-2">
              Interest Rates
            </Link>

            {/* Dealers & Staff Dropdown Trigger */}
            <div 
              className="group relative"
              onMouseEnter={() => setActiveMegaMenu('dealers')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <Link to="/dealers" className="flex items-center text-gray-200 hover:text-[#768EA6] transition-colors py-2">
                Dealers & Staff <ChevronDown className="w-4 h-4 ml-1.5 opacity-70" />
              </Link>

              <AnimatePresence>
                {activeMegaMenu === 'dealers' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-0 w-56 bg-white text-black shadow-xl border-t-2 border-[#768EA6] rounded-b-xl overflow-hidden z-50"
                  >
                    <div className="flex flex-col py-2">
                      <Link to="/dealers" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Dealers</Link>
                      <Link to="/presence" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Presence</Link>
                      <Link to="/staff" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Staff</Link>
                      <Link to="/dealer-reviews" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Dealer Testimonials</Link>
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
              <Link to="/about" className="flex items-center text-gray-200 hover:text-[#768EA6] transition-colors py-2">
                About Us <ChevronDown className="w-4 h-4 ml-1.5 opacity-70" />
              </Link>

              <AnimatePresence>
                {activeMegaMenu === 'about' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-0 w-64 bg-white text-black shadow-xl border-t-2 border-[#768EA6] rounded-b-xl overflow-hidden z-50"
                  >
                    <div className="flex flex-col py-2">
                      <Link to="/about" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Company Overview</Link>
                      <Link to="/gallery" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Gallery</Link>
                      <Link to="/goals" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Goals</Link>
                      <Link to="/reviews" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Reviews</Link>
                      <Link to="/stories" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Stories</Link>
                      <Link to="/founders" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Our Founders</Link>
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
              <Link to="/contact" className="flex items-center text-gray-200 hover:text-[#768EA6] transition-colors py-2">
                Contact & Queries <ChevronDown className="w-4 h-4 ml-1.5 opacity-70" />
              </Link>

              <AnimatePresence>
                {activeMegaMenu === 'contact' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-0 w-56 bg-white text-black shadow-xl border-t-2 border-[#768EA6] rounded-b-xl overflow-hidden z-50"
                  >
                    <div className="flex flex-col py-2">
                      <Link to="/contact" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Contact Us</Link>
                      <Link to="/submit-query" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Submit a Query</Link>
                      <Link to="/query-status" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Check Query Reply</Link>
                      <Link to="/purchase-bike" className="px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-yellow-50 hover:text-[#9e7146] transition-colors border-b border-gray-100 last:border-0">Purchase a Bike</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content from going under the fixed header */}
      <div className="h-20 md:h-[130px]"></div>

      {/* Mobile Sidebar (Hamburger Menu) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[300px] bg-white z-[70] shadow-[5px_0_15px_rgba(0,0,0,0.1)] flex flex-col"
            >
              {/* Header */}
              <div className="p-4 flex items-center gap-4 border-b border-gray-200 bg-white">
                <button onClick={() => setIsSidebarOpen(false)} className="p-1 text-gray-800 hover:text-black">
                  <X className="w-7 h-7" strokeWidth={1.5} />
                </button>
                <div className="flex flex-col items-start ml-2">
                  <span className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900 leading-none">
                    RITIKA
                  </span>
                  <span className="font-bold text-[9px] md:text-[10px] text-white uppercase tracking-wider mt-0.5 bg-[#768EA6] px-1 py-0.5 inline-block w-max">
                    Financial Corporation
                  </span>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex-1 overflow-y-auto pb-24 scrollbar-thin scrollbar-thumb-yellow-400 bg-white">
                <div className="flex flex-col">
                  
                  <div className="border-b border-gray-100">
                    <Link onClick={() => setIsSidebarOpen(false)} to="/" className="w-full flex items-center p-4 hover:bg-[#D1DCE2] transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#768EA6] rounded-sm w-3 h-3 z-0 opacity-80 group-hover:opacity-100"></div>
                          <Home className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[13px] font-bold uppercase tracking-wider text-gray-800 group-hover:text-black">Home</span>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="border-b border-gray-100">
                    <Link onClick={() => setIsSidebarOpen(false)} to="/emi-calculator" className="w-full flex items-center p-4 hover:bg-[#D1DCE2] transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#768EA6] rounded-sm w-3 h-3 z-0 opacity-80 group-hover:opacity-100"></div>
                          <Calculator className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[13px] font-bold uppercase tracking-wider text-gray-800 group-hover:text-black">EMI Calculator</span>
                      </div>
                    </Link>
                  </div>

                  <div className="border-b border-gray-100">
                    <Link onClick={() => setIsSidebarOpen(false)} to="/interest-rates" className="w-full flex items-center p-4 hover:bg-[#D1DCE2] transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#768EA6] rounded-sm w-3 h-3 z-0 opacity-80 group-hover:opacity-100"></div>
                          <Compass className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[13px] font-bold uppercase tracking-wider text-gray-800 group-hover:text-black">Interest Rates</span>
                      </div>
                    </Link>
                  </div>

                  {/* Expandable: Dealers & Staff */}
                  <div className="border-b border-gray-100">
                    <div className="w-full flex items-center justify-between p-4 bg-white cursor-default">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#768EA6] rounded-sm w-3 h-3 z-0 opacity-80"></div>
                          <User className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[13px] font-bold uppercase tracking-wider text-gray-800">Dealers & Staff</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                    </div>
                    <div className="bg-[#D1DCE2]/50 pl-[3.25rem] py-2 flex flex-col">
                      <Link onClick={() => setIsSidebarOpen(false)} to="/dealers" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Our Dealers</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/presence" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Our Presence</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/staff" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Our Staff</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/dealer-reviews" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Dealer Testimonials</Link>
                    </div>
                  </div>

                  {/* Expandable: About Us */}
                  <div className="border-b border-gray-100">
                    <div className="w-full flex items-center justify-between p-4 bg-white cursor-default">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#768EA6] rounded-sm w-3 h-3 z-0 opacity-80"></div>
                          <Bell className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[13px] font-bold uppercase tracking-wider text-gray-800">About Us</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                    </div>
                    <div className="bg-[#D1DCE2]/50 pl-[3.25rem] py-2 flex flex-col">
                      <Link onClick={() => setIsSidebarOpen(false)} to="/about" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Company Overview</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/gallery" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Our Gallery</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/goals" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Our Goals</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/reviews" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Our Reviews</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/stories" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Our Stories</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/founders" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Our Founders</Link>
                    </div>
                  </div>

                  {/* Expandable: Contact */}
                  <div className="border-b border-gray-100">
                    <div className="w-full flex items-center justify-between p-4 bg-white cursor-default">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#768EA6] rounded-sm w-3 h-3 z-0 opacity-80"></div>
                          <MessageSquare className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[13px] font-bold uppercase tracking-wider text-gray-800">Contact & Queries</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                    </div>
                    <div className="bg-[#D1DCE2]/50 pl-[3.25rem] py-2 flex flex-col">
                      <Link onClick={() => setIsSidebarOpen(false)} to="/contact" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Contact Us</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/submit-query" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Submit a Query</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/query-status" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Check Query Reply</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/purchase-bike" className="py-2.5 text-[12px] font-bold uppercase tracking-wider text-gray-600 hover:text-black">Purchase a Bike</Link>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Yellow Right Border mimicking scrollbar */}
              <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-[#768EA6] pointer-events-none z-20"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Premium Attached Bottom Navigation Bar (Mobile Only) */}
      <nav className={cn(
        "md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300", 
        showMobileNav ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="bg-white rounded-t-3xl border-t-2 border-[#768EA6] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] px-6 pt-3 pb-6 flex justify-between items-center relative">
          {mobileNavLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative z-10 flex flex-col items-center justify-center gap-1 w-14"
              >
                <div
                  className={cn(
                    "flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300",
                    isActive ? "bg-[#768EA6] text-white shadow-md scale-110" : "bg-transparent text-gray-400 hover:text-gray-900"
                  )}
                >
                  <link.icon className="w-5 h-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={cn("text-[9px] font-bold uppercase tracking-wider transition-colors text-center w-full truncate", isActive ? "text-[#768EA6]" : "text-gray-400")}>
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
