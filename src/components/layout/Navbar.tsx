import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home, Compass, Calculator, User, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navLinks = [
 { name: 'Home', path: '/' },
 { name: 'About', path: '/about' },
 { name: 'Bikes', path: '/bikes' },
 { name: 'EMI Calculator', path: '/emi-calculator' },
 { name: 'Finance', path: '/finance' },
 { name: 'Contact', path: '/contact' },
];

const mobileNavLinks = [
 { name: 'Home', path: '/', icon: Home },
 { name: 'Bikes', path: '/bikes', icon: Compass },
 { name: 'EMI', path: '/emi-calculator', icon: Calculator },
 { name: 'Contact', path: '/contact', icon: MessageSquare },
 { name: 'Login', path: '/login', icon: User },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
 const [showMobileNav, setShowMobileNav] = useState(true);
 const [lastScrollY, setLastScrollY] = useState(0);
 const [user, setUser] = useState<{name: string, initials: string} | null>(null);
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
 setIsScrolled(currentScrollY > 20);
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

 const navBg = isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-md py-4' : ('bg-white py-4 shadow-sm');

 return (
 <>
 {/* Top Header (Desktop & Mobile Branding) */}
 <header className={cn('fixed top-0 w-full z-50 transition-all duration-300 ease-in-out', navBg)}>
 <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
 <Link to="/" className="flex items-center gap-2 group">
 <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 rounded-full object-cover group-hover:scale-105 transition-transform shadow-md" />
 <span className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight text-[#04407E]">
 Ritika Financial Corporation
 </span>
 </Link>

 {/* Desktop Nav */}
 <nav className="hidden md:flex items-center gap-8">
 {navLinks.map((link) => (
 <Link
 key={link.name}
 to={link.path}
 className={cn(
 'text-sm font-medium transition-colors hover:text-accent relative py-1',
 location.pathname === link.path ? 'text-accent' : 'text-[#04407E]/80'
 )}
 >
 {link.name}
 {location.pathname === link.path && (
 <motion.div
 layoutId="navbar-indicator"
 className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
 initial={false}
 transition={{ type: 'spring', stiffness: 500, damping: 30 }}
 />
 )}
 </Link>
 ))}
 </nav>

 <div className="hidden md:flex items-center">
 {user ? (
 <Link
 to="/portal/dashboard"
 className="flex items-center gap-2 rounded-full bg-accent/20 hover:bg-accent/30 text-[#04407E] px-6 py-2.5 text-sm font-medium transition-colors border border-accent/30"
 >
 {user.name} Dashboard
 <ChevronRight className="w-4 h-4" />
 </Link>
 ) : (
 <Link
 to="/login"
 className="flex items-center gap-2 rounded-full bg-gray-200 hover:bg-white/20 text-[#04407E] px-6 py-2.5 text-sm font-medium transition-colors border border-gray-200"
 >
 Customer Login
 <ChevronRight className="w-4 h-4" />
 </Link>
 )}
 </div>
 </div>
 </header>

 {/* Mobile Bottom Navigation Bar */}
 <nav className={cn("md:hidden fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm z-50 transition-all duration-300", showMobileNav ? "bottom-6 opacity-100" : "-bottom-24 opacity-0")}>
 <div className="bg-white/90 backdrop-blur-2xl rounded-full border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-2 flex justify-between items-center relative">
 {mobileNavLinks.map((link) => {
 const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
 
 return (
 <Link
 key={link.name}
 to={link.path}
 className="relative z-10 flex items-center justify-center h-12 w-12"
 >
 <motion.div
 layout
 className={cn(
 "flex items-center justify-center h-full w-full transition-colors duration-300",
 isActive ? "text-white" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"
 )}
 >
 {/* Background pill for active state */}
 {isActive && (
 <motion.div
 layoutId="active-pill"
 className="absolute inset-0 bg-[#04407E] shadow-md rounded-full"
 transition={{ type: "spring", stiffness: 400, damping: 30 }}
 style={{ zIndex: -1 }}
 />
 )}
 
 <link.icon 
 className="w-5 h-5 shrink-0 relative z-10" 
 strokeWidth={isActive ? 2.5 : 2} 
 />
 </motion.div>
 </Link>
 );
 })}
 </div>
 </nav>
 </>
 );
}
