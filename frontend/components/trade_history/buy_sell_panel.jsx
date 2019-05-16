import React from 'react';

class BuySellPanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      buyPage: true,
      sellPage: false,
      buyAmount: '',
      sellAmount: '',
      sellValid: true,
      buyValid: true,
      sharesOwn: 0
    };
    this.postTransaction = this.postTransaction.bind(this);
  }

  componentDidMount(){
    this.props.getCoinPrice(this.props.sym);
  }

  componentDidUpdate(prevProps){
    const ownedCoin = this.props.ownedCoins[this.props.id];
    if (prevProps.sym != this.props.sym){
      this.props.getCoinPrice(this.props.sym)
      .then(() => this.setState({
        buyPage: true,
        sellPage: false,
        buyAmount: '',
        sellAmount: '',
        sellValid: true,
        buyValid: true,
        sharesOwn: 0
      }));
    } else if(ownedCoin != this.state.sharesOwn ){
      let sharesOwn = ownedCoin ? ownedCoin : 0;
      if (!(this.props.sym in this.props.ownedCoins)){
        return;
      }
      this.setState({
        sharesOwn
      });
    }
  }

  update(field){
    return e => {
      if (field === "sell"){
        this.setState({sellAmount: e.target.value});
      } else if (field === "buy"){
        this.setState({buyAmount: e.target.value});
      }
    };
  }

  postTransaction(e){
    e.preventDefault();
    const { buyAmount, sellAmount } = this.state;
    const {coinPrice, updateUserInfo, userId, sym,addTradeHist, userBuyPower} = this.props;
    const ownedCoin = this.props.ownedCoins[this.props.id];
    let sellValid, buyValid;

    if(buyAmount !== ""){
      sellValid = true;
      const buy_price = parseFloat(Math.round(Math.floor(buyAmount) * coinPrice.USD * 100) / 100);
      if(userBuyPower < buy_price){
        buyValid = false;
      } else{
        buyValid = true;
        const buyPower = parseFloat(Math.round((userBuyPower - buy_price) * 100) / 100);
        updateUserInfo(userId, buyPower)
        .then(() => addTradeHist({
          user_id: userId, 
          crypto_sym: sym, 
          crypto_amount: Math.floor(buyAmount),
          buy_price,
          sell_price: 0
        }));
      }
    } else if (sellAmount !== ""){
      buyValid = true;
      const sell_price = parseFloat(Math.round(Math.floor(sellAmount) * coinPrice.USD * 100) / 100);
      // need to validate transaction
      if(ownedCoin < parseInt(sellAmount)){
          sellValid = false;
      } else{
        sellValid = true;
        const buyPower = parseFloat(Math.round((userBuyPower + sell_price) * 100) / 100);
        updateUserInfo(userId, buyPower)
        .then(() => addTradeHist({
          user_id: userId, 
          crypto_sym: sym, 
          crypto_amount: Math.floor(sellAmount),
          buy_price: 0,
          sell_price,
        }));
      }
    }
    this.setState({ sellValid, sellAmount: '', buyAmount: '', buyValid});
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

  //create a function called updating buy power and adding transaction function

  render(){
    let buy = (
      <>
      <form onSubmit={this.postTransaction}>
        <div className="buy-sell-form-component">
          <div>Shares</div>
          <div>
            <input 
              type="number"
              placeholder="0"
              value={this.state.buyAmount}
              onChange={this.update("buy")}
              className="buy-form-input"
              required
            />
          </div>
        </div>
        <div className="buy-sell-form-component buy-sell-market-price">
          <div>Market Price</div>
          <div className="market-price-value">${parseFloat(Math.round(this.props.coinPrice.USD * 100)/100).toFixed(2)}</div>
        </div>
        <div className="buy-sell-form-component buy-sell-estimated-cost">
          <div>Estimated Cost</div>
          <div>${parseFloat(Math.round(Math.floor(this.state.buyAmount) * this.props.coinPrice.USD * 100) / 100).toFixed(2)}</div>
        </div>
        <center>
          <button className="buy-sell-button">
            Buy
          </button>
        </center>
      </form>
      <div className="buy-sell-buy-power">
        <div className={ this.state.buyValid ? "buy-sell-validation" : "buy-sell-validation-failed"}><i className="fas fa-info-circle"></i> Not enough buy power</div>
        <div className="buy-sell-buy-power-text">
          ${this.convertToUSD(this.props.userBuyPower)} Buy Power Available
        </div>
      </div>
      </>
    )
    let sell = (
      <>
        <form onSubmit={this.postTransaction}>
          <div className="buy-sell-form-component">
            <div>Shares</div>
            <div>
              <input 
                type="number"
                placeholder="0"
                value={this.state.sellAmount}
                onChange={this.update("sell")}
                className="buy-form-input"
                required
              />
            </div>
          </div>
          <div className="buy-sell-form-component buy-sell-market-price">
            <div>Market Price</div>
            <div className="market-price-value">${parseFloat(Math.round(this.props.coinPrice.USD * 100) / 100).toFixed(2)}</div>
          </div>
          <div className="buy-sell-form-component buy-sell-estimated-cost">
            <div>Estimated Credit</div>
            <div>${parseFloat(Math.round(Math.floor(this.state.sellAmount) * this.props.coinPrice.USD * 100) / 100).toFixed(2)}</div>
          </div>
          <center>
            <button className="buy-sell-button">
              Sell
            </button>
          </center>
        </form>
        <div className="buy-sell-buy-power">
          <div className={ this.state.sellValid ? "buy-sell-validation" : "buy-sell-validation-failed"}><i className="fas fa-info-circle"></i> Not enough shares</div>
          <div className="buy-sell-buy-power-text">
            {this.state.sharesOwn} Shares
          </div>
        </div>
      </>
    )

    let component = this.state.buyPage ? buy : sell
    return (
    <div className="trade-history-main-container">
      <div className="buy-sell-title">
        <div 
          className={ this.state.buyPage ? "buy-title-active" : "buy-title" }
          onClick={() => this.setState({buyPage: true, sellPage: false, buyAmount: '', sellAmount: ''})}  
        >
          Buy {this.props.sym}
        </div>
        <div 
          className={ this.state.sellPage ? "sell-title-active" : "sell-title" }
          onClick={() => this.setState({buyPage: false, sellPage: true, buyAmount: '', sellAmount: ''})}    
        >
          Sell {this.props.sym}
        </div>
      </div>
      {component}
      </div>
    )
  }
}

export default BuySellPanel;