import React from 'react';
import { Link } from 'react-router-dom';

class OwnedStocksAndWatchlist extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      watchlist: [],
      watchlistPriceCall: false,
    };
  }

  componentDidMount(){
    this.props.getWatchlistItems(this.props.userId).then((watchlist) => {
      this.convertWatchlistToState(watchlist.watchlistItems);
    });
  }

  convertWatchlistToState(watchlist){
    const syms = Object.keys(watchlist);
    this.props.getMultWatchlistCoinsPrice(syms)
    .then( () => this.setState({watchlistPriceCall: true}));
  }

  result(ownedCoins, coinsPrice){
    return ownedCoins.map( (obj, idx) => {
      let sym = Object.keys(obj)[0];
      let shares = Object.values(obj)[0];
      if(obj[sym] != 0){
        let currentPrice = coinsPrice[sym].USD;
        let coinValue = parseFloat(Math.round(currentPrice * 100)/100).toFixed(2);
        let newCoinValue = parseFloat(coinValue).toLocaleString().split('.');
        if (!newCoinValue[1]){
          newCoinValue.push('00');
        } else if (newCoinValue[1].length < 2){
          newCoinValue[1] += '0';
        }
        newCoinValue = newCoinValue.join('.');
        return( 
        <Link key={idx} to={`/crypto/${sym}`}>
          <div className="owned-crypto-components-container">
            <div className="owned-crypto-left-component">
              <div className="owned-crypto-sym-format">
                {sym}
              </div>
              <div>
                {shares} Shares
              </div>
            </div>
            <div className="owned-crypto-middle-component">
              {/* the graph goes here */}
            </div>
            <div className="owned-crypto-right-component">
              ${newCoinValue}
            </div>
          </div>
        </Link>
        )
      }
    })
  }

  watchlistResult(watchlist, watchlistCoinsPrice){
    return watchlist.map( (obj, idx) => {
      let sym = Object.keys(obj)[0];
      let shares = Object.values(obj)[0];
      if(obj[sym] != 0){
        let currentPrice = watchlistCoinsPrice[sym].USD;
        let coinValue = parseFloat(Math.round(currentPrice * 100)/100).toFixed(2);
        let newCoinValue = parseFloat(coinValue).toLocaleString().split('.');
        if (!newCoinValue[1]){
          newCoinValue.push('00');
        } else if (newCoinValue[1].length < 2){
          newCoinValue[1] += '0';
        }
        newCoinValue = newCoinValue.join('.');
        return( 
        <Link key={idx} to={`/crypto/${sym}`}>
          <div className="owned-crypto-components-container">
            <div className="owned-crypto-left-component">
              <div className="owned-crypto-sym-format">
                {sym}
              </div>
            </div>
            <div className="owned-crypto-middle-component">
              {/* the graph goes here */}
            </div>
            <div className="owned-crypto-right-component">
              ${newCoinValue}
            </div>
          </div>
        </Link>
        )
      }
    })
  }



  render(){
    const {ownedCoins, coinsPrice, watchlists, watchlistCoinsPrice} = this.props;
    debugger
    const watchlistArr = Object.values(watchlists);
    const ownedResult = (ownedCoins.length !==0) ? this.result(ownedCoins, coinsPrice) : null;
    const watchlistRes = (watchlistArr.length !==0 && this.state.watchlistPriceCall) ? this.watchlistResult(watchlistArr, watchlistCoinsPrice) : null;
    return (
      <div className="owned-crypto-main-container">
        <div className="cryptocurrency-title">
          Cryptocurrencies
        </div>
        {ownedResult}
        <div className="watchlist-title">
          Watchlist
        </div>
        {watchlistRes}
      </div>
    )
  }
}

export default OwnedStocksAndWatchlist;