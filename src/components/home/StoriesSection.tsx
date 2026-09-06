import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StoriesSection() {
  return (
    <section className="py-10 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Stories</h2>
          <p className="mt-4 text-gray-600">Real journeys of people who achieved their dreams with us.</p>
        </div>
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800&auto=format&fit=crop" alt="Customer success story" className="w-full h-full object-cover min-h-[300px]" />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-[#9e7146] font-bold text-sm tracking-wider uppercase mb-2">Customer Spotlight</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">From Delivery Boy to Fleet Owner</h3>
            <p className="text-gray-600 mb-6">
              Rahul started with a single financed scooter for his delivery job. With our easy top-up loans, he now owns a fleet of 5 vehicles, providing employment to others in his community.
            </p>
            <Link to="/stories" className="text-[#04407E] font-bold flex items-center hover:underline w-fit">
              Read full story <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
