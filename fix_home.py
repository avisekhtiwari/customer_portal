import re

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# Portal preview section in Home.tsx
# Replace bg-primary text-white with bg-[#04407E] text-white
content = content.replace('bg-primary text-white overflow-hidden relative', 'bg-[#04407E] text-white overflow-hidden relative')

# Note: text-white inside this section is fine since bg is dark blue.

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
print("Home text fixed.")
