import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PRELOAD_IMAGES = [
 "https://pngimg.com/d/motorcycle_PNG5344.png",
 "https://pngimg.com/d/motorcycle_PNG5342.png",
 "https://pngimg.com/d/motorcycle_PNG5341.png"
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
 const [phase, setPhase] = useState(0);

 useEffect(() => {
 // Preload heavy Hero images while the loader is active
 PRELOAD_IMAGES.forEach((src) => {
 const img = new Image();
 img.src = src;
 });

 // Phase 1: Hollow wheels roll in (0-1s)
 const t1 = setTimeout(() => setPhase(1), 1000);
 // Phase 2: Bike parts appear (1s-3s)
 const t2 = setTimeout(() => setPhase(2), 3000);
 // Phase 3: Move forward with smoke (3s-4.5s)
 const t3 = setTimeout(() => setPhase(3), 4500);
 // Phase 4: Complete
 const t4 = setTimeout(() => onComplete(), 5000);

 return () => {
 clearTimeout(t1);
 clearTimeout(t2);
 clearTimeout(t3);
 clearTimeout(t4);
 };
 }, [onComplete]);

 return (
 <motion.div 
 initial={{ opacity: 1 }}
 animate={{ opacity: phase === 3 ? 0 : 1 }}
 transition={{ duration: 0.5 }}
 className="fixed inset-0 z-[100] flex items-center justify-center bg-primary overflow-hidden"
 >
 <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
 
 <div className="relative w-[500px] h-64 flex items-center justify-center">
 
 {/* Speed Lines */}
 <AnimatePresence>
 {phase >= 2 && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="absolute inset-0 z-0 flex flex-col justify-center gap-4 overflow-hidden pointer-events-none"
 >
 {[1, 2, 3, 4, 5].map((i) => (
 <motion.div
 key={i}
 animate={{ x: ['100%', '-100%'] }}
 transition={{ duration: 0.15 + (i * 0.05), repeat: Infinity, ease: 'linear' }}
 className="h-[2px] bg-white/10 w-full"
 style={{ transform: `translateY(${(i - 3) * 25}px)` }}
 />
 ))}
 </motion.div>
 )}
 </AnimatePresence>

 <motion.div
 animate={{ 
 x: phase === 3 ? 1500 : 0,
 y: phase >= 2 && phase < 3 ? [0, -2, 0, 1, -1, 0] : 0, // Engine vibration
 rotate: phase === 3 ? -3 : 0 // Slight lift on takeoff
 }}
 transition={{ 
 x: { duration: 0.6, ease: "easeIn" },
 y: { duration: 0.1, repeat: Infinity },
 rotate: { duration: 0.3 }
 }}
 className="relative z-10 w-[400px] h-[200px]"
 >
 {/* SVG Canvas for Royal Enfield Style Bike */}
 <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
 
 {/* --- WHEELS (Hollow, roll in first) --- */}
 <motion.g
 initial={{ x: -600, opacity: 0 }}
 animate={{ x: 0, opacity: 1 }}
 transition={{ type: "spring", damping: 14, duration: 1 }}
 >
 {/* Rear Wheel (Hollow) */}
 <motion.g
 animate={{ rotate: phase >= 2 ? 360 : 360 }}
 transition={{ duration: phase >= 2 ? 0.2 : 1.5, repeat: Infinity, ease: "linear" }}
 style={{ transformOrigin: "80px 140px" }}
 >
 {/* Outer Tyre */}
 <circle cx="80" cy="140" r="38" fill="none" stroke="url(#metalDark)" strokeWidth="4" filter="url(#glow)" />
 {/* Inner Rim */}
 <circle cx="80" cy="140" r="30" fill="none" stroke="url(#metalLight)" strokeWidth="1.5" />
 {/* Brake Disc */}
 <circle cx="80" cy="140" r="15" fill="none" stroke="url(#metalLight)" strokeWidth="1" strokeDasharray="2 4" />
 <circle cx="80" cy="140" r="4" fill="#cbd5e1" />
 {/* Intricate Spokes */}
 {[...Array(12)].map((_, i) => (
 <line 
 key={i}
 x1="80" y1="110" 
 x2="80" y2="140" 
 stroke="url(#metalLight)" strokeWidth="1" 
 transform={`rotate(${i * 30} 80 140)`} 
 />
 ))}
 </motion.g>

 {/* Front Wheel (Hollow) */}
 <motion.g
 animate={{ rotate: phase >= 2 ? 360 : 360 }}
 transition={{ duration: phase >= 2 ? 0.2 : 1.5, repeat: Infinity, ease: "linear" }}
 style={{ transformOrigin: "320px 140px" }}
 >
 {/* Outer Tyre */}
 <circle cx="320" cy="140" r="38" fill="none" stroke="url(#metalDark)" strokeWidth="4" filter="url(#glow)" />
 {/* Inner Rim */}
 <circle cx="320" cy="140" r="30" fill="none" stroke="url(#metalLight)" strokeWidth="1.5" />
 {/* Brake Disc */}
 <circle cx="320" cy="140" r="15" fill="none" stroke="url(#metalLight)" strokeWidth="1" strokeDasharray="2 4" />
 <circle cx="320" cy="140" r="4" fill="#cbd5e1" />
 {/* Intricate Spokes */}
 {[...Array(12)].map((_, i) => (
 <line 
 key={`f${i}`}
 x1="320" y1="110" 
 x2="320" y2="140" 
 stroke="url(#metalLight)" strokeWidth="1" 
 transform={`rotate(${i * 30} 320 140)`} 
 />
 ))}
 </motion.g>
 </motion.g>

 {/* --- BIKE BODY PARTS (Blueprint assembly) --- */}
 
 {/* 1. Frame & Fenders (Technical) */}
 <motion.path
 d="M 80 102 C 110 90, 140 85, 170 135 L 260 135 L 280 85 M 42 140 A 38 38 0 0 1 118 140 M 282 140 A 38 38 0 0 1 358 140"
 fill="none"
 stroke="url(#metalLight)"
 strokeWidth="2"
 strokeLinecap="round"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
 transition={{ duration: 0.8, ease: "easeInOut" }}
 />

 {/* 2. Detailed Engine Block */}
 <motion.path
 d="M 175 95 L 215 95 L 225 135 L 165 135 Z M 180 105 L 210 105 M 180 115 L 210 115 M 180 125 L 210 125 M 195 95 L 195 135"
 fill={phase >= 2 ? "url(#metalDark)" : "none"}
 stroke="url(#metalLight)"
 strokeWidth="1.5"
 strokeLinejoin="round"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
 transition={{ pathLength: { duration: 0.6, delay: 0.3 }, fill: { duration: 0.4 } }}
 />

 {/* 3. Realistic Silencer/Exhaust */}
 <motion.path
 d="M 205 125 C 205 145, 185 148, 155 148 L 25 148 L 25 142 L 155 142"
 fill={phase >= 2 ? "url(#chrome)" : "none"}
 stroke="url(#chrome)"
 strokeWidth="2.5"
 strokeLinecap="round"
 strokeLinejoin="round"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
 transition={{ pathLength: { duration: 0.6, delay: 0.6 }, fill: { duration: 0.4 } }}
 />

 {/* 4. Sleek Teardrop Fuel Tank */}
 <motion.path
 d="M 165 82 C 165 65, 230 55, 255 65 C 265 69, 265 82, 255 82 L 165 82 Z"
 fill={phase >= 2 ? "url(#paintBlue)" : "none"}
 stroke="url(#paintBlue)"
 strokeWidth="2"
 strokeLinejoin="round"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
 transition={{ pathLength: { duration: 0.6, delay: 0.9 }, fill: { duration: 0.4 } }}
 />

 {/* 5. Sculpted Seat */}
 <motion.path
 d="M 105 82 L 165 82 C 165 77, 145 74, 125 74 L 105 74 Z"
 fill={phase >= 2 ? "#0f172a" : "none"}
 stroke="#334155"
 strokeWidth="2"
 strokeLinejoin="round"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
 transition={{ pathLength: { duration: 0.4, delay: 1.2 }, fill: { duration: 0.4 } }}
 />

 {/* 6. Front Fork & Handlebars */}
 <motion.path
 d="M 320 140 L 275 50 M 275 50 L 255 42 M 275 50 L 295 55"
 fill="none"
 stroke="url(#chrome)"
 strokeWidth="3"
 strokeLinecap="round"
 strokeLinejoin="round"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
 transition={{ duration: 0.5, delay: 1.5 }}
 />
 {/* 7. Suspension & Rear Mirror (Extra detail) */}
 <motion.path
 d="M 80 140 L 110 80 M 255 42 L 250 25 A 3 3 0 1 1 255 25"
 fill="none"
 stroke="url(#chrome)"
 strokeWidth="2"
 strokeDasharray="4 2"
 strokeLinecap="round"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: phase >= 1 ? 1 : 0, opacity: phase >= 1 ? 1 : 0 }}
 transition={{ duration: 0.5, delay: 1.6 }}
 />
 {/* Headlight */}
 <motion.path
 d="M 290 50 A 5 5 0 1 1 290 60 L 285 60 L 285 50 Z"
 fill={phase >= 2 ? "url(#chrome)" : "none"}
 stroke="url(#chrome)"
 strokeWidth="1.5"
 initial={{ opacity: 0 }}
 animate={{ opacity: phase >= 1 ? 1 : 0 }}
 transition={{ duration: 0.3, delay: 1.8 }}
 />
 {/* Light Beam */}
 <motion.path
 d="M 295 55 L 400 20 L 400 90 Z"
 fill="url(#lightBeam)"
 opacity={phase >= 2 ? 0.8 : 0}
 transition={{ duration: 0.4 }}
 style={{ mixBlendMode: 'screen' }}
 />
 
 <defs>
 <linearGradient id="metalLight" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="#cbd5e1" />
 <stop offset="50%" stopColor="#f8fafc" />
 <stop offset="100%" stopColor="#94a3b8" />
 </linearGradient>
 <linearGradient id="metalDark" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" stopColor="#475569" />
 <stop offset="50%" stopColor="#64748b" />
 <stop offset="100%" stopColor="#334155" />
 </linearGradient>
 <linearGradient id="chrome" x1="0%" y1="0%" x2="0%" y2="100%">
 <stop offset="0%" stopColor="#e2e8f0" />
 <stop offset="30%" stopColor="#ffffff" />
 <stop offset="50%" stopColor="#94a3b8" />
 <stop offset="100%" stopColor="#64748b" />
 </linearGradient>
 <linearGradient id="paintBlue" x1="0%" y1="0%" x2="0%" y2="100%">
 <stop offset="0%" stopColor="#60a5fa" />
 <stop offset="30%" stopColor="#3b82f6" />
 <stop offset="100%" stopColor="#1d4ed8" />
 </linearGradient>
 <linearGradient id="lightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
 <stop offset="0%" stopColor="#fef08a" stopOpacity="0.9" />
 <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
 </linearGradient>
 <filter id="glow">
 <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
 <feMerge>
 <feMergeNode in="coloredBlur"/>
 <feMergeNode in="SourceGraphic"/>
 </feMerge>
 </filter>
 </defs>
 </svg>

 {/* Smoke/Dust */}
 <AnimatePresence>
 {phase >= 2 && phase < 3 && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="absolute bottom-12 -left-8 flex items-center gap-1 z-0"
 >
 {[1, 2, 3, 4].map(i => (
 <motion.div 
 key={i}
 animate={{ 
 x: -50 * i, 
 y: -15 * i, 
 opacity: [0, 0.9, 0], 
 scale: [1, 2, 4] 
 }}
 transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
 className="w-8 h-8 bg-white/40 blur-xl"
 />
 ))}
 </motion.div>
 )}
 </AnimatePresence>
 </motion.div>
 </div>
 
 <div className="absolute bottom-20 text-center">
 <motion.p 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
 className="text-accent font-bold tracking-[0.3em] uppercase text-sm flex items-center justify-center gap-3"
 >
 <span className="w-2 h-2 bg-accent animate-pulse" />
 {phase === 0 ? 'Rolling In' : phase === 1 ? 'Assembling Legend' : 'Ride Free'}
 <span className="w-2 h-2 bg-accent animate-pulse" />
 </motion.p>
 </div>
 </motion.div>
 );
}
