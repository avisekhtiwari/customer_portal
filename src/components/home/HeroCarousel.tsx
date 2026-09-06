import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=2000&auto=format&fit=crop&q=80",
    title: "Empowering your ride with ",
    highlight: "Ritika Financial Corporation",
    button: "Explore now"
  },
  {
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=2000&auto=format&fit=crop&q=80",
    title: "Your dream bike, our ",
    highlight: "seamless finance.",
    button: "Get Financed"
  },
  {
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=2000&auto=format&fit=crop&q=80",
    title: "Drive your passion with ",
    highlight: "Ritika Financial.",
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
    <section className="relative w-full h-[600px] md:h-[700px] bg-gray-900 overflow-hidden flex flex-col justify-center items-center group">
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
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentHeroSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white max-w-4xl drop-shadow-lg whitespace-pre-line leading-tight">
              {heroSlides[currentHeroSlide].title}
              <span className="text-[#dcb285] block mt-2">{heroSlides[currentHeroSlide].highlight}</span>
            </h1>
            
            <div className="mt-12">
              <Link to="/loans" className="inline-block bg-[#FFD700] hover:bg-[#F2C900] text-black font-extrabold text-lg uppercase tracking-wider px-10 py-4 rounded-lg transition-all shadow-sm">
                {heroSlides[currentHeroSlide].button}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button 
        onClick={prevHeroSlide}
        className="absolute left-4 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-[#FFD700] hover:text-black transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextHeroSlide}
        className="absolute right-4 z-20 p-3 rounded-full bg-black/40 text-white hover:bg-[#FFD700] hover:text-black transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-10 z-20 flex space-x-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentHeroSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentHeroSlide ? 'bg-[#FFD700] w-10' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
