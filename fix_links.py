import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/layout/Navbar.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Fix the broken Links
content = content.replace(
    '<Link to="/dealers" className="flex items-center text-gray-200 hover:text-[#dcb285] transition-colors py-2">\n                Dealers & Staff <ChevronDown className="w-4 h-4 ml-1.5 opacity-70" />\n              </button>',
    '<Link to="/dealers" className="flex items-center text-gray-200 hover:text-[#dcb285] transition-colors py-2">\n                Dealers & Staff <ChevronDown className="w-4 h-4 ml-1.5 opacity-70" />\n              </Link>'
)

content = content.replace(
    '<Link to="/dealers" className="flex items-center text-gray-200 hover:text-[#dcb285] transition-colors py-2">\n                About Us <ChevronDown className="w-4 h-4 ml-1.5 opacity-70" />\n              </button>',
    '<Link to="/about" className="flex items-center text-gray-200 hover:text-[#dcb285] transition-colors py-2">\n                About Us <ChevronDown className="w-4 h-4 ml-1.5 opacity-70" />\n              </Link>'
)

content = content.replace(
    '<Link to="/dealers" className="flex items-center text-gray-200 hover:text-[#dcb285] transition-colors py-2">\n                Contact & Queries <ChevronDown className="w-4 h-4 ml-1.5 opacity-70" />\n              </button>',
    '<Link to="/contact" className="flex items-center text-gray-200 hover:text-[#dcb285] transition-colors py-2">\n                Contact & Queries <ChevronDown className="w-4 h-4 ml-1.5 opacity-70" />\n              </Link>'
)

with open(filepath, "w") as f:
    f.write(content)

print("Fixed links")
