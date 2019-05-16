import React from 'react';

class NavAccount extends React.Component {
  capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  convertToUSD(price){
    let convertedPrice = parseFloat(price).toLocaleString().split('.');
      if (!convertedPrice[1]){
        convertedPrice.push('00');
      } else if (convertedPrice[1].length < 2){
        convertedPrice[1] += '0';
      }
      return convertedPrice.join('.');
  }

  render(){
    const {currentUser, logout} = this.props;
    return (
        <div className="nav-account-main-container">
          <div className="nav-account-container nav-account-first-section-container"> {/* give this div a flex column */}
            {/* will need to import props for first and last name */}
            <div className="nav-account-component-first-section">
              {this.capitalize(currentUser.fname)} {this.capitalize(currentUser.lname)}
            </div>
            <div className="nav-account-component-first-section nav-account-port-buy">
              {/* <div className="portfolio-value">
                <div className="port-buy-value">
                  $0.00
                </div>
                <div className="port-buy-text">
                  Portfolio Value
                </div>
              </div> */}
              <div className="buying-power">
                <div className="port-buy-value">
                  ${this.convertToUSD(this.props.currentUser.buy_power)}
                </div>
                <div className="port-buy-text">
                  Buying Power
                </div>
              </div> 
            </div>
          </div>
          {/* <div className="nav-account-container nav-account-second-section-container">
            <div className="nav-account-component">
              <i className="fas fa-gift"></i> Free Crypto
            </div>
            <div className="nav-account-component">
              <i className="fas fa-briefcase"></i> Account
            </div>
            <div className="nav-account-component">
              <i className="fas fa-university"></i> Banking
            </div>
            <div className="nav-account-component">
              <i className="fas fa-history"></i> History
            </div>
            <div className="nav-account-component">
              <i className="fas fa-cog"></i> Settings
            </div>
          </div>
          <div className="nav-account-container nav-account-third-section-container">
            <div className="nav-account-component">
              <i className="fas fa-life-ring"></i> Help
            </div>
            <div className="nav-account-component">
              <i className="fas fa-bars"></i> Disclosures
            </div>
          </div> */}
          <div className="nav-account-container nav-account-fourth-section-container">
              <button onClick={() => logout()} className="nav-account-component"><i className="fas fa-sign-out-alt"></i> Log Out</button>
          </div>
        </div>
      );
  }
}

export default NavAccount;