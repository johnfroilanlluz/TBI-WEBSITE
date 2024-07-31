import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutUs = () => {
  return (
    <div id="about" className="relative z-15 min-h-screen flex flex-col gap-10 items-center justify-center text-center w-full mx-auto p-10 bg-custom-maroon">
      <h2 className="mb-4 text-7xl font-bold text-slate-200">ABOUT US</h2>
      <div className=" flex flex-col md:flex-row w-11/12 items-center justify-between p-6 bg-slate-200 rounded-lg shadow-md dark:bg-gray-800">
        <div className=" flex justify-center md:w-1/2  mb-4 md:mb-0 ">
          <Carousel 
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={true}
            autoPlay={true}
            interval={2500}
            className="w-11/12 h-auto rounded-lg"
          >
            <div>
              <img 
                src="src/assets/images/about-us-1.jpg" 
                alt="About Us 1" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <img 
                src="src/assets/images/about-us-2.jpg" 
                alt="About Us 2" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <img 
                src="src/assets/images/about-us-3.jpg" 
                alt="About Us 3" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <img 
                src="src/assets/images/about-us-4.jpg" 
                alt="About Us 3" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <img 
                src="src/assets/images/about-us-5.jpg" 
                alt="About Us 3" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </Carousel>
        </div>
        <div className="md:w-1/2 md:pr-6">
          <p className="text-gray-700 dark:text-gray-400 text-2xl text-justify ">
            Product Innovation Yielding to Long-Term Opportunities for New Entrepreneurs (PYLON) Hub. aims to foster
            innovation and entrepreneurship among its students by providing a supportive ecosystem for the development and growth
            of technology-based startups. Our key Objective is to Help Early-Stage & Homegrown Startups and Student & Faculty Technopreneurs
            who want to design and manage systems that will improve and maximize the flow of materials, products, services, and information
            along the value chain business and logistics ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
