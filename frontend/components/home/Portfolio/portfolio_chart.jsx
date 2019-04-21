import React from 'react';

class PortfolioChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataHist: [],
      tradeHist: [],
      dataPoints: 30,
      looped: false,
      dataCalled: false,
      dataReturned: false,
    };
  }

  componentDidUpdate(prevProps){
    if (prevProps.ownedCoins.length !== this.props.ownedCoins.length){
      //that context this so in the for loop can get the state
      const that = this; 
      if (this.state.dataHist.length === 0) {
        this.changeTradesDatesToEpochAndSetDataHist();
      }
    } else if (this.state.dataHist.length !== 0){
      if(this.state.dataHist[this.props.syms.length - 1][this.props.syms[this.props.syms.length - 1]].length === 0 && 
      this.state.looped === false){
        const that = this;
        for (let i = 0; i < that.props.syms.length; i++) {
          that.props.getHistData(that.props.syms[i], 'home')
          .then((data) => {
            const stateArr = that.state.dataHist[i];
            const sym = that.props.syms[i];
            stateArr[sym] = data.chart.Data;
            that.setState({dataCalled: true});
          });
        }
        this.setState({looped: true});
      } else if(this.state.dataReturned === false){
        this.waitForAPICall();
      }
    }
  }

  changeTradesDatesToEpochAndSetDataHist(){
    const that = this;
    const dataHistArr = [];
    const tradeHistArr = [];
    for (let j = 0; j < that.props.syms.length; j++) {
      const obj = {};
      //create an object with key of symbol and value points to datapoints of history from elseif
      obj[that.props.syms[j]] = []; 
      //push push this to the dataHistArr above so we can setState to cause rerender
      dataHistArr.push(obj); 
    }
    for (let i = 0; i < this.props.trades.length; i++) {
      const tradeObj = Object.assign({}, this.props.trades[i]);
      const date = this.props.trades[i]["created_at"];
      const dateArr = date.slice(0,10).split('-');
      dateArr[1] = parseInt(dateArr[1], 10) - 1;
      //divide by 1000 because this will match api call
      const epochDate = (new Date(dateArr[0], dateArr[1], dateArr[2]).getTime())/1000;
      tradeObj["created_at"] = epochDate;
      tradeHistArr.push(tradeObj);
    }
    //create rerender so we can start getting data points for each coin (else if statement)
    this.setState({
      dataHist: dataHistArr,
      tradeHist: tradeHistArr
    }); 
  }

  calculatePortfolioDay(){
    //calculates the current Dates
  }

  waitForAPICall(){
    const {syms} = this.props;
    if(this.state.dataHist.length === 0){
      return;
    }
    let that = this;
    for (let i = 0; i < this.state.dataHist.length; i++) {
      if (that.state.dataHist[i][syms[i]].length === 0){
        return;
      }
    }
    this.setState({dataReturned: true});
  }

  storeDataPoints(){

  }

  render(){
    debugger
    let results= this.state.dataReturned ? this.state.dataHist : null;
    return (
      <div>
      </div>
    )
  }
}

export default PortfolioChart;