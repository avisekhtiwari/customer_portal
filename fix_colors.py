import os
import re

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Dark mode backgrounds to light mode
    content = content.replace('bg-[#111214]', 'bg-gray-50')
    content = content.replace('bg-[#1a1b1e]', 'bg-white')
    content = content.replace('bg-[#141517]/80', 'bg-white/90')
    content = content.replace('bg-[#141517]/90', 'bg-white/95')
    content = content.replace('bg-[#141517]', 'bg-white')
    
    # White texts to Navy
    content = content.replace('text-white', 'text-[#04407E]')
    # Exception for text on Navy buttons
    content = content.replace('text-black bg-[#d4af37]', 'text-white bg-[#04407E]')
    content = content.replace('text-black', 'text-[#04407E]')
    
    # Borders and dividers
    content = content.replace('border-white/5', 'border-gray-200')
    content = content.replace('border-white/10', 'border-gray-200')
    content = content.replace('divide-white/5', 'divide-gray-200')
    
    # Subtle backgrounds
    content = content.replace('bg-white/5', 'bg-gray-100')
    content = content.replace('bg-white/10', 'bg-gray-200')
    content = content.replace('bg-black/20', 'bg-gray-50')
    
    # Gold/Accent to Navy
    content = content.replace('#d4af37', '#04407E')
    content = content.replace('#e5c158', '#055bba')
    content = content.replace('#aa8c2c', '#032c57')
    
    # Update Logo/Name in PortalPreview
    content = content.replace('<Zap className="w-6 h-6 text-[#04407E]" fill="currentColor" />', '<img src="/logo.jpeg" alt="Logo" className="w-8 h-8 rounded-full object-cover" />')
    content = content.replace('<Zap className="w-6 h-6 text-[#04407E]"', '<img src="/logo.jpeg" alt="Logo" className="w-8 h-8 rounded-full object-cover"')
    
    with open(filepath, 'w') as f:
        f.write(content)

replace_in_file('src/pages/PortalPreview.tsx')
replace_in_file('src/components/layout/Navbar.tsx')

print("Colors and logo updated.")
