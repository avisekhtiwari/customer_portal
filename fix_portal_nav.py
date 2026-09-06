import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages/PortalPreview.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Truncate everything after </main>
main_end_idx = content.find("</main>")
if main_end_idx != -1:
    content = content[:main_end_idx + 7] # include </main>

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
    </div>
  );
}
"""

with open(filepath, "w") as f:
    f.write(content + bottom_nav)

print("Fixed Portal Bottom Nav properly")
