import HeroCarousel from '../components/home/HeroCarousel';
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
