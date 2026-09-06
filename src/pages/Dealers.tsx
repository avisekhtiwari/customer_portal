import { MapPin, Phone } from 'lucide-react';

export default function Dealers() {
  const dealers = [
    { name: "SuperBikes Auto", location: "New Delhi", phone: "+91 98765 11111", type: "Premium Dealer" },
    { name: "City Scooters", location: "Mumbai", phone: "+91 98765 22222", type: "Authorized Dealer" },
    { name: "Green EV Motors", location: "Bangalore", phone: "+91 98765 33333", type: "EV Specialist" },
    { name: "Royal Wheels", location: "Chennai", phone: "+91 98765 44444", type: "Premium Dealer" },
    { name: "Express Honda", location: "Pune", phone: "+91 98765 55555", type: "Authorized Dealer" },
    { name: "Future Ride EVs", location: "Hyderabad", phone: "+91 98765 66666", type: "EV Specialist" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Dealers</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Partnering with top two-wheeler dealerships across India to provide you with the best financing options right at the showroom.
        </p>
      </div>

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dealers.map((dealer, idx) => (
              <div key={idx} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9e7146] mb-2 block">{dealer.type}</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{dealer.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-5 h-5 mr-3 text-[#04407E]" /> {dealer.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3 text-[#04407E]" /> {dealer.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
