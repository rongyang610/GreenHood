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
            <a href="https://www.linkedin.com/in/rong-yang-502150163/" target="_blank">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
          <div className="nav-header-text">
            <a href="https://github.com/rongyang610" target="_blank">
            <i class="fab fa-github"></i> Github
            </a>
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