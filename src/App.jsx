import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import NavBar from './assets/components/NavBar';
import LandingPage from './assets/components/LandingPage';
import WhatWeDo from './assets/components/WhatWeDo';
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
        <NavBar />
        <Element name="home">
          <LandingPage openApplyModal={openModal} />
        </Element>
        <Element name="whatWeDo">
          <WhatWeDo />
        </Element>
        <Element name="aboutUs">
          <AboutUs />
        </Element>
        <Element name="partnersSection">
          <PartnersSection />
        </Element>
        <FooterPage />
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <StartupForm />
      </Modal>
    </Router>
  );
}

export default App;
