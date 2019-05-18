import React from 'react';
import SideBarContainer from './owned_crypto_and_watchlist/side_bar_container';
import PortfolioChart from './Portfolio/portfolio_chart';
import News from './news/all_news';

class UserHomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: this.props.currentUser.id,
      ownedCoins: [],
      syms: [],
      watchlist: [],
    };
  }

  componentDidMount(){
    this.props.getTradeHistories(this.state.userId)
    .then(() => {
      return this.pushCoins();
    });
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
          {/* <h2 className="top-movers-title">Top Movers</h2> */}
          <h2 className="news-header-title">Recent News</h2>
          <News
            news={this.props.news}
            getAllNews={this.props.getAllNews}
            symbols={this.state.syms}
          />
        </div>

        <div className="right-content-main-container">
          <div className="right-side-nav-main-container">
            <div className="right-side-nav-container-home">
              {/* owned stocks and watchlist here */}
              <SideBarContainer ownedCoins={this.state.ownedCoins}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default UserHomePage;