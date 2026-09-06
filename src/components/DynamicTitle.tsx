import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles: Record<string, string> = {
  '/': 'Home',
  '/loans': 'Two-Wheeler Loans',
  '/insurance': 'Insurance',
  '/top-up': 'Top-Up Loans',
  '/refinancing': 'Refinancing',
  '/emi-calculator': 'EMI Calculator',
  '/interest-rates': 'Our Interest Rates',
  '/privacy-policy': 'Privacy Policy',
  '/dealer-staff-policy': 'Dealer & Staff Policies',


  '/about': 'About Us',
  '/contact': 'Contact Us',
  '/submit-query': 'Submit a Query',
  '/query-status': 'Check Query Status',
  '/purchase-bike': 'Purchase a Bike',

    '/dealers': 'Our Dealers',
  '/presence': 'Our Presence',
  '/staff': 'Our Staff',
  '/dealer-reviews': 'Dealer Testimonials',
  '/gallery': 'Our Gallery',
  '/goals': 'Our Goals',
  '/reviews': 'Reviews',
  '/stories': 'Our Stories',
  '/founders': 'Founders',
  '/login': 'Login',
};

export default function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    // Determine the title based on the path
    let pageTitle = 'Ritika Financial';
    const currentPath = location.pathname;
    
    // Exact match or fallback
    if (routeTitles[currentPath]) {
      pageTitle = `${routeTitles[currentPath]} - Ritika Financial`;
    } else {
      // Find matching prefix if not exact (e.g., /bikes/123)
      for (const [path, title] of Object.entries(routeTitles)) {
        if (currentPath.startsWith(path) && path !== '/') {
          pageTitle = `${title} - Ritika Financial`;
          break;
        }
      }
    }

    document.title = pageTitle;

    // Update favicon
    const link: HTMLLinkElement = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = '/logo.jpeg'; // Update if dynamic icon is needed per page
    document.head.appendChild(link);

  }, [location]);

  return null;
}
