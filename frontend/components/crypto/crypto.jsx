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
      return(
        <div>
          <div className="background-color"></div>
          <div className="greenhood-main-sub-container">
            <div className="left-content-main-container">
              <CryptoChart 
                dataHist={this.props.dataHist}
                sym={this.props.id} 
                getChartData={this.props.getChartData}
                dateType={'1d'}
                coins={this.props.coins}
              />
            </div>
            <div className="right-content-main-container">
              <div className="right-side-nav-main-container">
                <div className="right-side-nav-container">
                  {/* watchlist and buy values are here */}
                  <div>
                    <BuySellPanel
                      addTradeHist={this.props.addTradeHist}
                      coinPrice={this.props.coinPrice}
                      userId={this.props.userId}
                      userBuyPower={this.props.userBuyPower}
                      sym={this.props.id}
                      getCoinPrice={this.props.getCoinPrice}
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
        </div>
      )
    }
}

export default Crypto;