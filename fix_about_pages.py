import os

base_dir = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages"

pages = {
    "About.tsx": """import React from 'react';
import AboutSection from '@/components/home/AboutSection';
import { Target, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Company Overview</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Driving India forward, one two-wheeler at a time. Discover our journey and mission.
        </p>
      </div>

      <AboutSection />

      <section className="py-20 bg-white">
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
""",

    "Gallery.tsx": """import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
  "https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80",
  "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Gallery</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Glimpses of our community, events, and the smiles we've helped create.
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-72">
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
""",

    "Goals.tsx": """import React from 'react';
import GoalsSection from '@/components/home/GoalsSection';

export default function Goals() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Goals</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We set the bar high. See what we are striving to achieve by 2026.
        </p>
      </div>

      <GoalsSection />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12 text-gray-700 text-lg leading-relaxed">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1M+ Riders Financed</h2>
              <p>
                Mobility is a fundamental enabler of economic growth. By reaching 1 million riders, we aren't just selling loans; we are empowering 1 million families to commute better, work efficiently, and dream bigger.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">0% Paperwork & Hassle</h2>
              <p>
                We believe the future of finance is completely digital. We are actively refining our AI underwriting and digital KYC processes to eliminate physical paperwork entirely, making loan approvals instant and seamless from any smartphone.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">100% Customer Satisfaction</h2>
              <p>
                Our relationship doesn't end when the loan is disbursed; it begins there. We are committed to providing empathetic, 24/7 support and entirely transparent fee structures to ensure every customer feels valued and respected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
""",

    "Reviews.tsx": """import React from 'react';
import ReviewsSection from '@/components/home/ReviewsSection';

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Customer Reviews</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Don't just take our word for it. Hear from the riders who trust us.
        </p>
      </div>

      <ReviewsSection />

      {/* Additional reviews could go here */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-12">
             <button className="bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold py-3 px-8 rounded-full transition-colors shadow-sm">
                Write a Review
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
""",

    "Stories.tsx": """import React from 'react';
import StoriesSection from '@/components/home/StoriesSection';

export default function Stories() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Customer Stories</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Real journeys of people who achieved their dreams with Ritika Financial.
        </p>
      </div>

      <StoriesSection />

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <span className="text-[#9e7146] font-bold text-sm tracking-wider uppercase mb-2 block">Student Spotlight</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">First Bike, First Job</h3>
              <p className="text-gray-600 mb-6">
                "Getting my first job meant commuting 15km daily. Ritika Financial's student-friendly EV loan helped me buy my scooter with zero downpayment. It completely changed my life."
              </p>
              <p className="font-bold text-gray-900">- Priya M., Bangalore</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <span className="text-[#9e7146] font-bold text-sm tracking-wider uppercase mb-2 block">Upgrade Spotlight</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Upgrading to a Superbike</h3>
              <p className="text-gray-600 mb-6">
                "I always dreamed of owning a Royal Enfield. With the easy refinancing and top-up options from Ritika, upgrading my 100cc bike to a 350cc beast was completely seamless."
              </p>
              <p className="font-bold text-gray-900">- Karthik S., Chennai</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
""",

    "Founders.tsx": """import React from 'react';
import FoundersSection from '@/components/home/FoundersSection';

export default function Founders() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Founders</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Meet the visionaries leading the revolution in two-wheeler financing in India.
        </p>
      </div>

      <FoundersSection />

      <section className="py-20 bg-white border-t border-gray-100">
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
"""
}

for filename, content in pages.items():
    filepath = os.path.join(base_dir, filename)
    with open(filepath, "w") as f:
        f.write(content)

print("About Us subpages successfully updated with custom UIs.")
