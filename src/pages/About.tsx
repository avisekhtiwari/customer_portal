import { FileText, Laptop, Zap, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Redefining Two-Wheeler Finance
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ritika Finance Corporation is a modern financial institution that believes getting a bike loan shouldn't feel like a second job. We've eliminated the endless paperwork so you can focus on the ride.
          </p>
        </div>

        {/* Why Us Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg">The traditional way vs. The Ritika Finance way</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="bg-red-50 border border-red-100 p-8 relative overflow-hidden rounded-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -z-10 opacity-50"></div>
              <h3 className="text-2xl font-bold text-red-900 mb-6">Other Financiers</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-red-800">Endless physical documentation and photocopies required.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-red-800">Multiple branch visits needed just to submit forms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-red-800">Slow, manual verification processes that take days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-red-800">Hidden charges buried deep in the paperwork.</span>
                </li>
              </ul>
            </div>

            {/* The Ritika Way */}
            <div className="bg-green-50 border border-green-100 p-8 relative overflow-hidden shadow-sm rounded-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-bl-full -z-10 opacity-50"></div>
              <h3 className="text-2xl font-bold text-green-900 mb-6">Ritika Finance</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-green-900 font-medium">Minimal, 100% paperless documentation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Laptop className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-green-900 font-medium">Fully online process from application to approval.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-green-900 font-medium">Instant digital verification and lightning-fast disbursals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-green-900 font-medium">Complete transparency with our digital dashboard.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Finance for the Digital Age</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              We realized that the biggest hurdle to buying a two-wheeler wasn't the price, it was the exhausting finance process. By leveraging technology, we've stripped away the unnecessary bureaucracy. 
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              With Ritika Finance, you just need basic digital KYC and a few clicks. Our smart platform does the heavy lifting, giving you instant decisions and a seamless online loan management experience. No more carrying folders of documents; just use your smartphone.
            </p>
          </div>
          <div className="overflow-hidden shadow-2xl relative h-[400px] rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" 
              alt="Digital Finance" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
              <h3 className="text-3xl font-bold text-white">100% Digital Process</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
