import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  { title: "Two-Wheeler Loans", desc: "Finance your dream bike or scooter with our hassle-free, low-interest loans.", icon: "🏍️", button: "Apply Now", path: "/loans" },
  { title: "EMI Calculator", desc: "Easily calculate your monthly payments and plan your finances in advance.", icon: "🧮", button: "Calculate", path: "/emi-calculator" },
  { title: "Instant Disbursal", desc: "Get your loan amount transferred instantly with our fast-track approval process.", icon: "⚡", button: "Learn More", path: "/loans" },
  { title: "Vehicle Insurance", desc: "Protect your new ride with comprehensive two-wheeler insurance plans.", icon: "🛡️", button: "View Plans", path: "/insurance" },
  { title: "Top-Up Loans", desc: "Get additional funds on your existing loan for upgrades or accessories.", icon: "💰", button: "Explore", path: "/top-up" },
  { title: "EV Financing", desc: "Special interest rates and benefits for electric two-wheeler purchases.", icon: "🔋", button: "Go Green", path: "/loans" },
  { title: "Accessories Finance", desc: "Finance riding gears, helmets, and vehicle modifications effortlessly.", icon: "🪖", button: "Add Gear", path: "/loans" },
  { title: "Refinancing Options", desc: "Transfer your existing loan to us and enjoy lower interest rates.", icon: "🔄", button: "Refinance", path: "/refinancing" },
  { title: "Premium Bike Loans", desc: "Exclusive financing options for superbikes and premium motorcycles.", icon: "🏁", button: "Ride Premium", path: "/loans" },
  { title: "Credit Score Check", desc: "Check your eligibility and credit score for free in just a few clicks.", icon: "📊", button: "Check Now", path: "/portal" },
  { title: "Pre-approved Offers", desc: "Special tailored loan offers exclusively available for existing customers.", icon: "🎁", button: "Check Offers", path: "/portal/offers" },
  { title: "Loan Status Tracking", desc: "Track your loan application and disbursement status in real-time.", icon: "📱", button: "Track Now", path: "/portal" }
];

export default function ServicesCarousel() {
  const [currentCardSlide, setCurrentCardSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxCardIndex = Math.max(0, cards.length - cardsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCardSlide((prev) => {
        const next = prev + cardsPerView;
        return next > maxCardIndex ? 0 : next;
      });
    }, 6000); // Slower interval
    return () => clearInterval(timer);
  }, [cardsPerView, maxCardIndex]);

  const nextCardSlide = () => {
    setCurrentCardSlide((prev) => {
      const next = prev + cardsPerView;
      return next > maxCardIndex ? 0 : next;
    });
  };
  
  const prevCardSlide = () => {
    setCurrentCardSlide((prev) => {
      const next = prev - cardsPerView;
      return next < 0 ? maxCardIndex - (maxCardIndex % cardsPerView) : next;
    });
  };

  const cardGroups = [];
  for (let i = 0; i < cards.length; i += cardsPerView) {
    cardGroups.push(cards.slice(i, i + cardsPerView));
  }
  
  const totalGroups = cardGroups.length;
  const currentGroupIndex = Math.floor(currentCardSlide / cardsPerView);

  return (
    <section className="py-12 md:py-20 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#04407E] uppercase tracking-wider text-center md:text-left">
            Explore Our Services
          </h2>
          <div className="flex space-x-3">
            <button 
              onClick={prevCardSlide}
              className="p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[#dcb285] hover:text-white transition shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextCardSlide}
              className="p-3 rounded-full bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[#dcb285] hover:text-white transition shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dynamic Grid Container */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentGroupIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6 md:gap-8"
              style={{ gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))` }}
            >
              {cardGroups[currentGroupIndex]?.map((card, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-[24px] p-6 md:p-8 border-2 border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(220,178,133,0.2)] hover:border-[#dcb285] transition-all flex flex-col items-center text-center h-full group"
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#c49a6c] mb-4 uppercase tracking-wide group-hover:text-[#04407E] transition-colors">{card.title}</h3>
                  
                  <p className="text-gray-600 font-medium text-xs md:text-sm mb-6 flex-grow leading-relaxed uppercase">
                    {card.desc}
                  </p>
                  
                  <div className="w-20 h-20 mb-8 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700]/10 transition-colors">
                    <span className="text-4xl">{card.icon}</span>
                  </div>
                  
                  <Link to={card.path} className="w-full inline-block bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold py-3 px-6 rounded-lg transition-all mt-auto text-sm uppercase tracking-wider shadow-sm">
                    {card.button}
                  </Link>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {Array.from({ length: totalGroups }).map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => setCurrentCardSlide(i * cardsPerView)}
                className={`h-2 rounded-full transition-all ${
                  currentGroupIndex === i ? 'w-10 bg-[#c49a6c]' : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
              />
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
