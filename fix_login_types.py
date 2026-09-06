import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages/Login.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Fix the ref callback return type
content = content.replace(
    'ref={(el) => (inputRefs.current[index] = el)}',
    'ref={(el) => { inputRefs.current[index] = el; }}'
)

# Remove unused vars
content = content.replace("const [otp, setOtp] = useState('');\n", "")
content = content.replace("ArrowLeft, ", "")
content = content.replace("KeyRound, ", "")

with open(filepath, "w") as f:
    f.write(content)

print("Updated Login.tsx types")
