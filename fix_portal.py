import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages/PortalPreview.tsx"
with open(filepath, "r") as f:
    content = f.read()

# 1. We need to add state for isSidebarOpen
if "const [isSidebarOpen, setIsSidebarOpen] = useState(false);" not in content:
    content = content.replace(
        "export default function PortalPreview() {\n  const location = useLocation();",
        "export default function PortalPreview() {\n  const location = useLocation();\n  const [isSidebarOpen, setIsSidebarOpen] = useState(false);"
    )
    
# 2. Add X and Menu to lucide imports
if "Menu" not in content and "X" not in content:
    content = content.replace(
        "import { LayoutDashboard, Wallet, Calendar, CreditCard, Zap, FileText, MessageSquare, Bell, User, LogOut } from 'lucide-react';",
        "import { LayoutDashboard, Wallet, Calendar, CreditCard, Zap, FileText, MessageSquare, Bell, User, LogOut, Menu, X } from 'lucide-react';"
    )
    
# 3. Modify the Mobile Top Bar to have a Hamburger
mobile_top_bar = """
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsSidebarOpen(true)} className="p-1 -ml-1 text-gray-800 hover:text-black">
            <Menu className="w-7 h-7" />
          </button>
          <Link to="/" className="w-8 h-8 rounded-full overflow-hidden shadow-sm">
            <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-cover" />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <Bell className="w-4 h-4 text-gray-600" />
          </div>
        </div>
      </div>
"""
# Replace old mobile top bar
content = re.sub(r'\{\/\* Mobile Top Bar \*\/\}.*?\{\/\* Main Content \*\/\}', mobile_top_bar + "\n\n      {/* Main Content */}", content, flags=re.DOTALL)


# 4. Modify the Aside to be responsive (hidden on mobile unless isSidebarOpen is true)
# Old aside definition
# <aside className="w-[300px] bg-white border-r border-gray-200 hidden md:flex flex-col fixed h-screen z-10 shadow-[5px_0_15px_rgba(0,0,0,0.05)]">

# New aside definition (Framer Motion not strictly necessary, we can use simple Tailwind translate)
aside_definition = """
      {/* Sidebar Overlay (Mobile) */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "w-[300px] bg-white border-r border-gray-200 flex flex-col fixed h-screen z-50 shadow-[5px_0_15px_rgba(0,0,0,0.05)] transition-transform duration-300",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        
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

# Replace the aside tag and its header
content = re.sub(
    r'\{\/\* Sidebar \(Desktop\) \*\/\}.*?\{\/\* Navigation \*\/\}',
    aside_definition + "\n        {/* Navigation */}",
    content,
    flags=re.DOTALL
)

# Ensure clicks on links close the sidebar on mobile
content = content.replace(
    'to={item.path}',
    'to={item.path}\n                    onClick={() => setIsSidebarOpen(false)}'
)
content = content.replace(
    'to="/portal/profile"',
    'to="/portal/profile" onClick={() => setIsSidebarOpen(false)}'
)

# 5. Remove the Bottom Nav (CRED Style)
content = re.sub(
    r'\{\/\* Mobile Bottom Nav \(CRED Style\) \*\/\}.*?<\/div>\n    <\/div>',
    '</div>\n  </div>',
    content,
    flags=re.DOTALL
)

# 6. Change all colors in PortalPreview to #FFD700
content = content.replace('#dcb285', '#FFD700')
content = content.replace('#9e7146', '#FFD700')
content = content.replace('#04407E', '#FFD700')
# Adjust hover states if they are #FFD700 too (to #F2C900)
content = content.replace('hover:bg-[#FFD700]', 'hover:bg-[#F2C900]')
# Ensure main text isn't yellow on yellow, wait, some text was brown, now it will be yellow. Yellow text on white is hard to read.
# If text was #9e7146 (brown) on white, we should maybe make it black, but user said "color will be yellow". Let's stick to their request.
content = content.replace('text-[#FFD700] font-semibold', 'text-black font-semibold') # Fix some text to black if it was brown

# Fix padding for Main content on mobile to account for the top bar (pt-20)
content = content.replace('className="flex-1 md:ml-72 p-6 pt-24 md:p-12 relative z-0 h-screen overflow-y-auto overflow-x-hidden"', 'className="flex-1 md:ml-[300px] p-4 pt-20 md:p-12 relative z-0 h-screen overflow-y-auto overflow-x-hidden"')
content = content.replace('md:ml-72', 'md:ml-[300px]')

with open(filepath, "w") as f:
    f.write(content)

print("Modified PortalPreview")
