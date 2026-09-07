export default function DealerReviews() {
  const reviews = [
    {
      dealer: "Metro Honda",
      name: "Suresh Gupta",
      text: "Partnering with Ritika Financial has doubled our sales. Their zero-paperwork digital approval means customers ride out with a new bike the same day."
    },
    {
      dealer: "Green Ride EVs",
      name: "Arun Kumar",
      text: "The special EV financing rates they offer are unbeatable. Their dedicated support staff is always available to resolve any portal issues instantly."
    },
    {
      dealer: "Elite Motors",
      name: "Meera Reddy",
      text: "We deal in premium superbikes, and Ritika Financial is the only partner that processes high-ticket loans smoothly and efficiently without delaying disbursement."
    }
  ];

  return (
    <div className="min-h-screen bg-[#D1DCE2]">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">What Our Dealers Say</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We treat our dealer partners like family. Here's what they think about working with us.
        </p>
      </div>

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-[#D1DCE2] rounded-2xl p-8 border border-gray-100 relative">
                <div className="text-5xl text-[#768EA6] opacity-30 absolute top-4 left-6">"</div>
                <p className="text-gray-700 italic mb-8 relative z-10 pt-4">
                  {review.text}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-xs text-[#04407E] font-bold uppercase tracking-wider">{review.dealer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
