import React from 'react';

class BuySellPanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      buyPage: true,
      sellPage: false,
      buyAmount: 0,
      sellAmount: 0
    };
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

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return (
    <div className="trade-history-main-container">
      <div className="buy-sell-title">
        <div 
          className={ this.state.buyPage ? "buy-title-active" : "buy-title" }
          onClick={() => this.setState({buyPage: true, sellPage: false})}  
        >
          Buy {this.props.sym}
        </div>
        <div 
          className={ this.state.sellPage ? "sell-title-active" : "sell-title" }
          onClick={() => this.setState({buyPage: false, sellPage: true})}    
        >
          Sell {this.props.sym}
        </div>
      </div>
      <form onSubmit={this.handleSubmit}>
        <div className="buy-sell-form-component">
          <div>Shares</div>
          <div>
            <input 
              type="number"
              placeholder="0"
              value={this.state.amount}
              onChange={this.update("buy")}
              className="buy-form-input"
            />
          </div>
        </div>
        <div className="buy-sell-form-component buy-sell-market-price">
          <div>Market Price</div>
          <div className="market-price-value">${}</div>
        </div>
        <div className="buy-sell-form-component buy-sell-estimated-cost">
          <div>Estimated Cost</div>
          <div>${}</div>
        </div>
        <center>
          <div className="buy-sell-button">
            buy
          </div>
        </center>
      </form>
      <div className="buy-sell-buy-power">
        ${} Buy Power Available
      </div>
      <div>

      </div>
    </div>
    )
  }
}

export default BuySellPanel;