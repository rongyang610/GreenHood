import React from 'react';
import { Link } from 'react-router-dom';

class OwnedStocksAndWatchlist extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ownedCoinsData: false,
      coinsPriceData: false
    };
  }
  componentDidUpdate(prevProp){
    if ((prevProp.ownedCoins !== this.props.ownedCoins) && (!this.state.ownedCoinsData)){
      this.setState({ownedCoinsData: true});
    } else if((prevProp.coinsPrice !== this.props.coinsPrice) && (!this.state.coinsPriceData)){
      this.setState({coinsPriceData: true});
    }
  }

  render(){
    const {ownedCoins, coinsPrice} = this.props;
    let result = (this.state.ownedCoinsData && this.state.coinsPriceData) ? ownedCoins.map( (obj, idx) => {
      let sym = Object.keys(obj)[0];
      let shares = Object.values(obj)[0];
      if(obj[sym] != 0){
        let currentPrice = coinsPrice[sym]['USD'];
        let totalCoinValue = parseFloat(Math.round(currentPrice * shares * 100)/100).toFixed(2);
        let newTotal = parseFloat(totalCoinValue).toLocaleString().split('.');
        if (newTotal[1].length < 2){
          newTotal[1] += '0';
        }
        newTotal = newTotal.join('.'); 
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
              ${newTotal}
            </div>
          </div>
        </Link>
        )
      }
    }) : null;
    return (
      <div className="owned-crypto-main-container">
        {result}
      </div>
    )
  }
}

export default OwnedStocksAndWatchlist;