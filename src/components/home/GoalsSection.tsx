export default function GoalsSection() {
  return (
    <section className="py-10 md:py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Goals for 2026</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-700 rounded-2xl bg-gray-800">
            <h3 className="text-4xl font-extrabold text-[#dcb285] mb-2">1M+</h3>
            <p className="text-gray-300">Riders Financed</p>
          </div>
          <div className="p-6 border border-gray-700 rounded-2xl bg-gray-800">
            <h3 className="text-4xl font-extrabold text-[#dcb285] mb-2">0%</h3>
            <p className="text-gray-300">Paperwork & Hassle</p>
          </div>
          <div className="p-6 border border-gray-700 rounded-2xl bg-gray-800">
            <h3 className="text-4xl font-extrabold text-[#dcb285] mb-2">100%</h3>
            <p className="text-gray-300">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}
