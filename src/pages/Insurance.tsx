
import { ChevronRight } from 'lucide-react';

export default function TwoWheelerInsurance() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-[#04407E] selection:text-white pt-16">
      
      {/* HERO SECTION */}
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
            Two-Wheeler Insurance
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-10">
            Protect your ride against accidents, theft, and damages with our comprehensive insurance plans.
          </p>
          <button className="bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider text-lg px-8 py-3 rounded-lg transition-all shadow-sm">
            Get Started
          </button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-[#f8f9fa] py-10 md:py-12">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full md:w-1/2 md:pr-12 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-black mb-6 leading-tight">
              Comprehensive Protection
            </h2>
            <p className="text-lg text-gray-800 mb-12">
              We provide the most streamlined and transparent financial solutions for your two-wheeler needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 md:mb-0">
              
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcb285]/20 flex items-center justify-center text-[#9e7146]">
                <span className="font-bold">✓</span>
              </div>
              <span className="font-bold text-gray-900">Zero Depreciation Cover</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcb285]/20 flex items-center justify-center text-[#9e7146]">
                <span className="font-bold">✓</span>
              </div>
              <span className="font-bold text-gray-900">Cashless Garage Network</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcb285]/20 flex items-center justify-center text-[#9e7146]">
                <span className="font-bold">✓</span>
              </div>
              <span className="font-bold text-gray-900">Instant Policy Issuance</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#dcb285]/20 flex items-center justify-center text-[#9e7146]">
                <span className="font-bold">✓</span>
              </div>
              <span className="font-bold text-gray-900">24/7 Roadside Assistance</span>
            </div>
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

      {/* CALL TO ACTION */}
      <section className="py-12 md:py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-[#04407E] mb-8">
            Ready to apply for Two-Wheeler Insurance?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Our entirely digital process ensures you get your approval in minutes. Join thousands of happy riders who chose Ritika Financial for their two-wheeler needs.
          </p>
          <button className="bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-3 px-8 rounded-lg transition-all shadow-sm inline-flex items-center">
            Apply Now <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}
