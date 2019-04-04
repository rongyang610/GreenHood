import React from 'react';
import NavBarNoUser from './navbar/nav_bar_no_user';
import NavBarUser from './navbar/nav_bar_user';
import SplashNoUser from './no_current_user/splash_no_user';


class GreenhoodIndex extends React.Component {

  render(){
    const {currentUser} = this.props;
    if(currentUser){
    return (
      <div className="greenhood-main-container">
        <div className="greenhood-main-sub-container">
          <NavBarUser/>
          <br/>
          <br/>
          <h1>Welcome to Greenhood, {currentUser.username}! </h1>
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