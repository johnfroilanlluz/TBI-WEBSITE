import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhatWeDo() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="program" className="relative z-15 min-h-screen flex flex-col pt-32 items-center justify-center w-full mx-auto p-10 bg-slate-100">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-800 text-center" data-aos="slide">BANNER PROGRAM</h1>
      <h1 className="text-xl sm:text-2xl text-black text-center italic" data-aos="slide" data-aos-delay="200">“Supply Chain Engineering and Logistics Technologies”</h1>
      
      <div className="container mx-auto mt-12 ">
        <div className="flex flex-col items-center md:flex-row md:items-start justify-center gap-8 mb-12" data-aos="slide-right" data-aos-delay="200">
          <img src="src/assets/images/operational-efficiency.png" className="w-48 h-48 md:w-48 md:h-48" alt="Operational Efficiency" />
          <div className="text-justify md:w-1/2">
            <p className="text-xl font-bold">Services for Operational Efficiency Startups</p>
            <p className="text-base text-left">
              PYLON TBI offers customized programs for startups aiming to enhance operational efficiency. Services include access to advanced process optimization tools, automation technologies, and data analytics platforms. Additionally, we provide mentorship from industry experts and opportunities for pilot projects to test and refine solutions in real-world scenarios.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:flex-row-reverse md:items-start justify-center gap-8 mb-12" data-aos="slide-left" data-aos-delay="400">
          <img src="src/assets/images/workplace-safety.png" className="w-48 h-48 md:w-48 md:h-48" alt="Workplace Safety" />
          <div className="text-justify md:w-1/2">
            <p className="text-xl font-bold">Workplace Safety and Customer Experience Startups</p>
            <p className="text-base text-left">
              Startups focused on workplace safety and customer experience benefit from our comprehensive suite of incubation services. These include access to state-of-the-art safety technologies, training programs, and customer service platforms. We also offer workshops on regulatory compliance and best practices, alongside networking opportunities with key industry players to foster innovation and collaboration.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:items-start justify-center gap-8 mb-12" data-aos="slide-right" data-aos-delay="600">
          <img src="src/assets/images/sustainable.png" className="w-48 h-48 md:w-48 md:h-48" alt="Sustainable Warehousing" />
          <div className="text-justify md:w-1/2">
            <p className="text-xl font-bold">Sustainable Warehousing and Logistics Distribution</p>
            <p className="text-base text-left">
              Our center supports startups dedicated to sustainable warehousing and logistics distribution by providing access to eco-friendly technologies and materials, energy-efficient solutions, and green logistics strategies. Services include sustainability assessments, guidance on regulatory standards, and connections with partners and investors committed to environmental stewardship and sustainable practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
