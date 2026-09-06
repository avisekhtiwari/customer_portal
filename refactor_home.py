import os

base_dir = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src"
home_dir = os.path.join(base_dir, "components", "home")
os.makedirs(home_dir, exist_ok=True)

files_content = {
    "HeroCarousel.tsx": """import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=2071&auto=format&fit=crop&q=80",
    title: "Worry less, ",
    highlight: "make\\nmore.",
    button: "Explore now"
  },
  {
    image: "https://images.unsplash.com/photo-1610486001083-d3d63b276706?w=2000&auto=format&fit=crop&q=80",
    title: "Finance your ",
    highlight: "dream\\nbike.",
    button: "Get Financed"
  },
  {
    image: "https://images.unsplash.com/photo-1525253013412-55c1a69a5738?w=2000&auto=format&fit=crop&q=80",
    title: "Ride with ",
    highlight: "pride.",
    button: "Apply Today"
  }
];

export default function HeroCarousel() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextHeroSlide = () => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  const prevHeroSlide = () => setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative w-full h-[600px] bg-gray-900 overflow-hidden flex flex-col justify-center items-center pb-12 mt-20 group">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentHeroSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={heroSlides[currentHeroSlide].image} 
            alt="Slide image" 
            className="w-full h-full object-cover opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentHeroSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white max-w-3xl drop-shadow-lg whitespace-pre-line">
              {heroSlides[currentHeroSlide].title}
              <span className="text-[#dcb285]">{heroSlides[currentHeroSlide].highlight}</span>
            </h1>
            
            <div className="mt-10">
              <button className="bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold text-lg px-8 py-3 rounded-full transition-colors duration-200 shadow-lg">
                {heroSlides[currentHeroSlide].button}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button 
        onClick={prevHeroSlide}
        className="absolute left-4 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition opacity-0 group-hover:opacity-100 hidden sm:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextHeroSlide}
        className="absolute right-4 z-20 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition opacity-0 group-hover:opacity-100 hidden sm:block"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-6 z-20 flex space-x-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentHeroSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentHeroSlide ? 'bg-[#dcb285] w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
""",
    "ServicesCarousel.tsx": """import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cards = [
  { title: "Two-Wheeler Loans", desc: "Finance your dream bike or scooter with our hassle-free, low-interest loans.", icon: "🏍️", button: "Apply Now" },
  { title: "EMI Calculator", desc: "Easily calculate your monthly payments and plan your finances in advance.", icon: "🧮", button: "Calculate" },
  { title: "Instant Disbursal", desc: "Get your loan amount transferred instantly with our fast-track approval process.", icon: "⚡", button: "Learn More" },
  { title: "Vehicle Insurance", desc: "Protect your new ride with comprehensive two-wheeler insurance plans.", icon: "🛡️", button: "View Plans" },
  { title: "Top-Up Loans", desc: "Get additional funds on your existing loan for upgrades or accessories.", icon: "💰", button: "Explore" },
  { title: "EV Financing", desc: "Special interest rates and benefits for electric two-wheeler purchases.", icon: "🔋", button: "Go Green" },
  { title: "Accessories Finance", desc: "Finance riding gears, helmets, and vehicle modifications effortlessly.", icon: "🪖", button: "Add Gear" },
  { title: "Refinancing Options", desc: "Transfer your existing loan to us and enjoy lower interest rates.", icon: "🔄", button: "Refinance" },
  { title: "Premium Bike Loans", desc: "Exclusive financing options for superbikes and premium motorcycles.", icon: "🏁", button: "Ride Premium" },
  { title: "Credit Score Check", desc: "Check your eligibility and credit score for free in just a few clicks.", icon: "📊", button: "Check Now" },
  { title: "Pre-approved Offers", desc: "Special tailored loan offers exclusively available for existing customers.", icon: "🎁", button: "Check Offers" },
  { title: "Loan Status Tracking", desc: "Track your loan application and disbursement status in real-time.", icon: "📱", button: "Track Now" }
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
    }, 4000);
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
    <section className="py-16 bg-white relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Explore Our Services</h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevCardSlide}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextCardSlide}
              className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative w-full h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentGroupIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full grid gap-6"
              style={{ gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))` }}
            >
              {cardGroups[currentGroupIndex]?.map((card, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col items-center text-center h-full"
                >
                  <h3 className="text-2xl font-bold text-[#9e7146] mb-4">{card.title}</h3>
                  <p className="text-gray-700 font-medium text-sm mb-6 flex-grow">
                    {card.desc}
                  </p>
                  <div className="w-24 h-24 mb-6 bg-gray-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl">{card.icon}</span>
                  </div>
                  <button className="bg-[#c49a6c] hover:bg-[#b58a5b] text-white font-bold py-2 px-6 rounded-full transition-colors mt-auto">
                    {card.button}
                  </button>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalGroups }).map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => setCurrentCardSlide(i * cardsPerView)}
                className={`h-2 rounded-full transition-all ${
                  currentGroupIndex === i ? 'w-8 bg-[#9e7146]' : 'w-2 bg-gray-300'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
""",
    "WhyChooseUs.tsx": """import { Zap, Shield, Globe, Cpu } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f8f9fa]">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-black mb-6 leading-tight">
            Your trusted partner for Two-Wheeler Financing
          </h2>
          <p className="text-lg text-gray-800 mb-12">
            We make owning your dream motorcycle or scooter easier than ever. With our instant approval process and flexible repayment options, you can hit the road in no time.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcb285]/20 flex items-center justify-center text-[#9e7146]">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-900">Instant Approvals</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcb285]/20 flex items-center justify-center text-[#9e7146]">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-900">Zero Hidden Charges</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcb285]/20 flex items-center justify-center text-[#9e7146]">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-900">Pan-India Network</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcb285]/20 flex items-center justify-center text-[#9e7146]">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-900">100% Digital Process</span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 h-[500px] md:h-auto relative">
          <img 
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop" 
            alt="Happy customer with new motorcycle" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>
  );
}
""",
    "AboutSection.tsx": """export default function AboutSection() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#04407E] mb-8">
          About Ritika Financial Corporation Limited
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Ritika Financial Corporation Limited is India's premier specialized two-wheeler finance company. We are dedicated to fulfilling the mobility dreams of millions of Indians by offering accessible, transparent, and affordable motorcycle and scooter loans.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Whether you are a student buying your first scooter, a professional upgrading to a premium bike, or a delivery executive needing a reliable electric vehicle, we tailor our financial products to suit your unique journey. We believe that a two-wheeler isn't just a vehicle—it's a step towards independence and growth.
        </p>
        <button className="bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
          Read Our Full Story
        </button>
      </div>
    </section>
  );
}
""",
    "FoundersSection.tsx": """export default function FoundersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Founders</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The visionaries who started the journey to revolutionize two-wheeler financing in India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
              alt="Rajesh Kumar" 
              className="w-32 h-32 rounded-full mb-6 object-cover shadow-md"
            />
            <h3 className="text-2xl font-bold text-gray-900">Rajesh Kumar</h3>
            <p className="text-[#9e7146] font-semibold mb-4">Co-Founder & CEO</p>
            <p className="text-gray-600 text-sm">
              With over 15 years in auto-finance, Rajesh leads our strategic vision to make mobility accessible to everyone.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
              alt="Ritika Sharma" 
              className="w-32 h-32 rounded-full mb-6 object-cover shadow-md"
            />
            <h3 className="text-2xl font-bold text-gray-900">Ritika Sharma</h3>
            <p className="text-[#9e7146] font-semibold mb-4">Co-Founder & MD</p>
            <p className="text-gray-600 text-sm">
              A pioneer in digital lending, Ritika drives our technology initiatives to ensure instant, paperless loan approvals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
""",
    "ReviewsSection.tsx": """export default function ReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Loved by Riders Across India</h2>
          <div className="flex justify-center items-center mt-4 space-x-2">
            <span className="text-4xl font-bold text-gray-900">4.8</span>
            <div className="flex text-yellow-400 text-2xl">
              ★★★★★
            </div>
          </div>
          <p className="mt-2 text-gray-600">Based on 10,000+ satisfied customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex text-yellow-400 text-lg mb-4">★★★★★</div>
            <p className="text-gray-700 italic mb-6">
              "Got my bike loan approved in just 15 minutes! The process was completely digital and the interest rate was the best I could find. Highly recommended."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#04407E] text-white flex items-center justify-center font-bold mr-4">
                A
              </div>
              <div>
                <p className="font-bold text-gray-900">Amit Patel</p>
                <p className="text-xs text-gray-500">Purchased Honda Activa</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex text-yellow-400 text-lg mb-4">★★★★★</div>
            <p className="text-gray-700 italic mb-6">
              "The transparency in their fee structure is amazing. No hidden charges whatsoever. The customer support team was very helpful throughout."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#dcb285] text-black flex items-center justify-center font-bold mr-4">
                S
              </div>
              <div>
                <p className="font-bold text-gray-900">Sneha Reddy</p>
                <p className="text-xs text-gray-500">Purchased Royal Enfield</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex text-yellow-400 text-lg mb-4">★★★★★</div>
            <p className="text-gray-700 italic mb-6">
              "I had an existing loan and opted for a top-up. The process was incredibly smooth. They truly understand the needs of two-wheeler owners."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#9e7146] text-white flex items-center justify-center font-bold mr-4">
                V
              </div>
              <div>
                <p className="font-bold text-gray-900">Vikram Singh</p>
                <p className="text-xs text-gray-500">Top-Up Loan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
""",
    "GoalsSection.tsx": """export default function GoalsSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Goals for 2026</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-700 rounded-2xl bg-gray-800">
            <h3 className="text-4xl font-extrabold text-[#dcb285] mb-2">1M+</h3>
            <p className="text-gray-300">Riders Financed</p>
          </div>
          <div className="p-6 border border-gray-700 rounded-2xl bg-gray-800">
            <h3 className="text-4xl font-extrabold text-[#dcb285] mb-2">0%</h3>
            <p className="text-gray-300">Paperwork & Hassle</p>
          </div>
          <div className="p-6 border border-gray-700 rounded-2xl bg-gray-800">
            <h3 className="text-4xl font-extrabold text-[#dcb285] mb-2">100%</h3>
            <p className="text-gray-300">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
""",
    "StoriesSection.tsx": """import { ChevronRight } from 'lucide-react';

export default function StoriesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Stories</h2>
          <p className="mt-4 text-gray-600">Real journeys of people who achieved their dreams with us.</p>
        </div>
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800&auto=format&fit=crop" alt="Customer success story" className="w-full h-full object-cover min-h-[300px]" />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[#9e7146] font-bold text-sm tracking-wider uppercase mb-2">Customer Spotlight</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">From Delivery Boy to Fleet Owner</h3>
            <p className="text-gray-600 mb-6">
              Rahul started with a single financed scooter for his delivery job. With our easy top-up loans, he now owns a fleet of 5 vehicles, providing employment to others in his community.
            </p>
            <button className="text-[#04407E] font-bold flex items-center hover:underline w-fit">
              Read full story <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
""",
    "GallerySection.tsx": """import { Link } from 'react-router-dom';

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Gallery</h2>
        <p className="text-gray-600 mb-12">Glimpses of our events, branches, and happy customers.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          <img src="https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&auto=format&fit=crop" alt="Gallery highlight 1" className="w-full h-64 object-cover rounded-2xl shadow-sm" />
          <img src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&auto=format&fit=crop" alt="Gallery highlight 2" className="w-full h-64 object-cover rounded-2xl shadow-sm" />
        </div>
        
        <Link to="/gallery" className="inline-block border-2 border-[#04407E] text-[#04407E] hover:bg-[#04407E] hover:text-white font-bold py-3 px-10 rounded-full transition-colors">
          View More
        </Link>
      </div>
    </section>
  );
}
"""
}

for name, content in files_content.items():
    with open(os.path.join(home_dir, name), "w") as f:
        f.write(content)

home_tsx = """import HeroCarousel from '../components/home/HeroCarousel';
import ServicesCarousel from '../components/home/ServicesCarousel';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AboutSection from '../components/home/AboutSection';
import FoundersSection from '../components/home/FoundersSection';
import ReviewsSection from '../components/home/ReviewsSection';
import GoalsSection from '../components/home/GoalsSection';
import StoriesSection from '../components/home/StoriesSection';
import GallerySection from '../components/home/GallerySection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-[#04407E] selection:text-white">
      <HeroCarousel />
      <ServicesCarousel />
      <WhyChooseUs />
      <AboutSection />
      <FoundersSection />
      <ReviewsSection />
      <GoalsSection />
      <StoriesSection />
      <GallerySection />
    </div>
  );
}
"""

with open(os.path.join(base_dir, "pages", "Home.tsx"), "w") as f:
    f.write(home_tsx)

print("Refactored successfully")
