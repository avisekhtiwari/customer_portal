import os
import glob

# The exact styling the user wants for buttons
STANDARD_BUTTON_STYLE = "bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider rounded-lg transition-all shadow-sm"

# Files to check
search_pattern = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/**/*.tsx"
files = glob.glob(search_pattern, recursive=True)

replacements = [
    # HeroCarousel "Apply Today"
    ('className="inline-block bg-[#FFD700] hover:bg-[#e6c200] text-black font-extrabold text-lg px-10 py-4 rounded-full transition-colors duration-200 shadow-[0_4px_20px_rgba(255,215,0,0.3)]"',
     'className="inline-block bg-[#FFD700] hover:bg-[#F2C900] text-black font-extrabold text-lg uppercase tracking-wider px-10 py-4 rounded-lg transition-all shadow-sm"'),
     
    # ServicesCarousel "Add Gear" / "Apply Now"
    ('className="w-full inline-block bg-[#FFD700] hover:bg-[#a67d51] text-white font-bold py-3 px-6 rounded-full transition-colors mt-auto text-sm uppercase tracking-wider shadow-md"',
     'className="w-full inline-block bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold py-3 px-6 rounded-lg transition-all mt-auto text-sm uppercase tracking-wider shadow-sm"'),
    
    # Let's catch if ServicesCarousel has the old color #c49a6c
    ('className="w-full inline-block bg-[#c49a6c] hover:bg-[#a67d51] text-white font-bold py-3 px-6 rounded-full transition-colors mt-auto text-sm uppercase tracking-wider shadow-md"',
     'className="w-full inline-block bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold py-3 px-6 rounded-lg transition-all mt-auto text-sm uppercase tracking-wider shadow-sm"'),

    # GallerySection "View More"
    ('className="inline-block border-2 border-[#04407E] text-[#04407E] hover:bg-[#04407E] hover:text-white font-bold py-3 px-10 rounded-full transition-colors"',
     'className="inline-block bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-3 px-10 rounded-lg transition-all shadow-sm"'),

    # AboutSection "Read Our Story"
    ('className="inline-block bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold py-3 px-8 rounded-full transition-colors shadow-sm"',
     'className="inline-block bg-[#FFD700] hover:bg-[#F2C900] text-black font-bold uppercase tracking-wider py-3 px-8 rounded-lg transition-all shadow-sm"'),
     
    # Login page buttons
    ('className="w-full rounded-xl bg-black hover:bg-gray-900 text-white py-4 font-bold transition-all disabled:opacity-50 flex justify-center items-center shadow-lg shadow-black/10"',
     'className="w-full rounded-lg bg-black hover:bg-gray-900 text-white py-4 font-bold uppercase tracking-wider transition-all disabled:opacity-50 flex justify-center items-center shadow-sm"'),
     
    ('className="w-full rounded-xl bg-[#FFD700] hover:bg-[#e6c200] text-black py-4 font-extrabold transition-all disabled:opacity-50 flex justify-center items-center shadow-lg shadow-[#FFD700]/20"',
     'className="w-full rounded-lg bg-[#FFD700] hover:bg-[#F2C900] text-black py-4 font-extrabold uppercase tracking-wider transition-all disabled:opacity-50 flex justify-center items-center shadow-sm"'),
]

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    original = content
    for old, new in replacements:
        content = content.replace(old, new)
        
    if content != original:
        with open(file, 'w') as f:
            f.write(content)
        print(f"Updated {file}")

print("Done standardising buttons.")
