import React, { useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LandingPage({ openApplyModal }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="home" className='relative min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <ParticleBackground />
      <div className="relative z-5 text-white w-full" data-aos="fade-up">
        <h1 className='text-8xl font-bold w-full' data-aos="zoom-in">CALL FOR <span className='text-primary-gold'>INCUBATEES</span></h1>
        <div className='flex flex-col gap-4 items-center' data-aos="fade-up">
          <br />
          <p>The PYLON Innovators Program is a six-month incubation initiative for early-stage startups, student startups, and faculty technopreneurs. It focuses on designing and managing systems to optimize the flow of materials, products, services, and information in the value chain and logistics ecosystem. The program offers mentorship in Supply Chain Engineering, Logistics Simulation, Software Development, Product to Startup Conversion and access to Co-working Space, IP Support, and Engagement with Funding Agencies.</p>
          <button
            type="button"
            className="text-neutral-white mt-7 bg-red-800 hover:bg-primary-gold-dark focus:ring-4 focus:outline-none focus:ring-primary-gold-light font-medium rounded-lg text-sm px-2 py-2 text-center w-96 h-10 transition-transform transform hover:translate-y-1 hover:scale-110 duration-300"
            onClick={openApplyModal}
            data-aos="zoom-in"
          >
            APPLY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
