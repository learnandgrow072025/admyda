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
import Training from '@/pages/Training';
import Register from '@/pages/Register';

function App() {
  return (
    <Router>
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
            <Route path="/training" element={<Training />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;