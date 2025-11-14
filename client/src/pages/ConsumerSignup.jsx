import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ConsumerSignup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to consumer dashboard when Get Started is clicked
    navigate('/consumer-dashboard');
  };

  return (
    <main>
      <div className="main-page">
        <div className='home-block'>
          <div className="logo-div">
            <i className="fa-solid fa-recycle"></i>
            <p className="logo">Waste-to-Wonder</p>
          </div>

          <p className="catch-phrase">
            Transform waste into opportunity. Join our sustainable marketplace today.
          </p>

          <div className='consumer-signup'>
            <i className="fa-solid fa-people-arrows"></i>
          </div>
          
          <p className='consumer-welcome-phrase'>Welcome Collector! Sign-up to start your sustainable journey below!</p>

          <div className='form'>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Username</label>
              <input type="text" placeholder="Enter username"></input>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter email"></input>
              <label htmlFor="password">Pasword</label>
              <input type="password" placeholder="Enter password"></input>
              <label htmlFor="password">Confirm Password</label>
              <input type="password" placeholder="Confirm password"></input>
              
              <div className ="buttons">
              <Link to="/" className='back-button'>Back</Link>
              <button className='consumer-signup-button' type="submit">Get Started</button>
              </div>
              
              <p>Already have an account? <Link to="/consumer-login" style={{color:'#009966', textDecoration:'underline'}}>Login</Link></p>
            </form>
          </div>


        </div>
      </div>
    </main>
)
}

export default ConsumerSignup;
