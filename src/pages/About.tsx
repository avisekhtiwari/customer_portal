
import AboutSection from '@/components/home/AboutSection';
import { Target, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Company Overview</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Driving India forward, one two-wheeler at a time. Discover our journey and mission.
        </p>
      </div>

      <AboutSection />

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-[#dcb285]/20 text-[#9e7146] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600">To make two-wheeler ownership accessible, transparent, and hassle-free for every Indian citizen.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-[#dcb285]/20 text-[#9e7146] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Values</h3>
              <p className="text-gray-600">Customer-centricity, absolute transparency, and continuous digital innovation drive everything we do.</p>
            </div>

            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-[#dcb285]/20 text-[#9e7146] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Promise</h3>
              <p className="text-gray-600">Zero hidden charges, secure data, and lifelong support for your mobility journey.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
