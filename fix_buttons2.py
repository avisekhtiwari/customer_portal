import re

with open('src/pages/PortalPreview.tsx', 'r') as f:
    content = f.read()

new_components = """
const Offers = () => {
  return (
    <div className="space-y-8 pb-20 md:pb-0">
      <h2 className="text-3xl font-bold tracking-tight text-[#04407E] mb-1">Pre-approved Offers</h2>
      <p className="text-gray-600 font-medium">Exclusive deals handpicked for you based on your repayment history.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard className="p-6 border border-[#04407E]/20 bg-gradient-to-br from-[#04407E]/5 to-transparent">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-[#04407E] text-xl">Upgrade Your Ride</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">PRE-APPROVED</span>
          </div>
          <p className="text-gray-600 mb-6">Get up to ₹1,20,000 for a new two-wheeler with zero processing fee.</p>
          <button onClick={() => alert('Offer claimed successfully! Our representative will contact you shortly.')} className="px-6 py-2 bg-[#04407E] text-white rounded-full font-semibold hover:bg-[#033060] transition-colors w-full">
            Claim Offer
          </button>
        </GlassCard>
        
        <GlassCard className="p-6 border border-gray-200">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-[#04407E] text-xl">Top-up Loan</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">ELIGIBLE</span>
          </div>
          <p className="text-gray-600 mb-6">Need quick cash? Avail a top-up loan of ₹25,000 against your existing active loan.</p>
          <button onClick={() => alert('Top-up loan application started!')} className="px-6 py-2 border-2 border-[#04407E] text-[#04407E] rounded-full font-semibold hover:bg-gray-50 transition-colors w-full">
            Apply Now
          </button>
        </GlassCard>
      </div>
    </div>
  );
};

const ApplyLoan = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-8 pb-20 md:pb-0 flex flex-col items-center justify-center text-center py-20">
      <div className="w-24 h-24 rounded-full bg-[#04407E]/10 flex items-center justify-center mb-4">
        <CreditCard className="w-10 h-10 text-[#04407E]" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-[#04407E] mb-1">Apply for a New Loan</h2>
      <p className="text-gray-600 font-medium max-w-md mx-auto">You are just a few clicks away from financing your next dream vehicle. Let's get started.</p>
      <button onClick={() => navigate('/finance')} className="px-8 py-3 bg-[#04407E] text-white rounded-full font-bold hover:bg-[#033060] transition-colors mt-4">
        Start Application
      </button>
    </div>
  );
};
"""

content = content.replace('export default function PortalPreview() {', new_components + '\nexport default function PortalPreview() {')

with open('src/pages/PortalPreview.tsx', 'w') as f:
    f.write(content)
