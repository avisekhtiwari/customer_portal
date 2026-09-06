import { Link } from 'react-router-dom';

export default function GallerySection() {
  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Gallery</h2>
        <p className="text-gray-600 mb-12">Glimpses of our events, branches, and happy customers.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          <img src="https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&auto=format&fit=crop" alt="Gallery highlight 1" className="w-full h-64 object-cover rounded-2xl shadow-sm" />
          <img src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&auto=format&fit=crop" alt="Gallery highlight 2" className="w-full h-64 object-cover rounded-2xl shadow-sm" />
        </div>
        
        <Link to="/gallery" className="inline-block bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-3 px-10 rounded-lg transition-all shadow-sm">
          View More
        </Link>
      </div>
    </section>
  );
}
