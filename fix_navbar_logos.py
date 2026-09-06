import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/layout/Navbar.tsx"
with open(filepath, "r") as f:
    content = f.read()

# 1. Top Navbar Logo
# Hide the entire text column on mobile
old_top_logo = """
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm" />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900 leading-none">
                  RITIKA
                </span>
                <span className="font-bold text-[10px] md:text-xs text-black uppercase tracking-wider mt-0.5 bg-[#FFD700] px-1 hidden md:inline-block w-max">
                  Financial Corporation
                </span>
              </div>
            </Link>
"""

new_top_logo = """
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm" />
              <div className="hidden md:flex flex-col">
                <span className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900 leading-none">
                  RITIKA
                </span>
                <span className="font-bold text-[10px] md:text-xs text-black uppercase tracking-wider mt-0.5 bg-[#FFD700] px-1 inline-block w-max">
                  Financial Corporation
                </span>
              </div>
            </Link>
"""

content = content.replace(old_top_logo.strip(), new_top_logo.strip())

# 2. Mobile Sidebar Logo
# Show BOTH RITIKA and Financial Corporation unconditionally
old_sidebar_logo = """
                <div className="flex flex-col items-start ml-2">
                  <span className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900 leading-none">
                    RITIKA
                  </span>
                  <span className="font-bold text-[9px] md:text-[10px] text-black uppercase tracking-wider mt-0.5 bg-[#FFD700] px-1 py-0.5 hidden md:inline-block w-max">
                    Financial Corporation
                  </span>
                </div>
"""

new_sidebar_logo = """
                <div className="flex flex-col items-start ml-2">
                  <span className="font-extrabold text-xl md:text-2xl tracking-tight text-gray-900 leading-none">
                    RITIKA
                  </span>
                  <span className="font-bold text-[9px] md:text-[10px] text-black uppercase tracking-wider mt-0.5 bg-[#FFD700] px-1 py-0.5 inline-block w-max">
                    Financial Corporation
                  </span>
                </div>
"""

content = content.replace(old_sidebar_logo.strip(), new_sidebar_logo.strip())

with open(filepath, "w") as f:
    f.write(content)

print("Fixed Navbar Logos")
