import os

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/layout/Navbar.tsx"
with open(filepath, "r") as f:
    content = f.read()

start_marker = "{/* Mobile Sidebar (Hamburger Menu) */}"
end_marker = "{/* Premium Attached Bottom Navigation Bar (Mobile Only) */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

new_sidebar = """{/* Mobile Sidebar (Hamburger Menu) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[300px] bg-white z-[70] shadow-[5px_0_15px_rgba(0,0,0,0.1)] flex flex-col"
            >
              {/* Header */}
              <div className="p-4 flex items-center gap-4 border-b border-gray-200 bg-white">
                <button onClick={() => setIsSidebarOpen(false)} className="p-1 text-gray-800 hover:text-black">
                  <X className="w-7 h-7" strokeWidth={1.5} />
                </button>
                <div className="flex flex-col items-start ml-2">
                  <span className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900 leading-none">
                    RITIKA
                  </span>
                  <span className="font-bold text-[9px] md:text-[10px] text-black uppercase tracking-wider mt-0.5 bg-[#FFD700] px-1 py-0.5 inline-block w-max">
                    Financial Corporation
                  </span>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex-1 overflow-y-auto pb-24 scrollbar-thin scrollbar-thumb-yellow-400 bg-white">
                <div className="flex flex-col">
                  
                  <div className="border-b border-gray-100">
                    <Link onClick={() => setIsSidebarOpen(false)} to="/" className="w-full flex items-center p-4 hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#FFD700] rounded-sm w-3 h-3 z-0 opacity-80 group-hover:opacity-100"></div>
                          <Home className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[15px] font-normal text-gray-800 group-hover:text-black">Home</span>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="border-b border-gray-100">
                    <Link onClick={() => setIsSidebarOpen(false)} to="/emi-calculator" className="w-full flex items-center p-4 hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#FFD700] rounded-sm w-3 h-3 z-0 opacity-80 group-hover:opacity-100"></div>
                          <Calculator className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[15px] font-normal text-gray-800 group-hover:text-black">EMI Calculator</span>
                      </div>
                    </Link>
                  </div>

                  <div className="border-b border-gray-100">
                    <Link onClick={() => setIsSidebarOpen(false)} to="/interest-rates" className="w-full flex items-center p-4 hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#FFD700] rounded-sm w-3 h-3 z-0 opacity-80 group-hover:opacity-100"></div>
                          <Compass className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[15px] font-normal text-gray-800 group-hover:text-black">Interest Rates</span>
                      </div>
                    </Link>
                  </div>

                  {/* Expandable: Dealers & Staff */}
                  <div className="border-b border-gray-100">
                    <div className="w-full flex items-center justify-between p-4 bg-white cursor-default">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#FFD700] rounded-sm w-3 h-3 z-0 opacity-80"></div>
                          <User className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[15px] font-normal text-gray-800">Dealers & Staff</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                    </div>
                    <div className="bg-gray-50/50 pl-[3.25rem] py-2 flex flex-col">
                      <Link onClick={() => setIsSidebarOpen(false)} to="/dealers" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Our Dealers</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/presence" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Our Presence</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/staff" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Our Staff</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/dealer-reviews" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Dealer Testimonials</Link>
                    </div>
                  </div>

                  {/* Expandable: About Us */}
                  <div className="border-b border-gray-100">
                    <div className="w-full flex items-center justify-between p-4 bg-white cursor-default">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#FFD700] rounded-sm w-3 h-3 z-0 opacity-80"></div>
                          <Bell className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[15px] font-normal text-gray-800">About Us</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                    </div>
                    <div className="bg-gray-50/50 pl-[3.25rem] py-2 flex flex-col">
                      <Link onClick={() => setIsSidebarOpen(false)} to="/about" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Company Overview</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/gallery" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Our Gallery</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/goals" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Our Goals</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/reviews" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Our Reviews</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/stories" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Our Stories</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/founders" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Our Founders</Link>
                    </div>
                  </div>

                  {/* Expandable: Contact */}
                  <div className="border-b border-gray-100">
                    <div className="w-full flex items-center justify-between p-4 bg-white cursor-default">
                      <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-6 h-6">
                          <div className="absolute top-1 -right-1 bg-[#FFD700] rounded-sm w-3 h-3 z-0 opacity-80"></div>
                          <MessageSquare className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
                        </div>
                        <span className="text-[15px] font-normal text-gray-800">Contact & Queries</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                    </div>
                    <div className="bg-gray-50/50 pl-[3.25rem] py-2 flex flex-col">
                      <Link onClick={() => setIsSidebarOpen(false)} to="/contact" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Contact Us</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/submit-query" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Submit a Query</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/query-status" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Check Query Reply</Link>
                      <Link onClick={() => setIsSidebarOpen(false)} to="/purchase-bike" className="py-2.5 text-[14px] text-gray-600 hover:text-black">Purchase a Bike</Link>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Yellow Right Border mimicking scrollbar */}
              <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-[#FFD700] pointer-events-none z-20"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      """

content = content[:start_idx] + new_sidebar + content[end_idx:]

with open(filepath, "w") as f:
    f.write(content)

print("Navbar updated.")
