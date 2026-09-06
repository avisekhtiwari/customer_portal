import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Bikes from '@/pages/Bikes';
import BikeDetail from '@/pages/BikeDetail';
import EMICalculator from '@/pages/EMICalculator';

import Finance from '@/pages/Finance';
import Contact from '@/pages/Contact';
import FAQs from '@/pages/FAQs';
import Login from '@/pages/Login';
import PortalPreview from '@/pages/PortalPreview';
import About from '@/pages/About';
import Loader from '@/components/Loader';

function AppContent() {
  const location = useLocation();
  const isPortal = location.pathname.startsWith('/portal');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      {!isPortal && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/bikes/:id" element={<BikeDetail />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal/*" element={<PortalPreview />} />
        </Routes>
      </main>
      {!isPortal && <Footer />}
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
