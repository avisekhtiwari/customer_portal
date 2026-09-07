
import ReviewsSection from '@/components/home/ReviewsSection';

export default function Reviews() {
  return (
    <div className="min-h-screen bg-[#D1DCE2]">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
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
             <button className="bg-[#768EA6] hover:bg-[#7C91A6] text-white font-bold uppercase tracking-wider py-3 px-8 rounded-lg transition-all shadow-sm">
                Write a Review
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
