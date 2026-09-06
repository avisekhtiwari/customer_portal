import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowRight as ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const slides = [
 {
 id: 1,
 title: "Your Ride.",
 typingText: ["Our Finance.", "Your Freedom.", "Fast Approval."],
 desc: "Simple, transparent and flexible finance options for your next bike. Get on the road faster with Ritika Finance.",
 image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80", 
 emi: "₹4,250",
 name: "KTM Duke 390"
 },
 {
 id: 2,
 title: "Classic Spirit.",
 typingText: ["Modern Soul.", "Timeless Design.", "Easy EMIs."],
 desc: "Bring home the legend with zero down payment options and instant approval on your loan.",
 image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=80", 
 emi: "₹3,150",
 name: "Cruiser"
 },
 {
 id: 3,
 title: "Unleash The",
 typingText: ["Dark Warrior.", "City Thrill.", "Performance."],
 desc: "Experience the thrill of the streets with our lowest interest rates starting at just 8.5% p.a.",
 image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=800&auto=format&fit=crop&q=80", 
 emi: "₹2,800",
 name: "Sport Edition"
 }
];

export default function HeroCarousel() {
 const [current, setCurrent] = useState(0);
 const [direction, setDirection] = useState(1);
 const [isAutoPlaying, setIsAutoPlaying] = useState(true);

 useEffect(() => {
 if (!isAutoPlaying) return;
 const timer = setInterval(() => {
 setDirection(1);
 setCurrent((prev) => (prev + 1) % slides.length);
 }, 6000);
 return () => clearInterval(timer);
 }, [isAutoPlaying]);

 const handleNext = () => {
 setIsAutoPlaying(false);
 setDirection(1);
 setCurrent((prev) => (prev + 1) % slides.length);
 };

 const handlePrev = () => {
 setIsAutoPlaying(false);
 setDirection(-1);
 setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
 };

 const slideVariants: any = {
 initial: (dir: number) => ({
 opacity: 0,
 x: dir > 0 ? 50 : -50,
 scale: 0.95
 }),
 animate: {
 opacity: 1,
 x: 0,
 scale: 1,
 transition: {
 duration: 0.8,
 ease: "easeInOut"
 }
 },
 exit: (dir: number) => ({
 opacity: 0,
 x: dir > 0 ? -50 : 50,
 scale: 0.95,
 transition: {
 duration: 0.8,
 ease: "easeInOut"
 }
 })
 };

 return (
 <section className="relative min-h-[90vh] flex items-center bg-[#04407E] overflow-hidden pt-16">
 {/* Full Background Image Carousel */}
 <div className="absolute inset-0 pointer-events-none z-0">
 <AnimatePresence custom={direction} mode="wait">
 <motion.div
 key={current}
 custom={direction}
 variants={slideVariants}
 initial="initial"
 animate="animate"
 exit="exit"
 className="absolute inset-0"
 >
 <img 
 src={slides[current].image} 
 alt={slides[current].name} 
 className="absolute inset-0 w-full h-full object-cover opacity-60"
 />
 </motion.div>
 </AnimatePresence>
 <div className="absolute inset-0 bg-gradient-to-t from-[#04407E] via-[#04407E]/80 to-transparent" />
 <div className="absolute inset-0 bg-gradient-to-r from-[#04407E] via-[#04407E]/60 to-transparent" />
 </div>

 <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full h-full flex flex-col justify-center">
 <div className="max-w-3xl flex flex-col justify-center min-h-[60vh]">
 
 <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.22em] mb-6 w-max backdrop-blur-md">
 <span className="w-2 h-2 bg-accent animate-pulse" />
 Premium Bike Financing
 </div>
 
 <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 h-auto md:h-[180px]">
 {slides[current].title} <br />
 <span className="text-white inline-block min-w-[20px]">
 <Typewriter
 key={current} // Retrigger typing on slide change
 words={slides[current].typingText}
 loop={0}
 cursor
 cursorStyle='|'
 typeSpeed={70}
 deleteSpeed={50}
 delaySpeed={1500}
 />
 </span>
 </h1>
 
 <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-xl leading-relaxed">
 {slides[current].desc}
 </p>
 
 <div className="flex flex-col sm:flex-row gap-6 mt-4">
 <Link to="/bikes" className="relative group inline-flex items-center justify-center px-8 py-4 font-bold bg-transparent text-white transition-colors">
 <div className="absolute inset-0 border border-white -translate-x-[5px] -translate-y-[5px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
 <div className="absolute inset-0 border border-white translate-x-[5px] translate-y-[5px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
 <span className="relative z-10 flex items-center gap-2">Explore Bikes <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
 </Link>
 <Link to="/emi-calculator" className="relative group inline-flex items-center justify-center px-8 py-4 font-bold bg-transparent text-white transition-colors">
 <div className="absolute inset-0 border border-white/50 -translate-x-[5px] -translate-y-[5px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
 <div className="absolute inset-0 border border-white/50 translate-x-[5px] translate-y-[5px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
 <span className="relative z-10 flex items-center gap-2">Calculate EMI</span>
 </Link>
 </div>
 </div>

 {/* Floating EMI Badge */}
 <AnimatePresence mode="wait">
 <motion.div
 key={`badge-${current}`}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 transition={{ duration: 0.5, delay: 0.4 }}
 className="absolute bottom-10 right-4 md:right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-2xl pointer-events-auto max-w-[280px]"
 >
 <p className="text-white/70 text-xs font-bold uppercase tracking-[0.22em] mb-2">Estimated EMI</p>
 <p className="text-4xl font-bold text-white">{slides[current].emi}<span className="text-base text-white/50 font-normal">/mo</span></p>
 </motion.div>
 </AnimatePresence>
 </div>

 <div className="absolute bottom-10 left-6 md:left-12 lg:left-20 z-30 flex flex-col md:flex-row md:items-center gap-6">
 <div className="flex gap-2">
 <button 
 onClick={handlePrev}
 className="w-12 h-12 border border-white/20 flex items-center justify-center text-[#04407E] hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm group shadow-lg"
 >
 <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
 </button>
 <button 
 onClick={handleNext}
 className="w-12 h-12 border border-white bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#04407E] transition-all backdrop-blur-sm group shadow-[0_0_15px_rgba(255,255,255,0.4)]"
 >
 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
 </button>
 </div>

 <div className="flex gap-3">
 {slides.map((_, idx) => (
 <button
 key={idx}
 onClick={() => {
 setIsAutoPlaying(false);
 setDirection(idx > current ? 1 : -1);
 setCurrent(idx);
 }}
 className={`w-12 h-1.5 transition-all duration-300 ${idx === current ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/20 hover:bg-white/40'}`}
 aria-label={`Go to slide ${idx + 1}`}
 />
 ))}
 </div>
 </div>
 </section>
 );
}
