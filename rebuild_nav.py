import os
import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/layout/Navbar.tsx"
with open(filepath, "r") as f:
    content = f.read()

# 1. Add isSidebarOpen state
if "const [isSidebarOpen" not in content:
    content = content.replace("const [lastScrollY, setLastScrollY] = useState(0);", "const [lastScrollY, setLastScrollY] = useState(0);\n  const [isSidebarOpen, setIsSidebarOpen] = useState(false);")

# 2. Add X to imports
if "X " not in content:
    content = content.replace("ChevronDown } from 'lucide-react';", "ChevronDown, X } from 'lucide-react';")

# 3. Add Home link and hide desktop nav on mobile
nav_start = '<nav className="flex justify-center space-x-8 text-sm font-medium py-3 px-4">'
new_nav_start = """<nav className="hidden md:flex justify-center space-x-8 text-sm font-medium py-3 px-4">
            <Link to="/" className="flex items-center text-white hover:text-[#dcb285] transition-colors py-2">Home</Link>"""
content = content.replace(nav_start, new_nav_start)

# 4. Add Hamburger Menu to Header
header_brand = '<Link to="/" className="flex items-center gap-2 group">'
new_header_brand = """<div className="flex items-center gap-4">
            <button 
              className="md:hidden text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/" className="flex items-center gap-2 group">"""
content = content.replace(header_brand, new_header_brand)

# Fix trailing div for header brand since I added a wrapper div
header_brand_end = """</span>
            </Link>"""
new_header_brand_end = """</span>
            </Link>
          </div>"""
content = content.replace(header_brand_end, new_header_brand_end)


# 5. Overhaul Mobile Bottom Bar & Add Sidebar
# Replace everything from `</header>` to the end of the component
import re
pattern = r'</header>.*?(?=export default function Navbar)'
# Wait, I just want to replace from `</header>` down to `</>` at the end.
parts = content.split("</header>")
if len(parts) >= 2:
    header_end = parts[0] + "</header>\n"
    
    sidebar_and_bottom = """
      {/* Mobile Sidebar (Hamburger Menu) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-[70] md:hidden shadow-2xl flex flex-col overflow-y-auto"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <span className="font-extrabold text-[#04407E] text-2xl tracking-tighter">RITIKA</span>
                <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-black">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 py-4 px-4 space-y-1">
                <Link onClick={() => setIsSidebarOpen(false)} to="/" className="block px-4 py-3 font-bold text-gray-900 rounded-xl hover:bg-gray-50">Home</Link>
                <Link onClick={() => setIsSidebarOpen(false)} to="/emi-calculator" className="block px-4 py-3 font-bold text-gray-900 rounded-xl hover:bg-gray-50">EMI Calculator</Link>
                <Link onClick={() => setIsSidebarOpen(false)} to="/interest-rates" className="block px-4 py-3 font-bold text-gray-900 rounded-xl hover:bg-gray-50">Interest Rates</Link>
                
                <div className="py-2 mt-4 border-t border-gray-100">
                  <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Dealers & Staff</p>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/dealers" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Dealers</Link>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/presence" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Presence</Link>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/staff" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Staff</Link>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/dealer-reviews" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Dealer Testimonials</Link>
                </div>

                <div className="py-2 border-t border-gray-100">
                  <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">About Us</p>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/about" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Company Overview</Link>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/gallery" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Gallery</Link>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/goals" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Goals</Link>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/reviews" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Reviews</Link>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/stories" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Stories</Link>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/founders" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Our Founders</Link>
                </div>

                <div className="py-2 border-t border-gray-100 mb-8">
                  <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Contact & Queries</p>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/contact" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Contact Us</Link>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/submit-query" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Submit a Query</Link>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/query-status" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Check Query Reply</Link>
                  <Link onClick={() => setIsSidebarOpen(false)} to="/purchase-bike" className="block px-4 py-2 font-medium text-gray-700 hover:text-[#dcb285]">Purchase a Bike</Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Premium Attached Bottom Navigation Bar (Mobile Only) */}
      <nav className={cn(
        "md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300", 
        showMobileNav ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="bg-white rounded-t-3xl border-t-2 border-[#dcb285] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] px-6 pt-3 pb-6 flex justify-between items-center relative">
          {mobileNavLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative z-10 flex flex-col items-center justify-center gap-1 w-14"
              >
                <div
                  className={cn(
                    "flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300",
                    isActive ? "bg-[#dcb285] text-black shadow-md scale-110" : "bg-transparent text-gray-400 hover:text-gray-900"
                  )}
                >
                  <link.icon className="w-5 h-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={cn("text-[10px] font-bold transition-colors text-center w-full truncate", isActive ? "text-[#dcb285]" : "text-gray-400")}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
"""
    content = header_end + sidebar_and_bottom

with open(filepath, "w") as f:
    f.write(content)

print("Navbar mobile styling applied.")
