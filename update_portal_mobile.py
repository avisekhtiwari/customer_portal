import re

with open('src/pages/PortalPreview.tsx', 'r') as f:
    content = f.read()

# 1. Add scroll state for mobile nav in PortalPreview
state_hook = """export default function PortalPreview() {
  const location = useLocation();
  const [showMobileNav, setShowMobileNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Only track scroll on the main scrollable container for the portal
    const handleScroll = (e) => {
      const currentScrollY = e.target.scrollTop;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowMobileNav(false);
      } else {
        setShowMobileNav(true);
      }
      setLastScrollY(currentScrollY);
    };
    
    const scrollContainer = document.getElementById('portal-scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [lastScrollY]);"""

content = re.sub(r'export default function PortalPreview\(\) \{\n\s*const location = useLocation\(\);', state_hook, content)

# 2. Add id="portal-scroll-container" to the main element and padding top for mobile top bar
content = content.replace(
    '<main className="flex-1 md:ml-72 p-6 md:p-12 relative z-0 h-screen overflow-y-auto">', 
    '<main id="portal-scroll-container" className="flex-1 md:ml-72 p-6 pt-24 md:p-12 relative z-0 h-screen overflow-y-auto overflow-x-hidden">'
)

# 3. Add Mobile Top Bar just above <main>
mobile_top_bar = """
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-xl border-b border-gray-200 z-50 flex items-center px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
            <img src="/logo.jpeg" alt="Logo" className="w-full h-full rounded-full object-cover" />
          </div>
          <span className="text-lg font-black tracking-tighter text-[#04407E] uppercase">Ritika Financial Corp</span>
        </div>
      </div>
"""
content = content.replace('{/* Main Content */}', mobile_top_bar + '\n      {/* Main Content */}')

# 4. Update the bottom mobile nav bar to be floating, rounded, and auto-hide
old_bottom_nav = '<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 p-4 pb-safe z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">'
new_bottom_nav = '<div className={`md:hidden fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-white/95 backdrop-blur-xl border border-gray-200 p-4 z-50 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300 ${showMobileNav ? "bottom-6 opacity-100" : "-bottom-24 opacity-0"}`}>'
content = content.replace(old_bottom_nav, new_bottom_nav)

# 5. Fix the center icon (make it white and rounded-full)
center_icon_old = '<button key="scan" className="relative -top-6 w-14 h-14 bg-gradient-to-br from-[#04407E] to-[#032c57] flex items-center justify-center shadow-[0_10px_20px_rgba(212,175,55,0.3)]">'
center_icon_new = '<button key="scan" className="relative -top-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#04407E] to-[#032c57] flex items-center justify-center shadow-[0_10px_20px_rgba(4,64,126,0.3)] border-4 border-white">'
content = content.replace(center_icon_old, center_icon_new)

# Fix the icon color itself from text-[#04407E] to text-white
content = content.replace('<item.icon className="w-6 h-6 text-[#04407E]" fill="currentColor" />', '<item.icon className="w-6 h-6 text-white" />')

with open('src/pages/PortalPreview.tsx', 'w') as f:
    f.write(content)
print("Portal mobile view updated.")
