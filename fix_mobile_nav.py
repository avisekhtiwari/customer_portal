import os

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/layout/Navbar.tsx"
with open(filepath, "r") as f:
    content = f.read()

old_nav = """const mobileNavLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Bikes', path: '/bikes', icon: Compass },
  { name: 'EMI', path: '/emi-calculator', icon: Calculator },
  { name: 'Contact', path: '/contact', icon: MessageSquare },
  { name: 'Login', path: '/login', icon: User },
];"""

new_nav = """const mobileNavLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'EMI', path: '/emi-calculator', icon: Calculator },
  { name: 'Dealers', path: '/dealers', icon: User },
  { name: 'Contact', path: '/contact', icon: MessageSquare },
  { name: 'Portal', path: '/portal', icon: Compass },
];"""

content = content.replace(old_nav, new_nav)

with open(filepath, "w") as f:
    f.write(content)

print("Mobile nav updated.")
