import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/App.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Hide Navbar on /login
content = content.replace(
    "const isPortal = location.pathname.startsWith('/portal');",
    "const isPortal = location.pathname.startsWith('/portal');\n  const isLogin = location.pathname === '/login';"
)

content = content.replace(
    "{!isPortal && <Navbar />}",
    "{!isPortal && !isLogin && <Navbar />}"
)

# Hide Footer on /login
content = content.replace(
    "{!isPortal && <Footer />}",
    "{!isPortal && !isLogin && <Footer />}"
)

# Add pb-24 on md:pb-0 to main to prevent bottom nav overlap
content = content.replace(
    '<main className="flex-grow">',
    '<main className="flex-grow pb-24 md:pb-0">'
)

with open(filepath, "w") as f:
    f.write(content)

print("Fixed App.tsx")
