import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ConsumerWelcomeMessage from '../components/ConsumerWelcomeMessage';

function ConsumerDashboard() {
  return (
    <main>
      <NavBar />
      <ConsumerWelcomeMessage />
    </main>
  )
}

export default ConsumerDashboard;