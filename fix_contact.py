import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages/Contact.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Fix overflowing email text
content = content.replace(
    '<p className="font-bold text-[#04407E] text-lg mt-1">support@ritikafinancial.com</p>',
    '<p className="font-bold text-[#04407E] text-lg mt-1 break-all">support@ritikafinancial.com</p>'
)

# Convert old colors to yellow as per user preference earlier if any left
content = content.replace('bg-[#dcb285]/20', 'bg-[#FFD700]/20')
content = content.replace('text-[#9e7146]', 'text-[#dcb285]')
content = content.replace('text-[#04407E]', 'text-gray-900') # Darken the text instead of blue

with open(filepath, "w") as f:
    f.write(content)

print("Fixed Contact layout")
