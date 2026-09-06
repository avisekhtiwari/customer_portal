import os
import glob
import re

# We will look for className strings that look like primary buttons:
# e.g. "bg-[#dcb285] ... rounded-full ..."
# e.g. "bg-[#04407E] ... rounded-full ..."

files = glob.glob("/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/**/*.tsx", recursive=True)

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    original = content
    
    # Let's do string replacements for the most common button class clusters found from the grep output
    
    # 1. EMICalculator, SubmitQuery, Contact
    content = re.sub(
        r'bg-\[#dcb285\] hover:bg-\[#c9a075\] text-black font-bold py-4 px-8 rounded-full transition-colors w-full',
        r'bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all shadow-sm w-full',
        content
    )
    
    # 2. Refinancing, TopUp, Insurance header buttons
    content = re.sub(
        r'bg-\[#dcb285\] hover:bg-\[#c9a075\] text-black font-bold text-lg px-8 py-3 rounded-full transition-colors duration-200 shadow-lg',
        r'bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider text-lg px-8 py-3 rounded-lg transition-all shadow-sm',
        content
    )
    
    # 3. Refinancing, TopUp, Insurance footer buttons
    content = re.sub(
        r'bg-\[#dcb285\] hover:bg-\[#c9a075\] text-black font-bold py-3 px-8 rounded-full transition-colors shadow-sm',
        r'bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-3 px-8 rounded-lg transition-all shadow-sm',
        content
    )

    # 4. Reviews page button
    content = re.sub(
        r'bg-\[#dcb285\] hover:bg-\[#c9a075\] text-black font-bold py-3 px-8 rounded-full transition-colors shadow-sm',
        r'bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-3 px-8 rounded-lg transition-all shadow-sm',
        content
    )
    
    # 5. QueryStatus submit button
    content = re.sub(
        r'bg-\[#04407E\] hover:bg-\[#032c57\] text-white font-bold py-4 px-8 rounded-full transition-colors',
        r'bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all shadow-sm',
        content
    )
    
    # 6. PurchaseBike Reset
    content = re.sub(
        r'bg-\[#04407E\] hover:bg-\[#032c57\] text-white font-bold py-3 px-8 rounded-full transition-colors',
        r'bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-3 px-8 rounded-lg transition-all shadow-sm',
        content
    )
    
    # 7. PurchaseBike Submit
    content = re.sub(
        r'bg-\[#dcb285\] hover:bg-\[#c9a075\] text-black font-bold py-4 px-8 rounded-full transition-colors w-full flex items-center justify-center text-xl shadow-lg mt-4',
        r'bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all shadow-sm w-full flex items-center justify-center text-xl mt-4',
        content
    )

    # 8. PortalPreview buttons (blue to yellow)
    content = re.sub(
        r'bg-\[#04407E\] px-8 font-semibold text-white hover:bg-\[#033060\] transition-colors',
        r'bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider px-8 transition-all shadow-sm',
        content
    )
    # Fix the rounded-full in PortalPreview
    content = content.replace("mt-8 w-full group rounded-full relative inline-flex", "mt-8 w-full group rounded-lg relative inline-flex")
    
    content = re.sub(
        r'rounded-full bg-gray-200 text-\[#9e7146\] font-semibold hover:bg-white/20 transition-colors',
        r'rounded-lg bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider transition-all shadow-sm',
        content
    )
    
    content = re.sub(
        r'rounded-full font-semibold text-white bg-\[#04407E\] hover:bg-\[#055bba\] transition-colors',
        r'rounded-lg bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider transition-all shadow-sm',
        content
    )
    
    content = re.sub(
        r'rounded-full bg-\[#04407E\] hover:bg-\[#055bba\] text-\[#9e7146\] font-semibold',
        r'rounded-lg bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider shadow-sm',
        content
    )

    content = re.sub(
        r'bg-\[#04407E\] text-white rounded-full font-semibold hover:bg-\[#033060\] transition-colors',
        r'bg-[#FFD700] text-black rounded-lg font-bold uppercase tracking-wider hover:bg-[#F2C900] transition-all shadow-sm',
        content
    )

    content = re.sub(
        r'border-2 border-\[#04407E\] text-\[#9e7146\] rounded-full font-semibold hover:bg-gray-50 transition-colors',
        r'bg-[#FFD700] text-black rounded-lg font-bold uppercase tracking-wider hover:bg-[#F2C900] transition-all shadow-sm',
        content
    )
    
    content = re.sub(
        r'bg-\[#04407E\] text-white rounded-full font-bold hover:bg-\[#033060\] transition-colors',
        r'bg-[#FFD700] text-black rounded-lg font-bold uppercase tracking-wider hover:bg-[#F2C900] transition-all shadow-sm',
        content
    )

    # 9. Loans page selector buttons
    content = re.sub(
        r'font-bold py-3 px-6 rounded-full transition-colors',
        r'font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-all shadow-sm',
        content
    )
    content = content.replace("bg-[#dcb285] text-black hover:bg-[#c9a075]", "bg-[#FFD700] text-black hover:bg-[#F2C900]")
    
    if content != original:
        with open(file, 'w') as f:
            f.write(content)
        print(f"Updated {file}")

print("Done standardising all remaining buttons.")
