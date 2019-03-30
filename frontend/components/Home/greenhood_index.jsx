import React from 'react';
import { Link } from 'react-router-dom';
import NavBarNoUser from './navbar/nav_bar_no_user';
import SplashNoUser from './no_current_user/splash_no_user';


class GreenhoodIndex extends React.Component {

  render(){
    const {currentUser, logout} = this.props;
    if(currentUser){
    return (
      <div>
        <div classname="right-nav">
        <a href="/" div className="logo">
        <img src={window.navLogo} className='navLogo' /> greenhood </a>
        </div>
        <h1>Welcome to Greenhood, {currentUser.username}! </h1>
        <button onClick={() => logout()}>Log out</button>
      </div>
    );
    } else {
      return (
        // .splash-no-user-main.container is located in splash_no_user.css
        <div>
          <NavBarNoUser />
          <SplashNoUser />
        </div>
      );
    }
  }
}

export default GreenhoodIndex;