import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


class CryptoChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          dateType: this.props.dateType,
          mounted: false,
          oneDShow: true,
          oneWShow: false,
          oneMShow: false,
          threeMShow: false,
          halfMShow: false,
          oneYShow: false
        };
        this.changeDateType = this.changeDateType.bind(this);
    }

    componentDidMount(){
      this.props.getChartData(this.props.sym, this.props.dateType)
      .then(() => this.props.getCoinInfo(this.props.sym))
      .then(() => this.setState({mounted: true}));
    }

    componentDidUpdate(prevProps, prevState){
      if(prevProps.sym !== this.props.sym){
        this.props.getChartData(this.props.sym, this.props.dateType);
        this.setState(() => {
          return {
            dateType: '1d',
            mounted: false,
            oneDShow: true,
            oneWShow: false,
            oneMShow: false,
            threeMShow: false,
            halfMShow: false,
            oneYShow: false
          };
        });
      } 
      else if (prevState.dateType !== this.state.dateType){
        this.props.getChartData(this.props.sym, this.state.dateType);
      }
    }

    changeDateType(dateType){
      if (dateType === '1d'){
        this.setState({
          dateType: dateType,
          oneDShow: true,
          oneWShow: false,
          oneMShow: false,
          threeMShow: false,
          halfMShow: false,
          oneYShow: false
        });
      } else if (dateType === '1w'){
        this.setState({
          dateType: dateType,
          oneDShow: false,
          oneWShow: true,
          oneMShow: false,
          threeMShow: false,
          halfMShow: false,
          oneYShow: false
        });
      } else if (dateType === '1m'){
        this.setState({
          dateType: dateType,
          oneDShow: false,
          oneWShow: false,
          oneMShow: true,
          threeMShow: false,
          halfMShow: false,
          oneYShow: false
        });
      } else if (dateType === '3m'){
        this.setState({
          dateType: dateType,
          oneDShow: false,
          oneWShow: false,
          oneMShow: false,
          threeMShow: true,
          halfMShow: false,
          oneYShow: false
        });
      } else if (dateType === '6m'){
        this.setState({
          dateType: dateType,
          oneDShow: false,
          oneWShow: false,
          oneMShow: false,
          threeMShow: false,
          halfMShow: true,
          oneYShow: false
        });
      } else {
        this.setState({
          dateType: dateType,
          oneDShow: false,
          oneWShow: false,
          oneMShow: false,
          threeMShow: false,
          halfMShow: false,
          oneYShow: true
        });
      }
    }

    customTooltip (content){
      let date, price, closePrice, openPrice, diffPrice, diffRatio, dayToYr;
      let posNegSign = '+';
      const {oneDShow, oneWShow, oneMShow, threeMShow, halfMShow} = this.state;
      const {dataHist} = this.props;
      const {mounted} = this.state;
      if (content.payload && content.payload.length > 0){
        openPrice = dataHist[0].open;
        closePrice = content.payload[0].payload['USD'];
        diffPrice = closePrice - openPrice;
        diffRatio = (diffPrice/openPrice)* 100;

        if (diffPrice < 0){
          posNegSign = '-';
          diffPrice *= -1;
        }

        diffPrice = parseFloat(diffPrice.toFixed(2)).toLocaleString().split('.');
        if (!diffPrice[1]){
          diffPrice.push('00');
        } else if (diffPrice[1].length < 2){
          diffPrice[1] += '0';
        }
        diffPrice = diffPrice.join('.');

        diffRatio = parseFloat(diffRatio.toFixed(2)).toLocaleString().split('.');
        if (!diffRatio[1]){
          diffRatio.push('00');
        } else if (diffRatio[1].length < 2){
          diffRatio[1] += '0';
        }
        diffRatio = diffRatio.join('.');

        price = parseFloat(closePrice).toLocaleString().split('.');
        if (!price[1]){
          price.push('00');
        } else if (price[1].length < 2){
          price[1] += '0';
        }
        price = price.join('.');
        document.getElementById("coin-value").innerHTML = "$"+price;
        document.getElementById('coin-over-time').innerHTML = '';
        document.getElementById("coin-percentage").innerHTML = `${posNegSign}$${diffPrice} [${diffRatio}%]`;

        date = content.payload[0].payload['name'];
        return(
          <div className="tooltipDate">{date}</div>
        )
      } else if (dataHist.length > 0 && mounted){
        if(oneDShow){
          dayToYr = "TODAY";
        } else if(oneWShow){
          dayToYr = "PAST WEEK";
        } else if (oneMShow){
          dayToYr = "PAST MONTH";
        } else if (threeMShow){
          dayToYr = "PAST 3 MONTHS";
        } else if (halfMShow){
          dayToYr = "PAST 6 MONTHS";
        } else{
          dayToYr = "PAST YEAR";
        }


        closePrice = dataHist[dataHist.length - 1].open;
        openPrice = dataHist[0].close;
        diffPrice = closePrice - openPrice;
        diffRatio = (diffPrice/openPrice)* 100;

        if (diffPrice < 0){
          posNegSign = '-'
          diffPrice *= -1;
        }
        diffPrice = parseFloat(diffPrice.toFixed(2)).toLocaleString().split('.');
        if (!diffPrice[1]){
          diffPrice.push('00');
        } else if (diffPrice[1].length < 2){
          diffPrice[1] += '0';
        }
        diffPrice = diffPrice.join('.');

        diffRatio = parseFloat(diffRatio.toFixed(2)).toLocaleString().split('.');
        if (!diffRatio[1]){
          diffRatio.push('00');
        } else if (diffRatio[1].length < 2){
          diffRatio[1] += '0';
        }
        diffRatio = diffRatio.join('.');

        price = parseFloat(closePrice).toLocaleString().split('.');
        if (!price[1]){
          price.push('00');
        } else if (price[1].length < 2){
          price[1] += '0';
        }
        price = price.join('.');        

        document.getElementById('coin-over-time').innerHTML = dayToYr;
        document.getElementById("coin-percentage").innerHTML = `${posNegSign}$${diffPrice} [${diffRatio}%]`;
        document.getElementById("coin-value").innerHTML = "$"+price;
      }
    };

    epochToReadable(data){
      let epochToHuman = new Date(data.time*1000);
      if (this.state.dateType === "1d"){
        if(epochToHuman.getMinutes() % 5 === 0){
          let dataDayTime = epochToHuman.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit', timeZoneName: 'short'});
          let avg = ((data.high + data.low)/2).toFixed(2);          
          return({name: dataDayTime, USD: avg});
        }} else if (this.state.dateType === '1w'){
          if(epochToHuman.getMinutes() % 10 === 0){
            let dataDayTimeDate = epochToHuman.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric', timeZoneName: 'short'});
            let changeToArray = dataDayTimeDate.split(',');
            let reformatDate = changeToArray[1] + ', ' + changeToArray[0];
            let avg = ((data.high + data.low)/2).toFixed(2);
            return({name: reformatDate, USD: avg});
          }} else {
            let dataDayDate = epochToHuman.toLocaleString('en-US', {month: 'short', day: 'numeric', year:'numeric'});
            let avg = ((data.high + data.low)/2).toFixed(2);          
            return({name: dataDayDate, USD: avg});
        }
    }

    render(){
      let dataHistory = [];
      let that = this;  
      this.props.dataHist.forEach( data => {
        if (that.epochToReadable(data) !== undefined){
          dataHistory.push(that.epochToReadable(data));
        }
      });

      let name = this.state.mounted ? this.props.coinInfo.FullName : null
      return(
        <div className="crypto-chart-container">
          <h2 className="crypto-chart-name">{name}</h2>
          <div id="coin-value"></div>
          <div className="third-component-crypto-chart">
            <div id="coin-percentage"></div>
            <div id="coin-over-time"></div>
          </div>
          <LineChart width={676} height={196} data={dataHistory} className="line-chart-main"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="name" 
              hide={true}
            />
            <YAxis 
              dataKey="USD" 
              domain={['dataMin', 'dataMax']} 
              hide={true}
            />
            <Tooltip 
              isAnimationActive={false}
              contentStyle = {
                {border: 'none', 
                backgroundColor: 'transparent', 
                fontSize: '12px'}
              }
              content = {this.customTooltip.bind(this)}
              offset={-45}
              position={{y: -23}}
            />
            <Line type="monotone" dataKey="USD" stroke="#21ce99" strokeWidth="2.5" dot={false} />
          </LineChart>
          <div className="history-type-container">
            <span 
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
            </span>
          </div>
        </div>
      )
    }
}

export default CryptoChart;
