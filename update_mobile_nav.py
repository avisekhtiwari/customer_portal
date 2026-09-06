import re

with open('src/components/layout/Navbar.tsx', 'r') as f:
    content = f.read()

# Add state for scroll direction
state_hook = """ const [isScrolled, setIsScrolled] = useState(false);
 const [showMobileNav, setShowMobileNav] = useState(true);
 const [lastScrollY, setLastScrollY] = useState(0);
 const [user, setUser] = useState<{name: string, initials: string} | null>(null);
 const location = useLocation();

 useEffect(() => {
 const handleScroll = () => {
 const currentScrollY = window.scrollY;
 if (currentScrollY > lastScrollY && currentScrollY > 50) {
 setShowMobileNav(false);
 } else {
 setShowMobileNav(true);
 }
 setLastScrollY(currentScrollY);
 setIsScrolled(currentScrollY > 20);
 };
 window.addEventListener('scroll', handleScroll, { passive: true });
 
 const userData = localStorage.getItem('ritika_user');
 if (userData) {
 setUser(JSON.parse(userData));
 } else {
 setUser(null);
 }

 return () => window.removeEventListener('scroll', handleScroll);
 }, [location.pathname, lastScrollY]);"""

content = re.sub(
    r'const \[isScrolled, setIsScrolled\] = useState\(false\);.*?\}, \[location\.pathname\]\);',
    state_hook,
    content,
    flags=re.DOTALL
)

# Make Ritika Financial Corporation visible on mobile
content = content.replace('text-lg md:text-xl lg:text-2xl tracking-tight text-[#04407E] hidden sm:block', 'text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight text-[#04407E]')

# Fix the mobile navigation classes to animate the hide/show
nav_tag = '<nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm z-50">'
nav_tag_new = '<nav className={cn("md:hidden fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm z-50 transition-all duration-300", showMobileNav ? "bottom-6 opacity-100" : "-bottom-24 opacity-0")}>'
content = content.replace(nav_tag, nav_tag_new)

# Fix the active icon color (blue on blue -> white on blue)
content = content.replace('isActive ? "text-[#04407E]" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"', 'isActive ? "text-white" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/50"')

# Make sure active pill is fully rounded and uses the right color if accent isn't mapping correctly.
content = content.replace('className="absolute inset-0 bg-accent shadow-md"', 'className="absolute inset-0 bg-[#04407E] shadow-md rounded-full"')

with open('src/components/layout/Navbar.tsx', 'w') as f:
    f.write(content)
print("Navbar mobile view updated.")
