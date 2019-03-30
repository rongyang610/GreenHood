import React from 'react';
import Logo from './logo/logo';
import {Link} from 'react-router-dom';


const NavBarNoUser = () => {
  return (
    <div className="main-nav">
      <div className="main-nav-container">
        <div className="left-nav">
          <Logo />
        </div>

        <div className="mid-nav">
          <div className="nav-header-text">
            LinkedIn
          </div>
          <div className="nav-header-text">
            Github
          </div>
        </div>

        <div className="right-nav">
          <Link to={'/login'}>
            <button className="nav-login-button">Log In</button>
          </Link>
          <Link to={'/signup'}>
            <button className="nav-signup-button">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default NavBarNoUser;