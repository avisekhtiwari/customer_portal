import { Zap, Shield, Globe, Cpu } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f8f9fa]">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-black mb-6 leading-tight">
            Your trusted partner for Two-Wheeler Financing
          </h2>
          <p className="text-lg text-gray-800 mb-12">
            We make owning your dream motorcycle or scooter easier than ever. With our instant approval process and flexible repayment options, you can hit the road in no time.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#768EA6]/20 flex items-center justify-center text-[#9e7146]">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-900">Instant Approvals</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#768EA6]/20 flex items-center justify-center text-[#9e7146]">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-900">Zero Hidden Charges</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#768EA6]/20 flex items-center justify-center text-[#9e7146]">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-900">Pan-India Network</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#768EA6]/20 flex items-center justify-center text-[#9e7146]">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-900">100% Digital Process</span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 h-[500px] md:h-auto relative">
          <img 
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=2070&auto=format&fit=crop" 
            alt="Happy customer with new motorcycle" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>
    </section>
  );
}
