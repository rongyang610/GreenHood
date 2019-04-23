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
      .then(() => this.setState({mounted: true}));
    }

    componentDidUpdate(prevProps, prevState){
      debugger
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
      let date, price;
      const {dataHist} = this.props;
      const {mounted} = this.state;
      if (content.payload && content.payload.length > 0){
        price = parseFloat(content.payload[0].payload["USD"]).toLocaleString().split('.');
        if (!price[1]){
          price.push('00');
        } else if (price[1].length < 2){
          price[1] += '0';
        }
        price = price.join('.');
        document.getElementById("coin-value").innerHTML = "$"+price;
        
        date = content.payload[0].payload['name'];
        return(
          <div className="tooltipDate">{date}</div>
        )
      } else if (dataHist.length > 0 && mounted){
        price = parseFloat(dataHist[dataHist.length - 1]['close']).toLocaleString().split('.');
        if (!price[1]){
          price.push('00');
        } else if (price[1].length < 2){
          price[1] += '0';
        }
        price = price.join('.');
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
      debugger
      let dataHistory = [];
      let that = this;  
      this.props.dataHist.forEach( data => {
        if (that.epochToReadable(data) !== undefined){
          dataHistory.push(that.epochToReadable(data));
        }
      });
      return(
        <div className="crypto-chart-container">
          <div id="coin-value"></div>
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
            <Line type="monotone" dataKey="USD" stroke="#21ce99" dot={false} />
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
