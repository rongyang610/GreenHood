import React from 'react';

class PortfolioChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataHist: [],
      dataPoints: 30,
      looped: false,
      dataReturned: false
    };
  }

  componentDidUpdate(prevProps){
    if (prevProps.trades.length !== this.props.trades.length){
      const that = this;
      if (this.state.dataHist.length === 0) {
      const arr = [];
        for (let j = 0; j < that.props.syms.length; j++) {
          const obj = {};
          obj[that.props.syms[j]] = [];
          arr.push(obj);
        }
        this.setState({
          dataHist: arr,
          
        });
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
              if (i === (that.props.syms.length - 1) && that.state.dataReturned === false){
                that.setState({dataReturned: true});
              }
            });
          }
          this.setState({looped: true});
      }
    }
  }

  calculatePortfolioDay(){
    //calculates the current Dates
  }

  storeDataPoints(){

  }

  render(){
    debugger
    return (
      <div>

      </div>
    )
  }
}

export default PortfolioChart;