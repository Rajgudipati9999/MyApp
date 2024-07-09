import React from 'react';
import './index.css';

const myPlace = {
  name: 'Ongole',
  description: 'A beautiful and serene place to live.',
  link: 'https://example.com' // Replace with a relevant link, if any
};

const MyPlace = () => {
  return (
    <div className="myplace-container">
      <h2 className="myplace-title">My Place</h2>
      <div className="myplace-card">
        <h3>{myPlace.name}</h3>
        <p>{myPlace.description}</p>
        <i class="fa-solid fa-location-dot"></i>
        <p className='location'>Podili, Prakasam, Andra Pradesh, India</p>
      </div>
    </div>
  );
};

export default MyPlace;
