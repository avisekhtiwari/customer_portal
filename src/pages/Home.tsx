import { useEffect, useRef } from 'react';

import { ArrowRight, CheckCircle2, Shield, Clock, IndianRupee, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroCarousel from '@/components/sections/HeroCarousel';
import { MOCK_BIKES } from '@/lib/mockData';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
 const cardsRef = useRef<HTMLDivElement>(null);
 const featuredRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 const ctx = gsap.context(() => {
 // Trust Cards Animation
 gsap.fromTo(".trust-card", 
 { y: 60, opacity: 0 },
 {
 y: 0,
 opacity: 1,
 duration: 0.8,
 stagger: 0.15,
 ease: "power3.out",
 scrollTrigger: {
 trigger: cardsRef.current,
 start: "top 80%",
 }
 });

 // Featured Bikes Animation
 gsap.fromTo(".featured-card", 
 { y: 80, opacity: 0 },
 {
 y: 0,
 opacity: 1,
 duration: 1,
 stagger: 0.2,
 ease: "power4.out",
 scrollTrigger: {
 trigger: featuredRef.current,
 start: "top 75%",
 }
 });
 // Section Reveal
 gsap.utils.toArray('.section-reveal').forEach((elem: any) => {
 gsap.fromTo(elem, 
 { y: 40, opacity: 0 },
 {
 y: 0,
 opacity: 1,
 duration: 1,
 ease: "power3.out",
 scrollTrigger: {
 trigger: elem,
 start: "top 85%",
 }
 });
 });

 // Image/Card Reveal
 gsap.utils.toArray('.image-reveal').forEach((elem: any) => {
 gsap.fromTo(elem, 
 { scale: 0.95, opacity: 0 },
 {
 scale: 1,
 opacity: 1,
 duration: 1.2,
 ease: "power3.out",
 scrollTrigger: {
 trigger: elem,
 start: "top 85%",
 }
 });
 });
 });

 return () => ctx.revert();
 }, []);

 return (
 <div className="w-full bg-background overflow-hidden">
 {/* HERO SECTION */}
 <HeroCarousel />

 {/* TRUST SECTION */}
 <section ref={cardsRef} className="py-20 bg-white border-b border-gray-100 relative z-10">
 <div className="container mx-auto px-4 md:px-6">
 <div className="text-center max-w-2xl mx-auto mb-16 section-reveal">
 <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent mb-2">Core Principles</p>
 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Why Choose Us?</h2>
 <p className="text-gray-600 text-lg">Experience the most seamless two-wheeler financing.</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {[
 { icon: Shield, title: "Transparent Finance", desc: "No hidden charges or surprise fees. Complete transparency." },
 { icon: Clock, title: "Instant Approval", desc: "Get your loan approved within 30 minutes of application." },
 { icon: IndianRupee, title: "Flexible EMIs", desc: "Customize your tenure and down payment to fit your budget." },
 { icon: CheckCircle2, title: "Minimal Docs", desc: "100% paperless digital onboarding process." }
 ].map((feature, i) => (
 <div key={i} className="trust-card flex flex-col p-8 bg-gray-50/50 border border-gray-100 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 transition-all duration-300">
 <div className="w-14 h-14 bg-white flex items-center justify-center text-accent mb-6 shadow-sm border border-gray-100">
 <feature.icon className="w-7 h-7" />
 </div>
 <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
 <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FEATURED BIKES (More Data/Cards) */}
 <section ref={featuredRef} className="py-12 md:py-24 bg-background-alt">
 <div className="container mx-auto px-4 md:px-6">
 <div className="flex justify-between items-end mb-12">
 <div className="section-reveal">
 <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent mb-2">Our Collection</p>
 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Featured Rides</h2>
 <p className="text-gray-600 text-lg">Top picks available with instant financing.</p>
 </div>
 <Link to="/bikes" className="hidden md:flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
 View All Catalogue <ArrowRight className="w-5 h-5" />
 </Link>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {MOCK_BIKES.slice(0, 3).map(bike => (
 <div key={bike.id} className="featured-card group bg-white p-4 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
 <div className="relative h-64 bg-gray-50 overflow-hidden mb-6">
 <img src={bike.image} alt={bike.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" />
 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-gray-900 shadow-sm">
 {bike.brand}
 </div>
 </div>
 <div className="px-4 pb-4">
 <h3 className="text-2xl font-bold text-gray-900 mb-2">{bike.model}</h3>
 <div className="flex justify-between items-center mb-6">
 <p className="text-gray-500 font-medium">Starting at</p>
 <p className="text-xl font-bold text-accent flex items-center">
 <IndianRupee className="w-5 h-5 mr-0.5" />
 {bike.basePrice.toLocaleString('en-IN')}
 </p>
 </div>
 <Link to={`/finance?bike=${bike.id}`} className="relative w-full group inline-flex items-center justify-center px-8 py-4 font-bold bg-transparent text-gray-900 transition-colors mt-4">
    <div className="absolute inset-0 border border-gray-900 -translate-x-[5px] -translate-y-[5px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
    <div className="absolute inset-0 border border-gray-900 translate-x-[5px] translate-y-[5px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
    <span className="relative z-10 flex items-center gap-2">Calculate Finance <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
 </Link>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* HOW IT WORKS */}
 <section className="py-12 md:py-24 bg-white overflow-hidden">
 <div className="container mx-auto px-4 md:px-6">
 <div className="text-center max-w-2xl mx-auto mb-20 section-reveal">
 <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent mb-2">The Process</p>
 <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">How It Works</h2>
 <p className="text-gray-600 text-lg">A simple 4-step process to get you on your dream ride faster.</p>
 </div>

 <div className="relative max-w-5xl mx-auto">
 <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
 
 <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
 {[
 { step: "01", title: "Choose Bike", desc: "Find your perfect ride from our catalogue." },
 { step: "02", title: "Plan EMI", desc: "Use calculator to estimate monthly payments." },
 { step: "03", title: "Apply", desc: "Submit basic details for finance processing." },
 { step: "04", title: "Ride Away", desc: "Get approved and collect your keys." }
 ].map((item, i) => (
 <div key={i} className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center relative group hover:-translate-y-2 transition-all duration-300">
 <div className="w-16 h-16 rounded-full bg-gray-50 text-gray-900 flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-accent group-hover:text-white transition-colors group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
 {item.step}
 </div>
 <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
 <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* PORTAL PREVIEW */}
 <section className="py-12 md:py-24 bg-[#04407E] text-white overflow-hidden relative">
 <div className="container mx-auto px-4 md:px-6 relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div className="order-2 lg:order-1 relative">
 <div className="absolute inset-0 bg-accent/20 blur-[100px] " />
 <div className="relative bg-white/5 border border-white/10 p-8 backdrop-blur-xl shadow-2xl image-reveal">
 <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
 <div className="flex items-center gap-4">
 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
 <Shield className="w-6 h-6 text-accent" />
 </div>
 <div>
 <div className="h-4 w-24 bg-white/20 rounded mb-2" />
 <div className="h-3 w-16 bg-white/10 rounded" />
 </div>
 </div>
 </div>
 <div className="grid grid-cols-2 gap-4 mb-8">
 <div className="bg-white/5 p-6 border border-white/5 hover:bg-white/10 transition-colors">
 <div className="h-3 w-20 bg-white/20 rounded mb-4" />
 <div className="h-8 w-32 bg-white/40 rounded" />
 </div>
 <div className="bg-white/5 p-6 border border-white/5 hover:bg-white/10 transition-colors">
 <div className="h-3 w-20 bg-white/20 rounded mb-4" />
 <div className="h-8 w-24 bg-white/40 rounded" />
 </div>
 </div>
 <div className="space-y-4">
 {[1, 2, 3].map((i) => (
 <div key={i} className="flex items-center justify-between bg-white/5 p-4 border border-white/5">
 <div className="flex items-center gap-4">
 <div className="w-10 h-10 rounded-full bg-white/10 " />
 <div className="h-3 w-24 bg-white/20 rounded" />
 </div>
 <div className="h-3 w-16 bg-white/20 rounded" />
 </div>
 ))}
 </div>
 </div>
 </div>
 
 <div className="order-1 lg:order-2 max-w-xl section-reveal">
 <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent mb-3">Customer Portal</p>
 <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Your Finance, <br/><span className="text-accent">In One Place.</span></h2>
 <p className="text-white/70 text-lg mb-8 leading-relaxed">
 Once financed, manage everything through our secure customer portal. Track your EMI schedule, view outstanding amounts, and access your loan documents anytime, anywhere.
 </p>
 <ul className="space-y-4 mb-10">
 {['Track EMI schedule and payments', 'Access secure loan documents', 'Submit payment proofs digitally'].map((feat, i) => (
 <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
 <CheckCircle2 className="w-5 h-5 text-accent" />
 {feat}
 </li>
 ))}
 </ul>
 <Link to="/login" className="relative group inline-flex items-center justify-center px-8 py-4 font-bold bg-transparent text-white transition-colors mt-4">
    <div className="absolute inset-0 border border-white -translate-x-[5px] -translate-y-[5px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
    <div className="absolute inset-0 border border-white translate-x-[5px] translate-y-[5px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
    <span className="relative z-10 flex items-center gap-2">Access Portal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* QUICK MAP LOCATOR */}
 <section className="py-12 md:py-24 bg-background-alt border-t border-gray-100">
 <div className="container mx-auto px-4 md:px-6">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
 <div className="section-reveal">
 <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent mb-2">Location</p>
 <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
 <p className="text-gray-600 mb-8">Drop by our headquarters for an in-person consultation and quick finance processing.</p>
 <div className="space-y-4 mb-8">
 <div className="flex items-start gap-4">
 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
 <MapPin className="w-6 h-6" />
 </div>
 <div>
 <h4 className="font-bold text-gray-900">Headquarters</h4>
 <p className="text-gray-600 mt-1">123 Finance Street, Business District,<br/>Mumbai, Maharashtra 400001</p>
 </div>
 </div>
 </div>
 <Link to="/contact" className="relative group inline-flex items-center justify-center px-8 py-4 font-bold bg-transparent text-gray-900 transition-colors mt-4">
    <div className="absolute inset-0 border border-gray-900 -translate-x-[5px] -translate-y-[5px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
    <div className="absolute inset-0 border border-gray-900 translate-x-[5px] translate-y-[5px] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
    <span className="relative z-10 flex items-center gap-2">Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
 </Link>
 </div>
 <div className="h-[400px] overflow-hidden border border-gray-100 shadow-inner image-reveal">
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

