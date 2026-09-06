import re

with open('src/pages/PortalPreview.tsx', 'r') as f:
    content = f.read()

# 1. Fix gradients that are still dark
content = content.replace('from-[#1a1b1e] to-[#252014]', 'from-gray-50 to-gray-100')

# 2. Fix text-gray-400 to text-gray-600 for better visibility on light bg
content = content.replace('text-gray-400', 'text-gray-500')
# Fix some text-gray-500 that might need to be even darker if they are headings, but 500/600 is fine for secondary text.

# 3. Next EMI Due card has blue text, which is good. But let's check its button:
# <button className="mt-8 w-full group rounded-full relative inline-flex h-14 items-center justify-center overflow-hidden bg-[#04407E] px-8 font-semibold text-[#04407E] hover:bg-[#055bba] transition-colors">
# wait, text-[#04407E] on bg-[#04407E]? That's invisible!
content = content.replace('text-[#04407E] hover:bg-[#055bba]', 'text-white hover:bg-[#033060]')
content = content.replace('bg-[#04407E] px-8 font-semibold text-[#04407E]', 'bg-[#04407E] px-8 font-semibold text-white')

# 4. User initials avatar:
# bg-gradient-to-br from-[#04407E] to-[#032c57] text-[#04407E] 
content = content.replace('to-[#032c57] flex items-center justify-center text-[#04407E]', 'to-[#032c57] flex items-center justify-center text-white')

# 5. Fix GlassCard component in PortalPreview.tsx to make sure it doesn't have text-gray-200 or something if it was global.
content = content.replace('bg-white/5 border border-gray-200', 'bg-white border border-gray-200 shadow-sm')
content = content.replace('bg-white/5', 'bg-white')
# some places might have 'bg-gray-100' instead of 'bg-white/5' from previous fix.
content = content.replace('bg-gray-50/50', 'bg-white shadow-sm border border-gray-100')

# 6. Sidebar active state text:
# isActive ? "text-[#04407E]" : "text-gray-500 hover:text-gray-300"
content = content.replace('hover:text-gray-300', 'hover:text-[#04407E]')

# 7. selection:text-[#04407E] on selection:bg-[#04407E] -> invisible
content = content.replace('selection:bg-[#04407E] selection:text-[#04407E]', 'selection:bg-[#04407E] selection:text-white')

# 8. EMISchedule status colors
# text-green-400 bg-green-400/10 -> in light mode, text-green-700 bg-green-100 is better
content = content.replace('text-green-400 bg-green-400/10 border border-green-400/20', 'text-green-700 bg-green-100 border border-green-200')
content = content.replace('text-green-400', 'text-green-600')

with open('src/pages/PortalPreview.tsx', 'w') as f:
    f.write(content)

print("Contrast issues fixed.")
