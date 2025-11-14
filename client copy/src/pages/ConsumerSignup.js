import React from 'react';
import { Link } from 'react-router-dom';

function ConsumerSignup() {
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
            <form>
              <label for="name">Username</label>
              <input type="text" placeholder="Enter username"></input>
              <label for="email">Email</label>
              <input type="email" placeholder="Enter email"></input>
              <label for="password">Pasword</label>
              <input type="password" placeholder="Enter password"></input>
              <label for="password">Confirm Password</label>
              <input type="password" placeholder="Confirm password"></input>
              
              <div className ="buttons">
              <Link to="/" className='back-button'>Back</Link>
              {/* <button className='consumer-signup-button' type="submit">Get Started</button> */}
              <Link to="/consumer-dashboard" className='consumer-signup-button' type="submit">Get Started</Link>
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