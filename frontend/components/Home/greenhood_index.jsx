import React from 'react';
import { Link } from 'react-router-dom';

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
        <div>
          <div className="right-nav">
            <a href="/" div className="logo">
            <img src={window.navLogo} className='navLogo' /> greenhood </a>
          </div>
          <Link to={'/signup'}>Sign Up</Link>
          <br/>
          <Link to={'/login'}>Log In</Link>
        </div>
      );
    }
  }
}

export default GreenhoodIndex;