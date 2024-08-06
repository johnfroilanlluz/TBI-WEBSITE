import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Modal from './Modal';
import Login from './Login';
import StartupForm from './StartupForm';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [isAdminDashboardModalOpen, setIsAdminDashboardModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  const openDashboardModal = () => {
    setIsDashboardModalOpen(true);
  };

  const closeDashboardModal = () => {
    setIsDashboardModalOpen(false);
  };

  const openAdminDashboardModal = () => {
    setIsAdminDashboardModalOpen(true);
  };

  const closeAdminDashboardModal = () => {
    setIsAdminDashboardModalOpen(false);
  };

  return (
    <div>
      <nav className={`fixed top-0 left-0 w-full transition-colors duration-300 ${isScrolled ? 'bg-neutral-white shadow-lg opacity-90' : 'bg-custom-darkgreen'} z-20`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 ">
          <div>
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="src/assets/images/final-logo.png" className="w-16 h-auto" alt="Pup Pylon Images" />
              <span className={`self-centerwhitespace-nowrap`}>
                <div className='flex flex-col w-46 gap-0'> 
                  <span className={`mb-[-10px] ${isScrolled ? 'text-custom-darkgreen' : 'text-white'}`}>TECHNOLOGY BUSINESS INCUBATION </span>
                  <span className={`text-4xl font-bold ${isScrolled ? 'text-custom-maroon' : 'text-custom-yellow'}`}>PUP PYLON HUB</span>
                </div>
              </span>
            </a>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
            <button
              type="button"
              className={`text-neutral-white ${isScrolled ? 'bg-custom-maroon' : 'bg-custom-yellow'} hover:bg-primary-gold-dark focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center shadow-md`}
              onClick={openLoginModal}
            >
              VIEW STATUS
            </button>
            <button
              type="button"
              className={`text-neutral-white ${isScrolled ? 'bg-custom-maroon' : 'bg-custom-yellow'} hover:bg-primary-gold-dark focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center`}
              onClick={openApplyModal}
            >
              APPLY
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleMenu}
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`} id="navbar-sticky">
            <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${isScrolled ? 'text-custom-darkgreen' : 'text-neutral-white'}`}>
              <li className="nav-item">
                <Link to="home" className="nav-link block py-2 px-3 md:p-0 transition-colors duration-300" smooth={true} duration={500}>
                 <a href="">Home</a> 
                </Link>
              </li>
              <li className="nav-item">
                <Link to="program" className="nav-link block py-2 px-3 md:p-0 transition-colors duration-300" smooth={true} duration={500}>
                <a href="">Program</a> 
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link block py-2 px-3 md:p-0 transition-colors duration={300}" smooth={true} duration={500}>
                <a href="">About</a> 
                </Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link block py-2 px-3 md:p-0 transition-colors duration={300}" smooth={true} duration={500}>
                <a href="">Contact</a> 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isLoginModalOpen && (
        <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
          <Login 
            onClose={closeLoginModal} 
            onLoginSuccess={openDashboardModal} 
            onAdminLoginSuccess={openAdminDashboardModal} 
          />
        </Modal>
      )}

      {isApplyModalOpen && (
        <Modal isOpen={isApplyModalOpen} onClose={closeApplyModal}>
          <StartupForm onClose={closeApplyModal} />
        </Modal>
      )}

      {isDashboardModalOpen && (
        <Modal isOpen={isDashboardModalOpen} onClose={closeDashboardModal}>
          <Dashboard onClose={closeDashboardModal} />
        </Modal>
      )}

      {isAdminDashboardModalOpen && (
        <Modal isOpen={isAdminDashboardModalOpen} onClose={closeAdminDashboardModal}>
          <AdminDashboard onClose={closeAdminDashboardModal} />
        </Modal>
      )}
    </div>
  );
}
