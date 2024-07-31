import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './assets/components/NavBar';
import LandingPage from './assets/components/LandingPage';
import WhatWeDo from './assets/components/WhatWeDo';
import Login from './assets/components/Login';
import Dashboard from './assets/components/Dashboard';
import AboutUs from './assets/components/AboutUs';
import FooterPage from './assets/components/FooterPage';
import PartnersSection from './assets/components/PartnershipPage';
import StartupForm from './assets/components/StartupForm';
import Modal from './assets/components/Modal';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <main className="min-h-screen flex flex-col text-sm sm:text-base overflow-hidden bg-blue-700">
        <section id="home" className="z-10">
          <NavBar openModal={openModal} />
        </section>
        <section id="home">
          <LandingPage />
        </section>
        <section id="program">
          <WhatWeDo />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="partners">
          <PartnersSection />
        </section>
        <section>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </section>
        <section id="contact">
          <FooterPage />
        </section>
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <StartupForm />
      </Modal>
    </Router>
  );
}

export default App;
