import os

base_dir = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages"

pages = {
    "Dealers.tsx": """import { MapPin, Phone } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Dealers</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Partnering with top two-wheeler dealerships across India to provide you with the best financing options right at the showroom.
        </p>
      </div>

      <section className="py-20 bg-white">
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
""",

    "Presence.tsx": """export default function Presence() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Presence</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Find a Ritika Financial partner dealership near you. We are rapidly expanding our footprint across India.
        </p>
      </div>

      <section className="py-20 bg-white">
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
""",

    "Staff.tsx": """export default function Staff() {
  const staffMembers = [
    { name: "Ananya Desai", role: "Head of Dealer Relations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
    { name: "Vikram Mehta", role: "Regional Manager - North", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
    { name: "Priya Sharma", role: "Regional Manager - South", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
    { name: "Rahul Verma", role: "Lead Underwriter", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Staff</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The dedicated professionals working tirelessly behind the scenes to process your loans instantly.
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staffMembers.map((staff, idx) => (
              <div key={idx} className="bg-gray-50 rounded-3xl p-6 border border-gray-100 text-center flex flex-col items-center shadow-sm">
                <img src={staff.image} alt={staff.name} className="w-32 h-32 rounded-full object-cover mb-6 shadow-md" />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{staff.name}</h3>
                <p className="text-[#9e7146] font-medium text-sm">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
""",

    "DealerReviews.tsx": """export default function DealerReviews() {
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
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gray-900 py-24 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">What Our Dealers Say</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We treat our dealer partners like family. Here's what they think about working with us.
        </p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative">
                <div className="text-5xl text-[#dcb285] opacity-30 absolute top-4 left-6">"</div>
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
"""
}

for filename, content in pages.items():
    filepath = os.path.join(base_dir, filename)
    with open(filepath, "w") as f:
        f.write(content)

# Update App.tsx
app_file = os.path.join(base_dir, "..", "App.tsx")
with open(app_file, "r") as f:
    app_code = f.read()

imports = """
import Dealers from '@/pages/Dealers';
import Presence from '@/pages/Presence';
import Staff from '@/pages/Staff';
import DealerReviews from '@/pages/DealerReviews';
"""

if "import Dealers from" not in app_code:
    app_code = app_code.replace("import TopUp from '@/pages/TopUp';", "import TopUp from '@/pages/TopUp';" + imports)

routes = """
          <Route path="/dealers" element={<Dealers />} />
          <Route path="/presence" element={<Presence />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/dealer-reviews" element={<DealerReviews />} />
"""

if '<Route path="/dealers"' not in app_code:
    app_code = app_code.replace('<Route path="/top-up" element={<TopUp />} />', '<Route path="/top-up" element={<TopUp />} />' + routes)

with open(app_file, "w") as f:
    f.write(app_code)

# Update DynamicTitle.tsx
title_file = os.path.join(base_dir, "..", "components", "DynamicTitle.tsx")
with open(title_file, "r") as f:
    title_code = f.read()

new_titles = """  '/dealers': 'Our Dealers',
  '/presence': 'Our Presence',
  '/staff': 'Our Staff',
  '/dealer-reviews': 'Dealer Testimonials',
"""
if "'/dealers'" not in title_code:
    title_code = title_code.replace("'/gallery': 'Our Gallery',", new_titles + "  '/gallery': 'Our Gallery',")
    with open(title_file, "w") as f:
        f.write(title_code)

print("Pages created, App.tsx and DynamicTitle updated.")
