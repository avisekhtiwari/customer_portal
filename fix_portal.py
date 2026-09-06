import os

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages/PortalPreview.tsx"

with open(filepath, 'r') as f:
    content = f.read()

# Remove Ambient Glows
content = content.replace('{/* Ambient Glows */}\n      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/10 blur-[120px] pointer-events-none" />\n      <div className="fixed bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-[#04407E]/10 blur-[120px] pointer-events-none" />', '')

# Update global classes
content = content.replace('bg-gray-50 text-[#04407E] font-sans selection:bg-[#04407E]', 'bg-gray-50 text-gray-900 font-sans selection:bg-[#04407E]')

# Update Sidebar
content = content.replace('bg-gradient-to-br from-[#04407E] to-[#032c57]', 'bg-gray-900')
content = content.replace('text-[#04407E] uppercase">Ritika Financial Corporation', 'text-black uppercase">Ritika Financial Corp')
content = content.replace('hover:text-[#04407E]', 'hover:text-[#9e7146]')
content = content.replace('text-[#04407E]', 'text-[#9e7146]')
content = content.replace('bg-gray-100 border border-gray-200', 'bg-[#dcb285]/20 text-[#9e7146]')

# Update Mobile top bar
content = content.replace('bg-white/90 backdrop-blur-xl border-b border-gray-200', 'bg-gray-900 text-white')
content = content.replace('text-[#04407E] uppercase">Ritika Financial Corp', 'text-white uppercase">Ritika Financial Corp')

# Center button in mobile nav
content = content.replace('from-[#04407E] to-[#032c57]', 'from-[#dcb285] to-[#9e7146]')
content = content.replace('border-white', 'border-gray-900')

with open(filepath, 'w') as f:
    f.write(content)

print("Portal styles updated.")
