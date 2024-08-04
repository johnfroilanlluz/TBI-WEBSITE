import React from 'react';

const FooterPage = () => {
  return (
    <footer id="contact" className="relative z-15 bg-dark-blue text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Contacts</h2>
          <p>+63 914 456 5641</p>
          <p>tbipylonteam@pup.edu.ph</p>
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul>
            <li><a href="#" className="hover:underline">PUP Official Website</a></li>
            <li><a href="#" className="hover:underline">TBI Programs</a></li>
            <li><a href="#" className="hover:underline">Apply Now</a></li>
            <li><a href="#" className="hover:underline">Address</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">About Us</h2>
          <ul>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Mission</a></li>
            <li><a href="#" className="hover:underline">Vision</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-around items-center border-t border-gray-700 pt-6 space-y-4 md:space-y-0">
        <div className="flex space-x-4">
          <a href="#" className="hover:opacity-75">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:opacity-75">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:opacity-75">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="text-center">
          <p>PUP TBI PYLON HUB</p>
        </div>
        <div className="text-center">
          <p>© 2024 Lift Media. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
