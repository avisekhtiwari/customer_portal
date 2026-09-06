import os

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/layout/Footer.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Fix spacing in Footer
content = content.replace('pt-20 pb-10', 'pt-12 pb-6')
content = content.replace('pb-12 mb-12', 'pb-8 mb-8')
content = content.replace('gap-12 mb-16', 'gap-8 mb-8')
content = content.replace('mb-6', 'mb-4')
content = content.replace('space-y-3', 'space-y-2')
content = content.replace('p-8 mb-12', 'p-6 mb-8')
content = content.replace('pt-8', 'pt-6')
content = content.replace('gap-6', 'gap-4')

with open(filepath, "w") as f:
    f.write(content)

print("Footer spacing reduced.")
