import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Login from './Login';
import StartupForm from './StartupForm';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openApplyModal = () => {
    setIsApplyModalOpen(true);
  };

  const closeApplyModal = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <div >
      <nav className={`fixed top-0 left-0 w-full transition-colors duration-300 ${isScrolled ? 'bg-neutral-white shadow-lg opacity-90' : 'bg-primary-blue'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="src/assets/images/pup-pylon-2.png" className="w-14 h-auto" alt="Pup Pylon Images" />
            <span className={`self-center text-2xl font-bold whitespace-nowrap ${isScrolled ? 'text-primary-blue' : 'text-primary-gold'}`}>
              <span className=''>PUP</span> <span className=''>PYLON</span>
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
            <button
              type="button"
              className={`text-neutral-white ${isScrolled ? 'bg-primary-blue' : 'bg-primary-gold'} hover:bg-primary-gold-dark focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center shadow-md`}
              onClick={openLoginModal}
            >
              VIEW STATUS
            </button>
            <button
              type="button"
              className={`text-neutral-white ${isScrolled ? 'bg-primary-blue' : 'bg-primary-gold'} hover:bg-primary-gold-dark focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center`}
              onClick={openApplyModal}
            >
              APPLY
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${isScrolled ? 'text-primary-blue' : 'text-neutral-white'}`}>
              <li className="nav-item">
                <a href="#home" className="nav-link block py-2 px-3 md:p-0 transition-colors duration-300" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#program" className="nav-link block py-2 px-3 md:p-0 transition-colors duration-300">
                  Program
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link block py-2 px-3 md:p-0 transition-colors duration-300">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link block py-2 px-3 md:p-0 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isLoginModalOpen && (
        <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
          <Login onClose={closeLoginModal} />
        </Modal>
      )}

      {isApplyModalOpen && (
        <Modal isOpen={isApplyModalOpen} onClose={closeApplyModal}>
          <StartupForm onClose={closeApplyModal} />
        </Modal>
      )}
    </div>
  );
}
