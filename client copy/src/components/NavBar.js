import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
          <i className="fa-solid fa-recycle"></i>
          <p className="nav-logo">Waste to Wonder</p>
        </div>
        <ul>
          <li><Link>News and Blogs</Link></li>
          <li><Link>Leaderboard</Link></li>
          <li><Link to='/'>Logout</Link></li>
        </ul>
      </nav>
  )
}
export default NavBar;