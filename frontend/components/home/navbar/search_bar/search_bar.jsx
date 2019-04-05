import React from 'react';
import { Link } from 'react-router-dom';



class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      searchVal: '',
      coinsObj: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.setCoins = this.setCoins.bind(this);
  }

  componentDidMount(){
    this.props.getCoinsList().then(() => this.setCoins());
  }

  handleInput(e){
    this.setState({searchVal: e.target.value});
  }

  matches(){
    const matches = [];
    if (this.state.searchVal.length < 1){
      return null;
    }

    if (this.state.coinsObj){
      this.state.coinsObj.forEach( coinObj => {
        let coin = coinObj.coin.slice(0, this.state.searchVal.length);
        let sym = coinObj.sym.slice(0, this.state.searchVal.length);
        if ((sym === this.state.searchVal.toUpperCase()) || 
        (coin.toLowerCase() === this.state.searchVal.toLowerCase())){
          matches.push(coinObj);
        }
      });
    }
    if(matches.length === 0) {
      matches.push('We are unable to find any results for your search.');
    }

    return matches.slice(0,5);
  }

  setCoins(){
    let coinsObj = [];
    const { coins } = this.props;

    Object.values(coins).forEach((coin) => {
      coinsObj.push({
        sym: coin.Symbol,
        coin: coin.CoinName
      });
    });
    
    // this.props.coins.forEach( (coin) => {
    // });
    this.setState({coinsObj});
  }

  

  render(){
    const results = this.matches() ? this.matches().map((result, idx) => {
      return (
      <Link 
      key={idx} 
      to={`/crypto/${result.sym}`}
      onClick={ () => this.setState({searchVal: ''})}
      className="search-result-row-container"
      >
        <div className="search-result-row-sym search-result-row">
          {result.sym}
        </div>

        <div className="search-result-row">
          {result.coin}
        </div>
      </Link>
      )
    }) : null;
    return (
      <div className="search-bar-container">
        <i className="fas fa-search search-icon"></i>
        <input 
          className="search-bar-style" 
          type="text" 
          placeholder="Search.."
          value={this.state.searchVal}
          onChange={this.handleInput}
        />
        <div className="search-result-row-main-container">
          {results}
        </div>
      </div>
    );
  }
}



export default SearchBar;