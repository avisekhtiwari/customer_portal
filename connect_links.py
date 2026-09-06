import os

base_dir = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/home"

# 1. HeroCarousel
with open(os.path.join(base_dir, "HeroCarousel.tsx"), "r") as f:
    hero = f.read()
if "import { Link }" not in hero:
    hero = hero.replace("import { ChevronLeft, ChevronRight } from 'lucide-react';", "import { ChevronLeft, ChevronRight } from 'lucide-react';\nimport { Link } from 'react-router-dom';")
hero = hero.replace('<button className="bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold text-lg px-8 py-3 rounded-full transition-colors duration-200 shadow-lg">\n                {heroSlides[currentHeroSlide].button}\n              </button>', '<Link to="/loans" className="inline-block bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold text-lg px-8 py-3 rounded-full transition-colors duration-200 shadow-lg">\n                {heroSlides[currentHeroSlide].button}\n              </Link>')
with open(os.path.join(base_dir, "HeroCarousel.tsx"), "w") as f:
    f.write(hero)

# 2. AboutSection
with open(os.path.join(base_dir, "AboutSection.tsx"), "r") as f:
    about = f.read()
if "import { Link }" not in about:
    about = "import { Link } from 'react-router-dom';\n" + about
about = about.replace('<button className="bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold py-3 px-8 rounded-full transition-colors shadow-sm">\n          Read Our Full Story\n        </button>', '<Link to="/about" className="inline-block bg-[#dcb285] hover:bg-[#c9a075] text-black font-bold py-3 px-8 rounded-full transition-colors shadow-sm">\n          Read Our Full Story\n        </Link>')
with open(os.path.join(base_dir, "AboutSection.tsx"), "w") as f:
    f.write(about)

# 3. StoriesSection
with open(os.path.join(base_dir, "StoriesSection.tsx"), "r") as f:
    stories = f.read()
if "import { Link }" not in stories:
    stories = stories.replace("import { ChevronRight } from 'lucide-react';", "import { ChevronRight } from 'lucide-react';\nimport { Link } from 'react-router-dom';")
stories = stories.replace('<button className="text-[#04407E] font-bold flex items-center hover:underline w-fit">\n              Read full story <ChevronRight className="ml-1 w-4 h-4" />\n            </button>', '<Link to="/stories" className="text-[#04407E] font-bold flex items-center hover:underline w-fit">\n              Read full story <ChevronRight className="ml-1 w-4 h-4" />\n            </Link>')
with open(os.path.join(base_dir, "StoriesSection.tsx"), "w") as f:
    f.write(stories)

# 4. ServicesCarousel
with open(os.path.join(base_dir, "ServicesCarousel.tsx"), "r") as f:
    services = f.read()

if "import { Link }" not in services:
    services = services.replace("import { ChevronLeft, ChevronRight } from 'lucide-react';", "import { ChevronLeft, ChevronRight } from 'lucide-react';\nimport { Link } from 'react-router-dom';")

new_cards = """const cards = [
  { title: "Two-Wheeler Loans", desc: "Finance your dream bike or scooter with our hassle-free, low-interest loans.", icon: "🏍️", button: "Apply Now", path: "/loans" },
  { title: "EMI Calculator", desc: "Easily calculate your monthly payments and plan your finances in advance.", icon: "🧮", button: "Calculate", path: "/emi-calculator" },
  { title: "Instant Disbursal", desc: "Get your loan amount transferred instantly with our fast-track approval process.", icon: "⚡", button: "Learn More", path: "/loans" },
  { title: "Vehicle Insurance", desc: "Protect your new ride with comprehensive two-wheeler insurance plans.", icon: "🛡️", button: "View Plans", path: "/insurance" },
  { title: "Top-Up Loans", desc: "Get additional funds on your existing loan for upgrades or accessories.", icon: "💰", button: "Explore", path: "/top-up" },
  { title: "EV Financing", desc: "Special interest rates and benefits for electric two-wheeler purchases.", icon: "🔋", button: "Go Green", path: "/loans" },
  { title: "Accessories Finance", desc: "Finance riding gears, helmets, and vehicle modifications effortlessly.", icon: "🪖", button: "Add Gear", path: "/loans" },
  { title: "Refinancing Options", desc: "Transfer your existing loan to us and enjoy lower interest rates.", icon: "🔄", button: "Refinance", path: "/refinancing" },
  { title: "Premium Bike Loans", desc: "Exclusive financing options for superbikes and premium motorcycles.", icon: "🏁", button: "Ride Premium", path: "/loans" },
  { title: "Credit Score Check", desc: "Check your eligibility and credit score for free in just a few clicks.", icon: "📊", button: "Check Now", path: "/portal" },
  { title: "Pre-approved Offers", desc: "Special tailored loan offers exclusively available for existing customers.", icon: "🎁", button: "Check Offers", path: "/portal/offers" },
  { title: "Loan Status Tracking", desc: "Track your loan application and disbursement status in real-time.", icon: "📱", button: "Track Now", path: "/portal" }
];"""
services = services.replace("""const cards = [
  { title: "Two-Wheeler Loans", desc: "Finance your dream bike or scooter with our hassle-free, low-interest loans.", icon: "🏍️", button: "Apply Now" },
  { title: "EMI Calculator", desc: "Easily calculate your monthly payments and plan your finances in advance.", icon: "🧮", button: "Calculate" },
  { title: "Instant Disbursal", desc: "Get your loan amount transferred instantly with our fast-track approval process.", icon: "⚡", button: "Learn More" },
  { title: "Vehicle Insurance", desc: "Protect your new ride with comprehensive two-wheeler insurance plans.", icon: "🛡️", button: "View Plans" },
  { title: "Top-Up Loans", desc: "Get additional funds on your existing loan for upgrades or accessories.", icon: "💰", button: "Explore" },
  { title: "EV Financing", desc: "Special interest rates and benefits for electric two-wheeler purchases.", icon: "🔋", button: "Go Green" },
  { title: "Accessories Finance", desc: "Finance riding gears, helmets, and vehicle modifications effortlessly.", icon: "🪖", button: "Add Gear" },
  { title: "Refinancing Options", desc: "Transfer your existing loan to us and enjoy lower interest rates.", icon: "🔄", button: "Refinance" },
  { title: "Premium Bike Loans", desc: "Exclusive financing options for superbikes and premium motorcycles.", icon: "🏁", button: "Ride Premium" },
  { title: "Credit Score Check", desc: "Check your eligibility and credit score for free in just a few clicks.", icon: "📊", button: "Check Now" },
  { title: "Pre-approved Offers", desc: "Special tailored loan offers exclusively available for existing customers.", icon: "🎁", button: "Check Offers" },
  { title: "Loan Status Tracking", desc: "Track your loan application and disbursement status in real-time.", icon: "📱", button: "Track Now" }
];""", new_cards)

services = services.replace('<button className="bg-[#c49a6c] hover:bg-[#b58a5b] text-white font-bold py-2 px-6 rounded-full transition-colors mt-auto">\n                    {card.button}\n                  </button>', '<Link to={card.path} className="inline-block bg-[#c49a6c] hover:bg-[#b58a5b] text-white font-bold py-2 px-6 rounded-full transition-colors mt-auto">\n                    {card.button}\n                  </Link>')

with open(os.path.join(base_dir, "ServicesCarousel.tsx"), "w") as f:
    f.write(services)

print("Links updated")
