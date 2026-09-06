import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DynamicTitle from '@/components/DynamicTitle';
import Home from '@/pages/Home';
import Loans from '@/pages/Loans';
import Insurance from '@/pages/Insurance';
import TopUp from '@/pages/TopUp';
import Dealers from '@/pages/Dealers';
import Presence from '@/pages/Presence';
import Staff from '@/pages/Staff';
import DealerReviews from '@/pages/DealerReviews';

import Gallery from '@/pages/Gallery';
import Goals from '@/pages/Goals';
import Reviews from '@/pages/Reviews';
import Stories from '@/pages/Stories';
import Founders from '@/pages/Founders';

import Refinancing from '@/pages/Refinancing';

import Bikes from '@/pages/Bikes';
import BikeDetail from '@/pages/BikeDetail';
import InterestRates from '@/pages/InterestRates';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import DealerStaffPolicy from '@/pages/DealerStaffPolicy';

import EMICalculator from '@/pages/EMICalculator';

import Finance from '@/pages/Finance';
import Contact from '@/pages/Contact';
import SubmitQuery from '@/pages/SubmitQuery';
import QueryStatus from '@/pages/QueryStatus';
import PurchaseBike from '@/pages/PurchaseBike';

import FAQs from '@/pages/FAQs';
import Login from '@/pages/Login';
import PortalPreview from '@/pages/PortalPreview';
import About from '@/pages/About';
import Loader from '@/components/Loader';

function AppContent() {
  const location = useLocation();
  const isPortal = location.pathname.startsWith('/portal');
  const isLogin = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <DynamicTitle />
      {!isPortal && !isLogin && <Navbar />}
      <main className="flex-grow pb-24 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/top-up" element={<TopUp />} />
          <Route path="/dealers" element={<Dealers />} />
          <Route path="/presence" element={<Presence />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/dealer-reviews" element={<DealerReviews />} />

          <Route path="/refinancing" element={<Refinancing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/founders" element={<Founders />} />


          <Route path="/bikes" element={<Bikes />} />
          <Route path="/bikes/:id" element={<BikeDetail />} />
                    <Route path="/interest-rates" element={<InterestRates />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/dealer-staff-policy" element={<DealerStaffPolicy />} />

<Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit-query" element={<SubmitQuery />} />
          <Route path="/query-status" element={<QueryStatus />} />
          <Route path="/purchase-bike" element={<PurchaseBike />} />

          <Route path="/faqs" element={<FAQs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal/*" element={<PortalPreview />} />
        </Routes>
      </main>
      {!isPortal && !isLogin && <Footer />}
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <AppContent />
      )}
    </BrowserRouter>
  );
}

export default App;
