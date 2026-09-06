import re

# --- 1. Fix Footer ---
with open('src/components/layout/Footer.tsx', 'r') as f:
    footer = f.read()

# Change background to #04407E
footer = footer.replace('bg-primary', 'bg-[#04407E]')
# Fix logo
footer = re.sub(r'<div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl tracking-tighter">\s*RF\s*</div>', '<img src="/logo.jpeg" alt="Logo" className="w-10 h-10 rounded-full object-cover" />', footer)
# Fix text
footer = footer.replace('Ritika <span className="text-white/70">Finance</span>', 'Ritika Financial Corporation')
footer = footer.replace('Ritika Financial Corporation Corporation', 'Ritika Financial Corporation')
# Fix accent colors to white/gray where needed or keep accent if it maps to white. Wait, accent is #04407E, which is invisible on #04407E!
footer = footer.replace('text-accent', 'text-white')
footer = footer.replace('hover:text-accent', 'hover:text-gray-300')
footer = footer.replace('bg-accent', 'bg-white')
footer = footer.replace('hover:bg-accent hover:text-white', 'hover:bg-white hover:text-[#04407E]')

with open('src/components/layout/Footer.tsx', 'w') as f:
    f.write(footer)

# --- 2. Fix HeroCarousel ---
with open('src/components/sections/HeroCarousel.tsx', 'r') as f:
    hero = f.read()

# Change the base background and gradients to dark blue
hero = hero.replace('bg-primary overflow-hidden', 'bg-[#04407E] overflow-hidden')
hero = hero.replace('from-primary via-primary/60', 'from-[#04407E] via-[#04407E]/80')
hero = hero.replace('from-primary via-primary/50', 'from-[#04407E] via-[#04407E]/60')

# Restore white text
hero = hero.replace('text-[#04407E] text-xs', 'text-white text-xs')
hero = hero.replace('text-[#04407E] tracking-tight', 'text-white tracking-tight')
hero = hero.replace('text-gray-700', 'text-white/90')
hero = hero.replace('text-gray-500', 'text-white/70')
hero = hero.replace('text-gray-400', 'text-white/50')

# Buttons
hero = hero.replace('text-[#04407E] transition-colors', 'text-white transition-colors')
hero = hero.replace('border-[#04407E]', 'border-white')
hero = hero.replace('border-[#04407E]/50', 'border-white/50')

# Premium Bike Financing badge
hero = hero.replace('bg-[#04407E]/10', 'bg-white/10')
hero = hero.replace('border-[#04407E]/20', 'border-white/20')

# Arrow buttons
hero = hero.replace('text-[#04407E] hover:bg-[#04407E]/10 hover:border-[#04407E]/40', 'text-white hover:bg-white/10 hover:border-white/40')
# Note: the right arrow was 'hover:bg-[#04407E] hover:text-white', if we replaced all bg-[#04407E] we might have broke it?
# The right arrow used accent. Wait, earlier I did:
# content = content.replace('hover:bg-accent hover:text-white', 'hover:bg-[#04407E] hover:text-white')
# Now the background is #04407E, so the right arrow should be white text and white border.
# Let's just manually replace the entire handleNext button block to be safe.
next_btn_old = r'className="w-12 h-12 border border-accent bg-accent/10 flex items-center justify-center text-accent hover:bg-\[#04407E\] hover:text-white transition-all backdrop-blur-sm group shadow-\[0_0_15px_rgba\(59,130,246,0\.4\)\]"'
next_btn_new = 'className="w-12 h-12 border border-white bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#04407E] transition-all backdrop-blur-sm group shadow-[0_0_15px_rgba(255,255,255,0.4)]"'
hero = re.sub(next_btn_old, next_btn_new, hero)

# Restore Progress bars
hero = hero.replace('bg-gray-300 hover:bg-gray-400', 'bg-white/20 hover:bg-white/40')
hero = hero.replace("bg-accent shadow-[0_0_10px_rgba(59,130,246,0.8)]", "bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]")

# Wait, `text-accent` in typewriter component needs to be white.
hero = hero.replace('text-accent inline-block', 'text-white inline-block')
hero = hero.replace('text-accent flex', 'text-white flex') # if any
hero = hero.replace('text-accent', 'text-white') # just to be safe for emi text

# Fix image opacity
hero = hero.replace('opacity-50', 'opacity-60') # slightly more visible

with open('src/components/sections/HeroCarousel.tsx', 'w') as f:
    f.write(hero)

print("Hero and Footer fixed.")
