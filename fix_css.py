import re

with open('src/index.css', 'r') as f:
    css = f.read()

# Add animation classes for scroll reveal if not present
if '.reveal-up' not in css:
    css += """
@layer utilities {
  .reveal-up.active {
    @apply translate-y-0 translate-x-0 opacity-100;
  }
}
"""

with open('src/index.css', 'w') as f:
    f.write(css)
