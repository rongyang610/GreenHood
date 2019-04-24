import React from 'react';
import { Link } from 'react-router-dom';

class OwnedStocksAndWatchlist extends React.PureComponent{
  constructor(props){
    super(props);
    // this.state={
    //   ownedCoinsData: false,
    //   coinsPriceData: false
    // };
  // }
  // componentDidUpdate(prevProp){
  //   if ((prevProp.ownedCoins !== this.props.ownedCoins)){
  //     this.setState({ownedCoinsData: true});
  //   } else if((prevProp.coinsPrice !== this.props.coinsPrice)){
  //     this.setState({coinsPriceData: true});
  //   }
  // }
  }
  render(){
    const {ownedCoins, coinsPrice} = this.props;
    let result = (ownedCoins.length !==0) ? ownedCoins.map( (obj, idx) => {
      let sym = Object.keys(obj)[0];
      let shares = Object.values(obj)[0];
      if(obj[sym] != 0){
        let currentPrice = coinsPrice[sym]['USD'];
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
                {shares} of Shares
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
    }) : null;
    return (
      <div className="owned-crypto-main-container">
        <div className="cryptocurrency-title">
          Cryptocurrencies
        </div>
        {result}
        <div className="watchlist-title">
          Watchlist
        </div>
      </div>
    )
  }
}

export default OwnedStocksAndWatchlist;