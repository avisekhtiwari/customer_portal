import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages/PortalPreview.tsx"
with open(filepath, "r") as f:
    content = f.read()

# 1. Fix the Close Button in Sidebar Header
old_header = """
        {/* Header */}
        <div className="p-5 flex items-center justify-between border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-start ml-2">
              <span className="font-extrabold text-2xl tracking-tight text-gray-900 leading-none">
                RITIKA
              </span>
              <span className="font-bold text-[10px] text-black uppercase tracking-wider mt-0.5 bg-[#FFD700] px-1 py-0.5 inline-block w-max">
                Financial Corporation
              </span>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-1 text-gray-500 hover:text-black">
            <X className="w-6 h-6" />
          </button>
        </div>
"""

new_header = """
        {/* Header */}
        <div className="p-4 flex items-center gap-4 border-b border-gray-100 bg-white">
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-1 text-gray-800 hover:text-black">
            <X className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <div className="flex flex-col items-start ml-2">
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900 leading-none">
              RITIKA
            </span>
            <span className="font-bold text-[9px] md:text-[10px] text-black uppercase tracking-wider mt-0.5 bg-[#FFD700] px-1 py-0.5 hidden md:inline-block w-max">
              Financial Corporation
            </span>
          </div>
        </div>
"""

# Try to replace header
content = re.sub(
    r'\{\/\* Header \*\/\}.*?<\/button>\n        <\/div>',
    new_header.strip(),
    content,
    flags=re.DOTALL
)

# 2. Add the Premium Attached Bottom Navigation Bar at the end of the return statement
bottom_nav = """
      {/* Premium Attached Bottom Navigation Bar (Mobile Only) - Never Hides */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        <div className="bg-white rounded-t-3xl border-t-2 border-[#FFD700] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] px-6 pt-3 pb-6 flex justify-between items-center relative">
          {[
            { name: 'Home', path: '/portal/dashboard', icon: LayoutDashboard },
            { name: 'Loans', path: '/portal/loans', icon: Wallet },
            { name: 'EMI', path: '/portal/emi', icon: Calendar },
            { name: 'Logout', path: '/', icon: LogOut, isLogout: true }
          ].map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/portal/dashboard' && link.path !== '/' && location.pathname.startsWith(link.path));
            
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => link.isLogout && localStorage.removeItem('ritika_user')}
                className="relative z-10 flex flex-col items-center justify-center gap-1 w-14 group"
              >
                <div
                  className={cn(
                    "flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300",
                    isActive ? "bg-[#FFD700] text-black shadow-md scale-110" : "bg-transparent text-gray-400 group-hover:text-gray-900",
                    link.isLogout && "group-hover:text-red-500"
                  )}
                >
                  <link.icon className="w-5 h-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={cn(
                  "text-[9px] font-bold uppercase tracking-wider transition-colors text-center w-full truncate", 
                  isActive ? "text-[#FFD700]" : "text-gray-400",
                  link.isLogout && "group-hover:text-red-500"
                )}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
"""

# Insert before the final </div>
content = content.replace("</main>\n    </div>", f"</main>\n{bottom_nav}\n    </div>")

with open(filepath, "w") as f:
    f.write(content)

print("Modified PortalPreview again")
