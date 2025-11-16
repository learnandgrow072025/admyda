import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Analytics from '@/pages/Analytics';
import HealthcareAnalytics from '@/pages/analytics/HealthcareAnalytics';
import SupplyChainAnalytics from '@/pages/analytics/SupplyChainAnalytics';
import AutomotiveAnalytics from '@/pages/analytics/AutomotiveAnalytics';
import OthersAnalytics from '@/pages/analytics/OthersAnalytics';
import GenerativeAI from '@/pages/analytics/GenerativeAI';
import Training from '@/pages/Training';
import Register from '@/pages/Register';
import About from "./pages/About.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <Router>
	  <ScrollToTop smooth />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/analytics/healthcare" element={<HealthcareAnalytics />} />
            <Route path="/analytics/supply-chain" element={<SupplyChainAnalytics />} />
            <Route path="/analytics/automotive" element={<AutomotiveAnalytics />} />
            <Route path="/analytics/others" element={<OthersAnalytics />} />
			<Route path="/analytics/GenerativeAI" element={<GenerativeAI />} />
            <Route path="/training" element={<Training />} />
            <Route path="/register" element={<Register />} />
			<Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;