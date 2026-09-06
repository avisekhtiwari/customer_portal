import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages/PortalPreview.tsx"
with open(filepath, "r") as f:
    content = f.read()

# 1. Top Navbar Logo (Portal)
old_top_logo = """
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSidebarOpen(true)} className="p-1 -ml-1 text-gray-800 hover:text-black">
            <Menu className="w-7 h-7" />
          </button>
          <Link to="/" className="w-8 h-8 rounded-full overflow-hidden shadow-sm">
            <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
          </Link>
        </div>
"""
# Nothing to hide here because it doesn't show text on mobile anyway!

# 2. Mobile Sidebar Logo (Portal)
old_sidebar_logo = """
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

new_sidebar_logo = """
        {/* Header */}
        <div className="p-4 flex items-center gap-4 border-b border-gray-100 bg-white">
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-1 text-gray-800 hover:text-black">
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
"""

content = content.replace(old_sidebar_logo.strip(), new_sidebar_logo.strip())

with open(filepath, "w") as f:
    f.write(content)

print("Fixed Portal Logos")
