import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="box-of-star1">
      <div className="star star-position1"></div>
      <div className="star star-position2"></div>
      <div className="star star-position3"></div>
      <div className="star star-position4"></div>
      <div className="star star-position5"></div>
      <div className="star star-position6"></div>
      <div className="star star-position7"></div>
    </div>
    <div className="box-of-star2">
      <div className="star star-position1"></div>
      <div className="star star-position2"></div>
      <div className="star star-position3"></div>
      <div className="star star-position4"></div>
      <div className="star star-position5"></div>
      <div className="star star-position6"></div>
      <div className="star star-position7"></div>
    </div>
    <div className="box-of-star3">
      <div className="star star-position1"></div>
      <div className="star star-position2"></div>
      <div className="star star-position3"></div>
      <div className="star star-position4"></div>
      <div className="star star-position5"></div>
      <div className="star star-position6"></div>
      <div className="star star-position7"></div>
    </div>
    <div className="box-of-star4">
      <div className="star star-position1"></div>
      <div className="star star-position2"></div>
      <div className="star star-position3"></div>
      <div className="star star-position4"></div>
      <div className="star star-position5"></div>
      <div className="star star-position6"></div>
      <div className="star star-position7"></div>
    </div>
    <img src="src/assets/images/pup-pylon-2.png" alt="Loading..." className="bouncing-image" />
  </div>
);

export default Loader;
