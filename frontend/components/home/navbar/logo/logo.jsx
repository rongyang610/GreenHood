import React from 'react';
import {Link} from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className="logo">
      <img src={window.navLogo} className='navLogo' /> <span className="logo-name">Greenhood </span> 
    </Link>
    );
};

export default Logo;