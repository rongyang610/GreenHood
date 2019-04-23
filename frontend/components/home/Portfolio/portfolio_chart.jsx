import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

class PortfolioChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      coinsDataHist: [],
      tradeHist: [],
      dataPoints: -0,
      looped: false,
      dataCalled: false,
      dataReturned: false,
      calculatedDataPoints: false,
      offSet: (new Date().getTimezoneOffset())/60
    };
  }

  componentDidUpdate(prevProps){
    if (prevProps.ownedCoins.length !== this.props.ownedCoins.length){
      //that context this so in the for loop can get the state
      const that = this; 
      if (this.state.coinsDataHist.length === 0) {
        this.changeTradesDatesToEpochAndSetDataHist();
      }
    } else if (this.state.coinsDataHist.length !== 0){
      if(this.state.coinsDataHist[this.props.syms.length - 1][this.props.syms[this.props.syms.length - 1]].length === 0 && 
      this.state.looped === false){
        const that = this;
        for (let i = 0; i < that.props.syms.length; i++) {
          that.props.getHistData(that.props.syms[i], 'home')
          .then((data) => {
            const stateArr = that.state.coinsDataHist[i];
            const sym = that.props.syms[i];
            stateArr[sym] = data.chart.Data;
            that.setState({dataCalled: true});
          });
        }
        this.setState({looped: true});
      } else if(this.state.dataReturned === false){
        this.waitForAPICall();
      } else if(this.state.dataReturned && !this.state.calculatedDataPoints){
        this.setState({
          dataPoints: this.calculatePortfolioGraph(),
          calculatedDataPoints: true
          });
      }
    }
  }

  changeTradesDatesToEpochAndSetDataHist(){
    const that = this;
    const coinsDataHistArr = [];
    const tradeHistArr = [];
    for (let j = 0; j < that.props.syms.length; j++) {
      const obj = {};
      //create an object with key of symbol and value points to datapoints of history from elseif
      obj[that.props.syms[j]] = []; 
      //push push this to the coinsDataHistArr above so we can setState to cause rerender
      coinsDataHistArr.push(obj); 
    }
    for (let i = 0; i < this.props.trades.length; i++) {
      const tradeObj = Object.assign({}, this.props.trades[i]);
      const date = this.props.trades[i]["created_at"];
      const dateArr = (date.slice(0,19)).split('-');
      dateArr[1] = parseInt(dateArr[1], 10) - 1;
      const dayTime = dateArr[2].split('T');
      const time = dayTime[1].split(':');
      time[0] = parseInt(time[0],10);
      if(time[0] < that.state.offSet){
        dayTime[0] = parseInt(dayTime[0],10) - 1;
        time[0] += that.state.offSet;
      }
      time[0] -= that.state.offSet;
      const epochDate = Math.floor((new Date(dateArr[0], dateArr[1], dayTime[0], time[0], time[1], time[2]).getTime()));
      tradeObj["created_at"] = epochDate;
      tradeHistArr.push(tradeObj);
    }
    //create rerender so we can start getting data points for each coin (else if statement)
    this.setState({
      coinsDataHist: coinsDataHistArr,
      tradeHist: tradeHistArr
    }); 
  }

  calculatePortfolioGraph(){
    const {syms, coinsPrice} = this.props;
    const {coinsDataHist, tradeHist} = this.state;
    const currentPrices = {};
    let currentDate = Math.round((new Date().getTime())/1000) * 1000;
    for (let i = 0; i < syms.length; i++) {
      currentPrices[syms[i]] = coinsPrice[syms[i]]['USD'];
    }
    const dataPoints=[]; 
    const changingTradeHist = Array.from(tradeHist);
    const ownedCoins = Array.from(this.props.ownedCoins);
    for (let i = 30; i !== 0; i--) {
      let prices = 0;
      const obj = {};
      if (i === 30){
        for (let idy = 0; idy < syms.length; idy++) {
          prices += (ownedCoins[idy][syms[idy]] * currentPrices[[syms[idy]]]);
        }
      } else{
        let l = changingTradeHist.length;
        for ( let idx = l - 1; idx !== -1; idx--) {
          if(changingTradeHist[idx]["created_at"] > currentDate){
            if (changingTradeHist[idx]['buy_price'] > 0) {
              ownedCoins.forEach((ownedCoinsObj) => {
                if (ownedCoinsObj[changingTradeHist[idx]['crypto_sym']] !== undefined){
                  ownedCoinsObj[changingTradeHist[idx]['crypto_sym']] -= changingTradeHist[idx]['crypto_amount'];
                }
              });
            } else if(changingTradeHist[idx]['sell_price'] > 0) {
              ownedCoins.forEach((ownedCoinsObj) => {
                if (ownedCoinsObj[changingTradeHist[idx]['crypto_sym']] !== undefined){
                  ownedCoinsObj[changingTradeHist[idx]['crypto_sym']] += (changingTradeHist[idx]['crypto_amount']);
                }
              });
            }
            changingTradeHist.pop();
          }
        }
        for (let idy = 0; idy < syms.length; idy++) {
          prices += (ownedCoins[idy][syms[idy]] * coinsDataHist[idy][syms[idy]][i-1].close);
        }
      }
      const dateString = new Date(currentDate).toLocaleString('en-US', {month: 'short', day: 'numeric', year:'numeric'});
      obj['name'] = dateString;
      obj['USD'] = parseFloat(Math.round(prices * 100)/100).toFixed(2);
      dataPoints.unshift(obj);
      currentDate -= (86400*1000);
    }
    return dataPoints;
  }

  customTooltip (content){
    let date, price;
    const {dataPoints} = this.state
    if (content.payload && content.payload.length > 0){
      price = parseFloat(content.payload[0].payload["USD"]).toLocaleString().split('.');
      if (!price[1]){
        price.push('00');
      } else if (price[1].length < 2){
        price[1] += '0';
      }
      price = price.join('.');
      document.getElementById("portfolio-value").innerHTML = "$"+price;
      
      date = content.payload[0].payload['name'];
      return(
        <div className="tooltipDate">{date}</div>
      )
    } else if (dataPoints){
      price = parseFloat(dataPoints[dataPoints.length - 1].USD).toLocaleString().split('.');
      if (!price[1]){
        price.push('00');
      } else if (price[1].length < 2){
        price[1] += '0';
      }
      price = price.join('.');
      document.getElementById("portfolio-value").innerHTML = "$"+price;
    }
  };

  userCreatedEpoch(){
    const {currentUser} = this.props;
    const date = currentUser["created_at"];
    const dateArr = date.slice(0,19).split('-');
    dateArr[1] = parseInt(dateArr[1], 10) - 1;
    const dayTime = dateArr[2].split('T');
    const time = dayTime[1].split(':');
    time[0] = parseInt(time[0],10);
    if(time[0] < this.state.offSet){
      dayTime[0] = parseInt(dayTime[0],10) - 1;
      time[0] += this.state.offSet;
    }
    time[0] -= this.state.offSet;
    return Math.floor((new Date(dateArr[0], dateArr[1], dayTime[0], time[0], time[1], time[2]).getTime()));
  }

  waitForAPICall(){
    const {syms} = this.props;
    if(this.state.coinsDataHist.length === 0){
      return;
    }
    let that = this;
    for (let i = 0; i < this.state.coinsDataHist.length; i++) {
      if (that.state.coinsDataHist[i][syms[i]].length === 0){
        return;
      }
    }
    this.setState({dataReturned: true});
  }

  render(){
    let dataPoints = this.state.dataPoints ? this.state.dataPoints : null;
    let min;
    if(dataPoints){
      for (let i = 0; i < dataPoints.length; i++) {
        if (i === 0){
          min = parseFloat(dataPoints[i]['USD']);
        } else{
          const maybeMin = parseFloat(dataPoints[i]['USD']);
          if (min > maybeMin){
            min = maybeMin;
          }
        }
      }
    }
    return (
      <div className="crypto-chart-container">
          <h2 id="portfolio-value">Portfolio Value</h2>
          <LineChart width={676} 
            height={196} 
            data={dataPoints} 
            className="line-chart-main"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >

            <XAxis 
              dataKey="name" 
              hide={true}
            />
            <YAxis 
              dataKey="USD" 
              domain={[min, 'dataMax']} 
              hide={true}
            />
            <Tooltip 
              isAnimationActive={false}
              content={this.customTooltip.bind(this)}
              contentStyle = {
                {border: 'none', 
                backgroundColor: 'transparent', 
                fontSize: '12px'}
              }
              offset={-45}
              position={{y: -23}}
            />
            <Line type="monotone" dataKey="USD" stroke="white" strokeWidth="2.5" dot={false} />
          </LineChart>
          <div className="history-type-container">
            {/* <span 
              onClick={() => this.changeDateType("1d")} 
                className={this.state.oneDShow ? "history-type-active" : "history-type"
              }>
              1D
            </span>
            <span 
              onClick={() => this.changeDateType("1w")} 
                className={this.state.oneWShow ? "history-type-active" : "history-type"
              }>
              1W
            </span>
            <span 
              onClick={() => this.changeDateType("1m")} 
                className={this.state.oneMShow ? "history-type-active" : "history-type"
              }>
              1M
            </span>
            <span 
              onClick={() => this.changeDateType("3m")} 
                className={this.state.threeMShow ? "history-type-active" : "history-type"
              }>
              3M
            </span>
            <span 
              onClick={() => this.changeDateType("6m")} 
                className={this.state.halfMShow ? "history-type-active" : "history-type"
              }>
              6M
            </span>
            <span 
              onClick={() => this.changeDateType("1y")} 
                className={this.state.oneYShow ? "history-type-active" : "history-type"
              }>
              1Y
            </span> */}
          </div>
        </div>
    )
  }
}

export default PortfolioChart;