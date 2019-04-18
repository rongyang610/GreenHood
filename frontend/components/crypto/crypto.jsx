import React from 'react';
import CryptoChart from './crypto_chart/crypto_chart';
import Watchlist from '../watchlist/watchlist';
import BuySellPanel from '../trade_history/buy_sell_panel';



class Crypto extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          sym: `${this.props.id}`,
          dateType: "1d"
        };
    }

    render(){
      let userId = this.props.userId;
      return(
        <div className="greenhood-main-sub-container">
          <div className="left-content-main-container">
            <CryptoChart 
              dataHist={this.props.dataHist}
              sym={this.props.id} 
              getChartData={this.props.getChartData}
              dateType={'1d'}
            />
          </div>
          <div className="right-content-main-container">
            <div className="right-side-nav-main-container">
              <div className="right-side-nav-container">
                {/* watchlist and buy values are here */}
                <div>
                  <BuySellPanel
                    addTradeHist={this.props.addTradeHist}
                    userId={this.props.userId}
                    userInfo={this.props.user[userId]}
                    sym={this.props.id}
                  />
                </div>
                <Watchlist
                  watchlist={this.props.watchlist}
                  userId={this.props.userId}
                  getWatchlistItems={this.props.getWatchlistItems}
                  addWatchlistItem={this.props.addWatchlistItem}
                  removeWatchlistItem={this.props.removeWatchlistItem}
                  sym={this.props.id}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default Crypto;