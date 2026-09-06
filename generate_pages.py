import os

base_dir = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages"

def get_page_template(title, subtitle, feature_title, features):
    features_html = ""
    for f in features:
        features_html += f"""
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcb285]/20 flex items-center justify-center text-[#9e7146]">
                <span className="font-bold">✓</span>
              </div>
              <span className="font-bold text-gray-900">{f}</span>
            </div>"""

    return f"""import React from 'react';
import {{ ChevronRight }} from 'lucide-react';

export default function {title.replace(' ', '').replace('-', '')}() {{
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-[#04407E] selection:text-white pt-20">
      
      {{/* HERO SECTION */}}
      <section className="relative w-full h-[500px] bg-gray-900 overflow-hidden flex flex-col justify-center items-center pb-12">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=2071&auto=format&fit=crop&q=80" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white max-w-3xl drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10">
            {subtitle}
          </p>
          <button className="bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold text-lg px-8 py-3 rounded-full transition-colors duration-200 shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      {{/* FEATURES SECTION */}}
      <section className="bg-[#f8f9fa] py-20">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-1/2 md:pr-12 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-black mb-6 leading-tight">
              {feature_title}
            </h2>
            <p className="text-lg text-gray-800 mb-12">
              We provide the most streamlined and transparent financial solutions for your two-wheeler needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 md:mb-0">
              {features_html}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 h-[400px] relative rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop" 
              alt="Feature illustration" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {{/* CALL TO ACTION */}}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-[#04407E] mb-8">
            Ready to apply for {title}?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Our entirely digital process ensures you get your approval in minutes. Join thousands of happy riders who chose Ritika Financial for their two-wheeler needs.
          </p>
          <button className="bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold py-3 px-8 rounded-full transition-colors shadow-sm inline-flex items-center">
            Apply Now <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}}
"""

pages = [
    {
        "filename": "Loans.tsx",
        "title": "Two-Wheeler Loans",
        "subtitle": "Finance your dream bike or scooter instantly with up to 100% on-road funding and zero hidden charges.",
        "feature_title": "Why choose our Two-Wheeler Loans?",
        "features": ["100% Digital Process", "Instant Approvals", "No Foreclosure Charges", "Lowest Interest Rates"]
    },
    {
        "filename": "Insurance.tsx",
        "title": "Two-Wheeler Insurance",
        "subtitle": "Protect your ride against accidents, theft, and damages with our comprehensive insurance plans.",
        "feature_title": "Comprehensive Protection",
        "features": ["Zero Depreciation Cover", "Cashless Garage Network", "Instant Policy Issuance", "24/7 Roadside Assistance"]
    },
    {
        "filename": "TopUp.tsx",
        "title": "Top-Up Loans",
        "subtitle": "Need extra cash for accessories or upgrades? Get an instant top-up on your existing two-wheeler loan.",
        "feature_title": "Enhance Your Ride",
        "features": ["Pre-approved Offers", "Minimal Documentation", "Fast Disbursal", "Flexible Repayment"]
    },
    {
        "filename": "Refinancing.tsx",
        "title": "Loan Refinancing",
        "subtitle": "Transfer your existing two-wheeler loan to us and enjoy significantly lower interest rates and better terms.",
        "feature_title": "Better Rates, Better Terms",
        "features": ["Lower EMIs", "Seamless Transfer", "Top-up Option Available", "No Hidden Fees"]
    }
]

for page in pages:
    with open(os.path.join(base_dir, page["filename"]), "w") as f:
        f.write(get_page_template(page["title"], page["subtitle"], page["feature_title"], page["features"]))

# Update App.tsx
app_file = os.path.join(base_dir, "..", "App.tsx")
with open(app_file, "r") as f:
    app_code = f.read()

# Add imports if not present
imports = """
import Loans from '@/pages/Loans';
import Insurance from '@/pages/Insurance';
import TopUp from '@/pages/TopUp';
import Refinancing from '@/pages/Refinancing';
"""

if "import Loans from" not in app_code:
    app_code = app_code.replace("import Home from '@/pages/Home';", "import Home from '@/pages/Home';" + imports)

# Add routes
routes = """
          <Route path="/loans" element={<Loans />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/top-up" element={<TopUp />} />
          <Route path="/refinancing" element={<Refinancing />} />
"""

if '<Route path="/loans"' not in app_code:
    app_code = app_code.replace('<Route path="/about" element={<About />} />', '<Route path="/about" element={<About />} />' + routes)

with open(app_file, "w") as f:
    f.write(app_code)

print("Pages created and App.tsx updated.")
