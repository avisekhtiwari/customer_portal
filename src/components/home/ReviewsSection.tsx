export default function ReviewsSection() {
  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
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
