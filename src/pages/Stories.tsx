
import StoriesSection from '@/components/home/StoriesSection';

export default function Stories() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Customer Stories</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Real journeys of people who achieved their dreams with Ritika Financial.
        </p>
      </div>

      <StoriesSection />

      <section className="py-10 md:py-12 bg-gray-50 border-t border-gray-100">
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
