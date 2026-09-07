export default function FoundersSection() {
  return (
    <section className="py-10 md:py-12 bg-[#D1DCE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Founders</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The visionaries who started the journey to revolutionize two-wheeler financing in India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" 
              alt="Rajesh Kumar" 
              className="w-32 h-32 rounded-full mb-6 object-cover shadow-md"
            />
            <h3 className="text-2xl font-bold text-gray-900">Rajesh Kumar</h3>
            <p className="text-[#9e7146] font-semibold mb-4">Co-Founder & CEO</p>
            <p className="text-gray-600 text-sm">
              With over 15 years in auto-finance, Rajesh leads our strategic vision to make mobility accessible to everyone.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
              alt="Ritika Sharma" 
              className="w-32 h-32 rounded-full mb-6 object-cover shadow-md"
            />
            <h3 className="text-2xl font-bold text-gray-900">Ritika Sharma</h3>
            <p className="text-[#9e7146] font-semibold mb-4">Co-Founder & MD</p>
            <p className="text-gray-600 text-sm">
              A pioneer in digital lending, Ritika drives our technology initiatives to ensure instant, paperless loan approvals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
