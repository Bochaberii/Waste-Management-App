import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProducerWelcomeMessage from '../components/ProducerWelcomeMessage';

function ProducerDashboard() {
  return (
    <main>
      <NavBar />
      <ProducerWelcomeMessage />
      <div className='producer-listings'>
        <div className='listing-blocks'>
          <div className='icon-box'> 
            <i class="fa-solid fa-cube"></i>
          </div>
          <p>Total Listings</p>
          <p>0</p>
        </div>

        <div className='listing-blocks'>
          <div className='icon-box'>
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <p>Available</p>
          <p>0</p>
        </div>

        <div className='listing-blocks'>
          <div className='icon-box'>
            <i class="fa-regular fa-clock"></i>
          </div>
          <p>Pending Pickup</p>
          <p>0</p>
        </div>

        <div className='listing-blocks'>
          <div className='icon-box'>
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <p>Completed</p>
          <p>0</p>
        </div>
      </div>
    </main>
  )
}

export default ProducerDashboard;