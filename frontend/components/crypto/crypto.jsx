import React from 'react';
import CryptoChart from './crypto_chart/crypto_chart';
import WatchlistContainer from '../watchlist/watchlist_container';
import BuySellPanelContainer from '../trade_history/buy_sell_panel_container';
import News from './news/crypto_news';


class Crypto extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          sym: `${this.props.id}`,
          dateType: "1d"
        };
    }

    componentDidMount(){
      this.props.getNews(this.props.id);
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
                dateType={this.state.dateType}
                coinInfo={this.props.coinInfo}
                getCoinInfo={this.props.getCoinInfo}
              />
              <h2 className="news-header-title">Recent News</h2>
              <News
                news={this.props.news}
                symbols={this.state.syms}
              />
            </div>
            <div className="right-content-main-container">
              <div className="right-side-nav-main-container">
                <div className="right-side-nav-container">
                  {/* watchlist and buy values are here */}
                  <div>
                    <BuySellPanelContainer sym={this.props.id}/>
                  </div>
                  <div>
                    <WatchlistContainer sym={this.props.id}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default Crypto;