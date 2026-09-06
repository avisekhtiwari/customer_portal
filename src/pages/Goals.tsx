
import GoalsSection from '@/components/home/GoalsSection';

export default function Goals() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Goals</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We set the bar high. See what we are striving to achieve by 2026.
        </p>
      </div>

      <GoalsSection />

      <section className="py-10 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12 text-gray-700 text-lg leading-relaxed">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1M+ Riders Financed</h2>
              <p>
                Mobility is a fundamental enabler of economic growth. By reaching 1 million riders, we aren't just selling loans; we are empowering 1 million families to commute better, work efficiently, and dream bigger.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">0% Paperwork & Hassle</h2>
              <p>
                We believe the future of finance is completely digital. We are actively refining our AI underwriting and digital KYC processes to eliminate physical paperwork entirely, making loan approvals instant and seamless from any smartphone.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">100% Customer Satisfaction</h2>
              <p>
                Our relationship doesn't end when the loan is disbursed; it begins there. We are committed to providing empathetic, 24/7 support and entirely transparent fee structures to ensure every customer feels valued and respected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
