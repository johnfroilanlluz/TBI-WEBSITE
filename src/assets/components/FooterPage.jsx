import React from 'react';
import { Link } from 'react-scroll';



const FooterPage = () => {
  return (
    <footer id="contact" className="relative z-15 bg-dark-blue text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Contacts</h2>
          <p>tbic@pup.edu.ph</p>
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul>
            <li><a href="https://www.pup.edu.ph/" target='_blank' className="hover:underline">PUP Official Website</a></li>
            <li><a href="#" className="hover:underline">TBI Programs</a></li>
            <Link to="home" className="nav-link block py-2 px-3 md:p-0 transition-colors duration={300}" smooth={true} duration={500}> <li><a href="#" className="hover:underline">Apply Now</a></li></Link>
            <li><a href="https://www.google.com/maps/dir/14.6046317,121.0523967/H2X6%2BQVV+PUP+Main+-+A.+Mabini+Campus,+Sta.+Mesa,+Manila,+PUP+Main+Entrance+Rd,+Santa+Mesa,+Manila,+Metro+Manila/@14.6058287,121.0119185,14z/data=!3m1!4b1!4m19!1m8!3m7!1s0x3397c9dd97a1439b:0x44e1b969e7f1f67a!2sPUP+Main+-+A.+Mabini+Campus,+Sta.+Mesa,+Manila!8m2!3d14.5994893!4d121.0121836!15sChBwdXAgbWFpbiBhZGRyZXNzIgVIAYgBAZIBBnNjaG9vbOABAA!16s%2Fg%2F11c6cb8r1q!4m9!1m1!4e1!1m5!1m1!1s0x3397c9dd97a1439b:0x44e1b969e7f1f67a!2m2!1d121.0121836!2d14.5994893!3e0?entry=ttu" target='_blank' className="hover:underline">Address</a></li>
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
          <a href="https://www.facebook.com/profile.php?id=61560094408721" target='_blank' className="hover:opacity-75">
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
          <p>© 2024 PUP Technology Business Incubation </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
