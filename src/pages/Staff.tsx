export default function Staff() {
  const staffMembers = [
    { name: "Ananya Desai", role: "Head of Dealer Relations", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
    { name: "Vikram Mehta", role: "Regional Manager - North", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
    { name: "Priya Sharma", role: "Regional Manager - South", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
    { name: "Rahul Verma", role: "Lead Underwriter", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 py-12 md:py-16 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">Our Staff</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          The dedicated professionals working tirelessly behind the scenes to process your loans instantly.
        </p>
      </div>

      <section className="py-10 md:py-12 bg-white">
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
