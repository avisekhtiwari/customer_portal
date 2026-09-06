import os
import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/layout/Footer.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Fix imports
content = content.replace("import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';", "import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';")

# Replace tags with SVGs or text
fb_svg = 'FB'
tw_svg = 'X'
ig_svg = 'IG'
li_svg = 'IN'

content = content.replace('<Facebook size={20} />', fb_svg)
content = content.replace('<Twitter size={20} />', tw_svg)
content = content.replace('<Instagram size={20} />', ig_svg)
content = content.replace('<Linkedin size={20} />', li_svg)

# Also fix the `className` text colors so they stand out as text
content = content.replace('className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400', 'className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 font-bold text-sm')
content = content.replace('className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400', 'className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 font-bold text-sm')
content = content.replace('className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400', 'className="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 font-bold text-sm')
content = content.replace('className="w-10 h-10 rounded-full bg-blue-700/20 text-blue-500', 'className="w-10 h-10 rounded-full bg-blue-700/20 text-blue-500 font-bold text-sm')


with open(filepath, "w") as f:
    f.write(content)

# Fix unused imports
os.system("sed -i 's/ChevronRight, //g' /home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/layout/Navbar.tsx")
os.system("sed -i \"s/import React from 'react';//g\" /home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages/PrivacyPolicy.tsx")
os.system("sed -i \"s/import React from 'react';//g\" /home/ubuntu/Desktop/ritika/ritika_customer_portal/src/pages/DealerStaffPolicy.tsx")
