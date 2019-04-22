import React from 'react';

class BuySellPanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      buyPage: true,
      sellPage: false,
      buyAmount: '',
      sellAmount: '',
    };
    this.postTransaction = this.postTransaction.bind(this);
  }

  componentDidMount(){
    this.props.getCoinPrice(this.props.sym);
  }

  componentDidUpdate(prevProps){
    if (prevProps.sym != this.props.sym){
      this.props.getCoinPrice(this.props.sym)
      .then(() => this.setState({
        buyPage: true,
        sellPage: false,
        buyAmount: '',
        sellAmount: ''
      }));
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
    if(this.state.buyAmount !== ""){
      this.props.addTradeHist({
        user_id: this.props.userId, 
        crypto_sym: this.props.sym, 
        crypto_amount: Math.floor(this.state.buyAmount),
        buy_price: (this.state.buyAmount * this.props.coinPrice['USD']),
        sell_price: 0
      });
    } else if (this.state.sellAmount !== ""){
      this.props.addTradeHist({
        user_id: this.props.userId, 
        crypto_sym: this.props.sym, 
        crypto_amount: Math.floor(this.state.sellAmount),
        buy_price: 0,
        sell_price: (this.state.sellAmount * this.props.coinPrice['USD'])
      });
    }
    this.setState({buyAmount: '', sellAmount: ''});
  }

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
          <div className="market-price-value">${parseFloat(Math.round(this.props.coinPrice['USD'] * 100)/100).toFixed(2)}</div>
        </div>
        <div className="buy-sell-form-component buy-sell-estimated-cost">
          <div>Estimated Cost</div>
          <div>${parseFloat(Math.round(Math.floor(this.state.buyAmount) * this.props.coinPrice['USD'] * 100) / 100).toFixed(2)}</div>
        </div>
        <center>
          <button className="buy-sell-button">
            Buy
          </button>
        </center>
      </form>
      <div className="buy-sell-buy-power">
        <div className="buy-sell-buy-power-text">
          ${this.props.userBuyPower} Buy Power Available
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
            <div className="market-price-value">${parseFloat(Math.round(this.props.coinPrice['USD'] * 100) / 100).toFixed(2)}</div>
          </div>
          <div className="buy-sell-form-component buy-sell-estimated-cost">
            <div>Estimated Credit</div>
            <div>${parseFloat(Math.round(Math.floor(this.state.sellAmount) * this.props.coinPrice['USD'] * 100) / 100).toFixed(2)}</div>
          </div>
          <center>
            <button className="buy-sell-button">
              Sell
            </button>
          </center>
        </form>
        <div className="buy-sell-buy-power">
          <div className="buy-sell-buy-power-text">
            ${this.props.userBuyPower} Shares
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