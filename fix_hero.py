import re

with open('src/components/sections/HeroCarousel.tsx', 'r') as f:
    content = f.read()

# Fix text-white to text-[#04407E] for main headings and descriptions
content = content.replace('text-white text-xs', 'text-[#04407E] text-xs')
content = content.replace('text-white tracking-tight', 'text-[#04407E] tracking-tight')
content = content.replace('text-white/90', 'text-gray-700')
content = content.replace('text-white/70', 'text-gray-500')
content = content.replace('text-white/50', 'text-gray-400')

# Fix buttons outline text (Explore Bikes, Calculate EMI)
content = content.replace('text-white transition-colors', 'text-[#04407E] transition-colors')
content = content.replace('border-white', 'border-[#04407E]')
content = content.replace('border-white/50', 'border-[#04407E]/50')

# Fix Premium Bike Financing badge
content = content.replace('bg-white/10', 'bg-[#04407E]/10')
content = content.replace('border-white/20', 'border-[#04407E]/20')
# except the badge estimated EMI which is also bg-white/10

# Navigation Buttons
# ArrowLeft
content = content.replace('border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40', 'border border-[#04407E]/20 flex items-center justify-center text-[#04407E] hover:bg-[#04407E]/10 hover:border-[#04407E]/40')
# ArrowRight (Wait, ArrowRight uses bg-accent/10 and text-accent which is #04407E now, but hover:text-white is fine)
content = content.replace('hover:bg-accent hover:text-white', 'hover:bg-[#04407E] hover:text-white')

# Progress bars
content = content.replace('bg-white/20 hover:bg-white/40', 'bg-gray-300 hover:bg-gray-400')

with open('src/components/sections/HeroCarousel.tsx', 'w') as f:
    f.write(content)
print("Hero text fixed.")
