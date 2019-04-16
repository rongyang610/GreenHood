import React from 'react';
import SplashNoUser from './no_current_user/splash_no_user';
import NavBarNoUser from './navbar/nav_bar_no_user';


class GreenhoodIndex extends React.Component {

  render(){
    const {currentUser} = this.props;
    if(currentUser){
    return (
      <div className="greenhood-main-container">
        <div className="greenhood-main-sub-container">
          <div className="left-content-main-container">
          <br/>
          <br/>
          <h1>Welcome to Greenhood, {currentUser.username}! </h1>
          </div>

          <div className="right-content-main-container">
            {/* owned stocks and watchlist here */}
          </div>
        </div>
      </div>
    );
    } else {
      return (
        // .splash-no-user-main.container is located in splash_no_user.css
        <div className="greenhood-main-container">
          <div className="greenhood-main-sub-container">
            <NavBarNoUser />
            <SplashNoUser />
          </div>
        </div>
      );
    }
  }
}

export default GreenhoodIndex;