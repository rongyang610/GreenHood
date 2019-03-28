import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/"><img src={window.navLogo} className='navLogo signup-logo' /></a>
      </div>
      <div className="navbar-right">

      </div>
    </div>
    );
};

export default NavBar;