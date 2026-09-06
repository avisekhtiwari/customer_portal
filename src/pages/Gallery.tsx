

const images = [
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
  "https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=80",
  "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Gallery</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Glimpses of our community, events, and the smiles we've helped create.
        </p>
      </div>

      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-72">
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
