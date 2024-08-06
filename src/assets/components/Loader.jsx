import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <img src="src/assets/images/pup-pylon-2.png" alt="Loading..." className="bouncing-image" />
  </div>
);

export default Loader;
