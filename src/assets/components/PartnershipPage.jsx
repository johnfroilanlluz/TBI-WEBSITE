import React from 'react';

const partners = [
  {
    name: 'SCALE NCR',
    imgSrc: 'src/assets/images/scalencr.jpeg', 
  },
  {
    name: 'DOST',
    imgSrc: 'src/assets/images/dost.png', 
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
    <section className=" bg-light-blue py-20">
      <div className="relative z-15 container mx-auto text-center">
        <h2 className="text-6xl font-bold mb-12 text-white">OUR PARTNERS</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg shadow-lg w-48 h-48 flex items-center justify-center"
            >
              <img
                src={partner.imgSrc}
                alt={partner.name}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
