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
            Explore More
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
            Connect with {title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Our entirely digital process ensures you get your approval in minutes. Join thousands of happy riders who chose Ritika Financial for their two-wheeler needs.
          </p>
          <button className="bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold py-3 px-8 rounded-full transition-colors shadow-sm inline-flex items-center">
            Get Started <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}}
"""

pages = [
    {
        "filename": "Gallery.tsx",
        "title": "Our Gallery",
        "subtitle": "Glimpses of our events, branches, and happy customers all over India.",
        "feature_title": "Memorable Moments",
        "features": ["Happy Customers", "Branch Events", "Community Drives", "Milestone Celebrations"]
    },
    {
        "filename": "Goals.tsx",
        "title": "Our Goals",
        "subtitle": "Striving to make mobility accessible, seamless, and digital for everyone in India.",
        "feature_title": "Looking Ahead to 2026",
        "features": ["1M+ Riders Financed", "0% Paperwork", "100% Customer Satisfaction", "Pan-India Reach"]
    },
    {
        "filename": "Reviews.tsx",
        "title": "Our Reviews",
        "subtitle": "See what thousands of satisfied riders have to say about their experience with us.",
        "feature_title": "Trusted by Millions",
        "features": ["4.8/5 Star Rating", "Verified Reviews", "Real Stories", "Transparent Feedback"]
    },
    {
        "filename": "Stories.tsx",
        "title": "Our Stories",
        "subtitle": "Read the inspiring journeys of individuals who achieved their dreams with Ritika Financial.",
        "feature_title": "Customer Spotlights",
        "features": ["Empowerment", "Financial Freedom", "Business Growth", "Personal Journeys"]
    },
    {
        "filename": "Founders.tsx",
        "title": "Our Founders",
        "subtitle": "Meet the visionaries leading the revolution in two-wheeler financing in India.",
        "feature_title": "Leadership Team",
        "features": ["Strategic Vision", "Digital Pioneers", "Industry Experts", "Customer Centricity"]
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
import Gallery from '@/pages/Gallery';
import Goals from '@/pages/Goals';
import Reviews from '@/pages/Reviews';
import Stories from '@/pages/Stories';
import Founders from '@/pages/Founders';
"""

if "import Gallery from" not in app_code:
    app_code = app_code.replace("import TopUp from '@/pages/TopUp';", "import TopUp from '@/pages/TopUp';" + imports)

# Add routes
routes = """
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/founders" element={<Founders />} />
"""

if '<Route path="/gallery"' not in app_code:
    app_code = app_code.replace('<Route path="/refinancing" element={<Refinancing />} />', '<Route path="/refinancing" element={<Refinancing />} />' + routes)

with open(app_file, "w") as f:
    f.write(app_code)

print("Pages created and App.tsx updated.")
