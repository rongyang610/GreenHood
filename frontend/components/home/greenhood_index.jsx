import React from 'react';
import SplashNoUser from './no_current_user/splash_no_user';
import NavBarNoUser from './navbar/nav_bar_no_user';
import SideBar from './owned_crypto_and_watchlist/home_right_content';
import PortfolioChart from './Portfolio/portfolio_chart';


class GreenhoodIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: this.props.currentUser.id,
      ownedCoins: {},
      syms: []
    };
  }

  componentDidMount(){
    this.props.getTradeHistories(this.state.userId)
    .then(() => this.pushCoins());
  }

  pushCoins(){
    let ownedCoins = {};
    this.props.trades.forEach( trade => {
      if(trade.buy_price !== 0){
        if(ownedCoins[trade.crypto_sym]){
          ownedCoins[trade.crypto_sym] += 1;
        } else {
          ownedCoins[trade.crypto_sym] = 1;
        }
      } else if(trade.buy_price === 0){
        ownedCoins[trade.crypto_sym] -= 1;
      }
    });
    this.setState({
      ownedCoins: this.changeFormat(ownedCoins), 
      syms: Object.keys(ownedCoins)
    });
  }

  changeFormat(obj){
    const arr = [];
    const ownedCoinsList = Object.keys(obj);
    const coinAmount = Object.values(obj);
    for (let i = 0; i < ownedCoinsList.length; i++) {
      let sym = ownedCoinsList[i];
      let amount = coinAmount[i];
      let newObject = {};
      newObject[sym] = amount;
      arr.push(newObject);
    }
    return arr;
  }

  render(){
    const {currentUser} = this.props;
    if(currentUser){
    return (
      <div className="greenhood-main-container">
        <div className="greenhood-main-sub-container">
          <div className="left-content-main-container">
          <h1>Welcome to Greenhood, {currentUser.username}! </h1>
            <PortfolioChart
              syms={this.state.syms}
              trades={this.state.ownedCoins}
              tradeHist={this.props.trades}
              histData={this.props.histData}
              getHistData={this.props.getChartData}
            />
          </div>

          <div className="right-content-main-container">
            <div className="right-side-nav-main-container">
              <div className="right-side-nav-container">
                {/* owned stocks and watchlist here */}
                <SideBar
                  ownedCoins={this.state.ownedCoins}
                />
              </div>
            </div>
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