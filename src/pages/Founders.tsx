
import FoundersSection from '@/components/home/FoundersSection';

export default function Founders() {
  return (
    <div className="min-h-screen bg-[#D1DCE2]">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Founders</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Meet the visionaries leading the revolution in two-wheeler financing in India.
        </p>
      </div>

      <FoundersSection />

      <section className="py-10 md:py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">A Message from Leadership</h2>
          <blockquote className="text-2xl italic text-gray-700 leading-relaxed">
            "We didn't just want to build another bank. We wanted to build a platform that understands the heartbeat of Indian roads. A two-wheeler is freedom, and we are here to finance that freedom transparently."
          </blockquote>
          <p className="mt-8 font-bold text-[#9e7146] uppercase tracking-wider">
            - Ritika Sharma & Rajesh Kumar
          </p>
        </div>
      </section>
    </div>
  );
}
