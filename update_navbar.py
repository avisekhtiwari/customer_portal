import re

with open('src/components/layout/Navbar.tsx', 'r') as f:
    content = f.read()

# Replace Logo block
logo_search = r'<div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-\[\#04407E\] font-bold text-xl tracking-tighter group-hover:scale-105 transition-transform">\s*RF\s*</div>'
logo_replacement = '<img src="/logo.jpeg" alt="Logo" className="w-10 h-10 rounded-full object-cover group-hover:scale-105 transition-transform shadow-md" />'
content = re.sub(logo_search, logo_replacement, content, flags=re.MULTILINE)

# Replace Name
name_search = r'Ritika <span className="text-\[\#04407E\]/70">Finance</span>'
name_replacement = 'Ritika Financial Corporation'
content = re.sub(name_search, name_replacement, content)

# Make the title text responsive because "Ritika Financial Corporation" is long
name_class_search = r'<span className="font-bold text-xl md:text-2xl tracking-tight text-\[\#04407E\]">'
name_class_replacement = '<span className="font-bold text-lg md:text-xl lg:text-2xl tracking-tight text-[#04407E] hidden sm:block">'
content = re.sub(name_class_search, name_class_replacement, content)

with open('src/components/layout/Navbar.tsx', 'w') as f:
    f.write(content)
print("Navbar updated.")
