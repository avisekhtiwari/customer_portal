import re

with open('src/pages/PortalPreview.tsx', 'r') as f:
    content = f.read()

# Reduce padding from p-4 to py-2 px-6
old_container = 'p-4 z-50 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300'
new_container = 'py-3 px-6 z-50 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300'
content = content.replace(old_container, new_container)

# Remove the text span below icons
span_regex = r'<span className=\{cn\([^)]+\)\}>\s*\{item\.name\}\s*</span>'
content = re.sub(span_regex, '', content, flags=re.DOTALL)

# Because we removed the text, the gap-1 in the flex container is no longer needed, 
# and maybe we can change the p-2 on the icon wrapper.
# old: <Link key={item.name} to={item.path} className="flex flex-col items-center gap-1 group">
content = content.replace('className="flex flex-col items-center gap-1 group"', 'className="flex flex-col items-center group"')

# Wait, the center icon has a negative margin: -top-8.
# Since we removed the text and reduced padding, the bar's height is much smaller!
# So -top-8 might be too much and disconnect it from the bar.
# Let's adjust -top-8 to -top-5.
content = content.replace('-top-8 w-16 h-16', '-top-6 w-14 h-14')
content = content.replace('border-4 border-white', 'border-[3px] border-white')

with open('src/pages/PortalPreview.tsx', 'w') as f:
    f.write(content)
print("Bottom nav fixed.")
