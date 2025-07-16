 import React, { useState, useEffect } from 'react';
import Header from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './Components/Hero';
import FeaturedServices from './Components/FeaturedServices';
import Process from './Components/OurProcess';
import Technologies from './Components/TechStackSection';
 import LegalPolicy from './Components/LegalPolicy';
import ScrollToTop from './utils/ScrollToTop';
import ContactSection from './Components/ContactSection';
import PricingSection from './Components/PricingSection';
function App() {
 
  return (
    <>
       
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedServices />
              <Process />
              <Technologies />
              <PricingSection />
              <ContactSection />
             </>
          }
        />
        <Route path="/legal" element={<LegalPolicy />} />
      </Routes>
       <Footer />
    </>
  );
}

export default App;