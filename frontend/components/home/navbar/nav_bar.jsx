import React from 'react';
import NavBarNoUser from './nav_bar_no_user';
import NavBarUser from './nav_bar_user';


class NavBar extends React.Component {

  render(){
    const {currentUser} = this.props;
    if(currentUser){
    return (
      <div className="greenhood-main-container">
        <div className="greenhood-main-sub-container">
          <NavBarUser/>
        </div>
      </div>
    );
    } else {
      return (
        <div className="greenhood-main-container">
          <div className="greenhood-main-sub-container">
            <NavBarNoUser />
          </div>
        </div>
      );
    }
  }
}

export default NavBar;