import React from 'react';
import SideBar from './owned_crypto_and_watchlist/home_right_content';
import PortfolioChart from './Portfolio/portfolio_chart';

class UserHomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: this.props.currentUser.id,
      ownedCoins: [],
      syms: [],
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
          ownedCoins[trade.crypto_sym] += trade.crypto_amount;
        } else {
          ownedCoins[trade.crypto_sym] = trade.crypto_amount;
        }
      } else if(trade.buy_price === 0){
        ownedCoins[trade.crypto_sym] -= trade.crypto_amount;
      }
    });
    let syms = Object.keys(ownedCoins);
    this.props.getMultCoinsPrice(syms)
    .then( () => this.setState({
      ownedCoins: this.changeFormat(ownedCoins), 
      syms
    }));
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
    return(
    <div className="greenhood-main-container">
        <div className="greenhood-main-sub-container">
          <div className="left-content-main-container">
          <h2>Welcome to Greenhood a cryptocurrency clone of Robinhood! </h2>
            <PortfolioChart
              coinsPrice={this.props.coinsPrice}
              syms={this.state.syms}
              ownedCoins={this.state.ownedCoins}
              trades={this.props.trades}
              tradeHist={this.props.trades}
              histData={this.props.histData}
              getHistData={this.props.getChartData}
              currentUser={currentUser}
            />
          </div>

          <div className="right-content-main-container">
            <div className="right-side-nav-main-container">
              <div className="right-side-nav-container">
                {/* owned stocks and watchlist here */}
                <SideBar
                  ownedCoins={this.state.ownedCoins}
                  coinsPrice={this.props.coinsPrice}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserHomePage;