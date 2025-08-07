
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Reservations from '@/pages/Reservations';
import OnlineOrder from '@/pages/OnlineOrder';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import PasswordProtect from '@/components/PasswordProtect';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem('site_authenticated') === 'true';
    setIsAuthenticated(isVerified);
  }, []);

  const handleCorrectPassword = () => {
    localStorage.setItem('site_authenticated', 'true');
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordProtect onCorrectPassword={handleCorrectPassword} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/commande" element={<OnlineOrder />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
