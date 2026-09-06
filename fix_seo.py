import re

filepath = "/home/ubuntu/Desktop/ritika/ritika_customer_portal/src/components/DynamicTitle.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Let's add a routeDescriptions object right after routeTitles
route_descriptions = """
const routeDescriptions: Record<string, string> = {
  '/': 'Get the best two-wheeler loans with Ritika Financial Corporation. Enjoy lowest EMI, fast processing, and 0% processing fees.',
  '/loans': 'Apply for premium two-wheeler loans at Ritika Financial. Fast approval, flexible tenure, and lowest interest rates.',
  '/insurance': 'Secure your ride with comprehensive two-wheeler insurance from Ritika Financial Corporation.',
  '/top-up': 'Existing customer? Get instant top-up loans with minimal documentation and rapid disbursement.',
  '/refinancing': 'Refinance your existing bike loan with Ritika Financial for better interest rates and lower EMIs.',
  '/emi-calculator': 'Calculate your two-wheeler loan EMI instantly. Plan your finances with Ritika Financial Corporation.',
  '/interest-rates': 'Check our highly competitive two-wheeler loan interest rates. Transparent pricing with no hidden charges.',
  '/purchase-bike': 'Find your dream bike and nearest authorized dealers. Get financed instantly with Ritika Financial.',
  '/contact': 'Contact Ritika Financial Corporation for queries, support, or loan assistance. We are here to help.',
};
"""

content = content.replace(
    "const routeTitles: Record<string, string> = {",
    route_descriptions + "\nconst routeTitles: Record<string, string> = {"
)

# Modify the useEffect to also update the meta description
use_effect_mod = """
    document.title = pageTitle;
    
    // Update Meta Description dynamically for SEO
    let metaDescription = "Get the best two-wheeler loans with Ritika Financial Corporation. Enjoy lowest EMI, hassle-free processing, and flexible tenure.";
    if (routeDescriptions[currentPath]) {
      metaDescription = routeDescriptions[currentPath];
    } else {
      for (const [path, desc] of Object.entries(routeDescriptions)) {
        if (currentPath.startsWith(path) && path !== '/') {
          metaDescription = desc;
          break;
        }
      }
    }
    
    let metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.setAttribute('content', metaDescription);
    } else {
      metaTag = document.createElement('meta');
      metaTag.name = "description";
      metaTag.content = metaDescription;
      document.head.appendChild(metaTag);
    }
"""

content = content.replace("document.title = pageTitle;", use_effect_mod.strip())

with open(filepath, "w") as f:
    f.write(content)

print("Dynamic SEO injected!")
