import os

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages/PortalPreview.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Replace the desktop sidebar in PortalPreview
old_sidebar_start = "{/* Sidebar (Desktop) */}"
old_sidebar_end = "{/* Mobile Top Bar */}"

start_idx = content.find(old_sidebar_start)
end_idx = content.find(old_sidebar_end)

new_sidebar = """{/* Sidebar (Desktop) */}
      <aside className="w-[300px] bg-white border-r border-gray-200 hidden md:flex flex-col fixed h-screen z-10 shadow-[5px_0_15px_rgba(0,0,0,0.05)]">
        
        {/* Header */}
        <div className="p-5 flex items-center gap-3 border-b border-gray-100 bg-white">
          <div className="flex flex-col items-start ml-2">
            <span className="font-extrabold text-2xl tracking-tight text-gray-900 leading-none">
              RITIKA
            </span>
            <span className="font-bold text-[10px] text-black uppercase tracking-wider mt-0.5 bg-[#FFD700] px-1 py-0.5 inline-block w-max">
              Financial Corporation
            </span>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400">
          <nav className="flex flex-col bg-white">
            {menu.map((item) => {
              const isActive = location.pathname.includes(item.path) || (item.path === '/portal/dashboard' && location.pathname === '/portal');
              return (
                <div key={item.name} className="border-b border-gray-100">
                  <Link
                    to={item.path}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative flex items-center justify-center w-6 h-6">
                        <div className="absolute top-1 -right-1 bg-[#FFD700] rounded-sm w-3 h-3 z-0 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        <item.icon className={cn("w-5 h-5 relative z-10 transition-colors", isActive ? "text-[#dcb285]" : "text-gray-800 group-hover:text-black")} strokeWidth={isActive ? 2 : 1.5} />
                      </div>
                      <span className={cn("text-[15px] transition-colors", isActive ? "font-bold text-gray-900" : "font-normal text-gray-700 group-hover:text-gray-900")}>
                        {item.name}
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
        
        <div className="bg-gray-50 border-t border-gray-100 pb-4">
          <div className="border-b border-gray-100">
            <Link to="/portal/profile" className="w-full flex items-center p-4 hover:bg-gray-100 transition-colors group">
              <div className="relative flex items-center justify-center w-6 h-6 mr-4">
                <div className="absolute top-1 -right-1 bg-[#FFD700] rounded-sm w-3 h-3 z-0 opacity-80"></div>
                <User className="w-5 h-5 relative z-10 text-gray-800" strokeWidth={1.5} />
              </div>
              <span className="text-[15px] font-normal text-gray-700">Profile</span>
            </Link>
          </div>
          <div className="border-b border-gray-100">
            <Link to="/" onClick={() => localStorage.removeItem('ritika_user')} className="w-full flex items-center p-4 hover:bg-red-50 transition-colors group">
              <div className="relative flex items-center justify-center w-6 h-6 mr-4">
                <div className="absolute top-1 -right-1 bg-red-400 rounded-sm w-3 h-3 z-0 opacity-80"></div>
                <LogOut className="w-5 h-5 relative z-10 text-red-600" strokeWidth={1.5} />
              </div>
              <span className="text-[15px] font-normal text-red-600">Logout</span>
            </Link>
          </div>
        </div>

        {/* Yellow Right Border mimicking scrollbar track style */}
        <div className="absolute top-0 right-0 bottom-0 w-1.5 bg-[#FFD700] pointer-events-none z-20"></div>
      </aside>

      """

content = content[:start_idx] + new_sidebar + content[end_idx:]

with open(filepath, "w") as f:
    f.write(content)

print("Portal Preview updated.")
