import React from 'react';

const FooterPage = () => {
  return (
    <footer id="contact" className="relative z-15 bg-dark-blue text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Contacts</h2>
          <p>+63 914 456 5641</p>
          <p>tbipylonteam@pup.edu.ph</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Quick Link</h2>
          <ul>
            <li><a href="#" className="hover:underline">PUP Official Website</a></li>
            <li><a href="#" className="hover:underline">TBI Programs</a></li>
            <li><a href="#" className="hover:underline">Apply Now</a></li>
            <li><a href="#" className="hover:underline">Address</a></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">About us</h2>
          <ul>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Mission</a></li>
            <li><a href="#" className="hover:underline">Vision</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Got a Question? Send us an Email</h2>
          <div className="mt-2 inline-flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="text"
              className="px-4 py-2 text-dark-blue flex-grow outline-none"
              placeholder="Get product updates"
            />
            <button className="px-4 py-2 bg-light-blue text-white hover:bg-blue-700">
              <svg
                className="w-4 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-around items-center border-t border-gray-700 pt-6">
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
        <div className="text-center mt-4 md:mt-0">
          <p>PUP TBI PYLON HUB</p>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <p>© 2024 Lift Media. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
