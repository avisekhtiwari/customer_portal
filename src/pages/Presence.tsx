export default function Presence() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Presence</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Find a Ritika Financial partner dealership near you. We are rapidly expanding our footprint across India.
        </p>
      </div>

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Dealer Locations</h2>
          
          <div className="w-full h-[600px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border border-gray-300 relative">
            {/* Google Maps Embed Placeholder - using iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14343166.42994464!2d70.07663784136622!3d22.185258510803405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md text-left z-10 pointer-events-none">
              <h3 className="font-bold text-gray-900 mb-1">Pan India Network</h3>
              <p className="text-sm text-gray-600 flex items-center"><span className="w-3 h-3 rounded-full bg-red-500 mr-2 block"></span> 500+ Dealerships</p>
              <p className="text-sm text-gray-600 flex items-center mt-1"><span className="w-3 h-3 rounded-full bg-blue-500 mr-2 block"></span> 100+ Regional Offices</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
