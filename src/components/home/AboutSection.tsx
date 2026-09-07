import { Link } from 'react-router-dom';
export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-white text-center">
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
        <Link to="/about" className="inline-block bg-[#768EA6] hover:bg-[#7C91A6] text-white font-bold uppercase tracking-wider py-3 px-8 rounded-lg transition-all shadow-sm">
          Read Our Full Story
        </Link>
      </div>
    </section>
  );
}
