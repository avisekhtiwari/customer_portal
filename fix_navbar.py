import os

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/layout/Navbar.tsx"

with open(filepath, "r") as f:
    content = f.read()

# 1. Remove Two-Wheeler Loans dropdown block
# Find start index
start_marker = "{/* Two-Wheeler Loans Dropdown Trigger */}"
end_marker = "{/* Other Nav Links */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + content[end_idx:]

# 2. Remove Insurance and Top-up
remove_chunk = """            <Link to="/insurance" className="flex items-center hover:text-yellow-400 transition-colors py-2">
              Insurance <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <Link to="/top-up" className="flex items-center hover:text-yellow-400 transition-colors py-2">
              Top-Up Loans
            </Link>"""
content = content.replace(remove_chunk, "")

with open(filepath, "w") as f:
    f.write(content)

print("Navbar updated")
