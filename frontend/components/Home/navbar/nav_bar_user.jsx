import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './searchBar/search_bar';
import NavAccountContainer from './nav_account_container';


class NavBarUser extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showAcc: false
    };
  }
  render(){
    return (
      <div className="main-nav">
        <div className="main-nav-container">
          <div className="left-nav-user">
            <Link to='/' className="logo">
              <img src={window.navLogo} className='navLogo' /> 
            </Link>
          </div>
  
          <div className="mid-nav-user">
            <SearchBar prop={this.props}/>
          </div>
  
          <div className="right-nav right-user-nav">
            <Link to={'/'} className="nav-home-link">Home</Link>
            <button className="nav-user-button">Notifications</button>
            <button onClick={() => this.setState({showAcc: true})} className={this.state.showAcc ? "nav-user-button-clicked" : "nav-user-button"}>Account</button>
          </div>
          <div className={this.state.showAcc ? "" : "nav-account-main-container-none" } >
            <div className="modal" onClick={() => this.setState({showAcc: false})} ></div>
            <NavAccountContainer />
          </div>
        </div>
      </div>
      );
  }
}

export default NavBarUser;