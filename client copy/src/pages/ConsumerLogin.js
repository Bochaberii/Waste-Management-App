import React from 'react';
import { Link } from 'react-router-dom';

function ConsumerLogin() {
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
            <i className="fa-solid fa-recycle"></i>
          </div>
            

          <p className='consumer-welcome-phrase'>Welcome Collector! Login to your account below!</p>

          <div className='form'>
            <form>
              <label for="name">Username</label>
              <input type="text" placeholder="Enter username"></input>
              <label for="password">Pasword</label>
              <input type="password" placeholder="Enter password"></input>

              <div className="buttons">
                <Link to="/"className='back-button'>Back</Link>
                <button className='consumer-signup-button' type="submit">Login</button>
              </div>

              <p>Don't have an account? <Link to="/consumer-signup" style={{color:'#009966', textDecoration:'underline'}}>Sign up</Link></p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}


export default ConsumerLogin;