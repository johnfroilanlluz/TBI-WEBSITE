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
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold w-full' data-aos="zoom-in">
          CALL FOR <span className='text-custom-yellow'>INCUBATEES</span>
        </h1>
        <div className='flex flex-col gap-4 items-center' data-aos="fade-up">
          <p className='text-sm my-9 sm:text-base md:text-lg lg:text-lg xl:text-xl'>
          The PYLON Innovators Program is a six-month incubation initiative for early-stage startups. The program offers mentorship in Supply Chain Engineering, Logistics Simulation, Software Development, Product Startup Conversion and access to Co-working Space, IP Support, and Engagement with Funding Agencies.
          </p>
          <button
            type="button"
            className="text-neutral-white bg-red-800 hover:bg-custom-yellow focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 py-2 sm: text-center w-64 sm:w-72 md:w-80 lg:w-96 h-10  transition-transform transform hover:translate-y-1 hover:scale-110 duration-300"
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
