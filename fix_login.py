import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages/Login.tsx"
with open(filepath, "r") as f:
    content = f.read()

# 1. Add useRef to imports
content = content.replace(
    "import { useState } from 'react';",
    "import { useState, useRef } from 'react';"
)

# 2. Add refs array to component state
refs_code = """
  const [otpArray, setOtpArray] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^[0-9]*$/.test(value)) return;
    
    const newOtpArray = [...otpArray];
    newOtpArray[index] = value;
    setOtpArray(newOtpArray);
    
    // Auto focus next
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpArray[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
"""

content = content.replace(
    "const [isLoading, setIsLoading] = useState(false);",
    "const [isLoading, setIsLoading] = useState(false);\n" + refs_code
)

# Replace OTP length check in handleLogin
content = content.replace(
    "if (otp.length < 4) return;",
    "const currentOtp = otpArray.join('');\n    if (currentOtp.length < 6) return;"
)

# Remove the Back to website button
content = re.sub(
    r'<Link to="/" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">.*?<\/Link>',
    '<div></div>',
    content,
    flags=re.DOTALL
)

# Replace the single OTP input with 6 boxes
old_otp_input = """
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                        <KeyRound className="w-5 h-5" />
                      </div>
                      <input 
                        required
                        type="text"
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                        className="w-full h-14 rounded-xl pl-12 pr-4 text-center tracking-[0.5em] text-2xl font-black border-2 border-gray-200 focus:outline-none focus:border-[#FFD700] bg-gray-50 focus:bg-white transition-all text-gray-900 shadow-sm"
                        placeholder="••••••"
                      />
                    </div>
"""

new_otp_input = """
                    <div className="flex gap-2 justify-between">
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <input
                          key={index}
                          ref={(el) => (inputRefs.current[index] = el)}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={otpArray[index]}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          className="w-12 h-14 sm:w-14 sm:h-16 rounded-xl text-center text-2xl font-black border-2 border-gray-200 focus:outline-none focus:border-[#FFD700] bg-gray-50 focus:bg-white transition-all text-gray-900 shadow-sm"
                        />
                      ))}
                    </div>
"""

content = content.replace(old_otp_input.strip(), new_otp_input.strip())

# Fix the disabled check for verify button
content = content.replace(
    "disabled={isLoading || otp.length < 4}",
    "disabled={isLoading || otpArray.join('').length < 6}"
)

with open(filepath, "w") as f:
    f.write(content)

print("Updated Login.tsx")
