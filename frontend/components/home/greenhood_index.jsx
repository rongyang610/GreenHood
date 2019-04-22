import React from 'react';
import SplashNoUser from './no_current_user/splash_no_user';
import NavBarNoUser from './navbar/nav_bar_no_user';
import UserHomePageContainer from './home_page_container';


class GreenhoodIndex extends React.Component {
  
  render(){
    const {currentUser} = this.props;
    if(currentUser){
    return (
      <UserHomePageContainer />
    );
    } else if(!currentUser){
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