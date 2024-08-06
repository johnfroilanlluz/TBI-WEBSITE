import React from 'react';

const partners = [
  {
    name: 'SCALE NCR',
    imgSrc: 'src/assets/images/scalencr.jpeg', 
  },
  {
    name: 'DOST',
    imgSrc: 'src/assets/images/dost.jpg', 
  },
  {
    name: 'PhilDev',
    imgSrc: 'src/assets/images/phildev.png', 
  },
  {
    name: 'Microsoft Learn',
    imgSrc: 'src/assets/images/microsoft.jpeg', 
  },
];

const PartnersSection = () => {
  return (
    <section className="bg-light-blue py-20">
      <div className="relative z-15 container mx-auto text-center px-4 sm:px-8 lg:px-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-white">OUR PARTNERS</h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-3xl shadow-lg w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center"
            >
              <img
                src={partner.imgSrc}
                alt={partner.name}
                className="w-28 h-28 sm:w-44 sm:h-44 rounded-3xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
