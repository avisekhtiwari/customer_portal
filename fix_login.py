import re

with open('src/pages/Login.tsx', 'r') as f:
    content = f.read()

# Fix invisible text on white background
content = content.replace('text-white/60 hover:text-white', 'text-[#04407E]/60 hover:text-[#04407E]')
content = content.replace('text-white/40', 'text-[#04407E]/40')
content = content.replace('bg-primary flex flex-col', 'bg-gray-50 flex flex-col')
content = content.replace('bg-primary mx-auto flex items-center justify-center', 'bg-[#04407E] mx-auto flex items-center justify-center')

with open('src/pages/Login.tsx', 'w') as f:
    f.write(content)
print("Login page text colors fixed.")
