import React from 'react';
import Ring from '../assets/images/service-ring.svg';
import Ball from '../assets/images/service-ball.svg';
const Service = () => {
  return (
    <section className='service_container'>
      <div className='service-row'>
        <div className='diamond' />
        <div className='empty-divs'></div>
        <div className='empty-divs'></div>
        <div className='empty-divs'></div>
        <div className='v' />
        <div className='empty-divs'></div>
      </div>
      <div className='service'>
        <div className='service-left'>
          <img src={Ring} alt=' a ring' className='image' />
        </div>
        <div className='service-right'>
          <h1 className='title'>
            Design and build the future of the internet.
          </h1>
          <p className='description'>
            We believe that in the near future every website will have an AR/VR
            experience (Responsive XR; Responsive Reality) — a near identical
            adoption we saw with smartphones and responsive web. We’re here to
            accelerate this adoption by making building websites in XR
            intuitive, easy, and fun.
          </p>
          <button className='join-button'>JOIN OUR MOVEMENT</button>
        </div>
      </div>
      <div className='ball-container'>
        <img src={Ball} alt='a ball' className='ball' />
      </div>{' '}
    </section>
  );
};

export default Service;
