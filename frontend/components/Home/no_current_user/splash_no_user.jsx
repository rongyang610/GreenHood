import React from 'react';
import {Link} from 'react-router-dom';


const SplashNoUser = () => {
  return (
    <div className="splash-no-user-main">
      <div className="splash-no-user-text-container"> 
        <span className="splash-no-user-text-header">Invest</span>
        <span className="splash-no-user-text">Commission-Free</span>
        <p>Invest in stocks, ETFs, options, and cryptocurrencies, 
          all commission-free, right from your phone or desktop.</p>
        <Link to={'/signup'}>
          <button className="nav-signup-button">Sign Up</button>
        </Link>
      </div>
      <div className="splash-no-user-img">
        <img src="https://skynet03.goffvps.com/baiter/greenhood/splash-pic.png" className="splash-no-user-img"/>
      </div>
    </div>
    );
};

export default SplashNoUser;