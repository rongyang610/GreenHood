# Greenhood

[Live Site](https://green-hood.herokuapp.com)

Greenhood, a Robinhood clone, is an online platform that allows an individual to invest in cryptocurrency without paying fees or commissions.

## Table of contents
* [Technologies](#technologies)
* [Coin Chart Creation](#coin-chart-creation)
* [Future Plans](#future-plans)

## Technologies

* Ruby on Rails
* React
* Redux
* JavaScript
* PostgreSQL
* AJAX
* CryptoCompare API
* Google News API
* Recharts API

## Coin Chart Creation

Through CryptoCompare API and Recharts API, users are able to view a chart for a specific coin. This chart allows the user to hover over any part of the chart to show the price and date of a specific datapoint.

```javascript
  componentDidMount(){
    this.props.getChartData(this.props.sym, this.props.dateType)
    .then(() => this.props.getCoinInfo(this.props.sym))
    .then(() => this.setState({mounted: true}));
  }
  
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
    <Line type="monotone" dataKey="USD" stroke={strokeColor} strokeWidth="2.5" dot={false} />
  </LineChart>
```

![Display](/app/assets/images/coin_chart.png)

## Future Plans

* Watchlist - Allows the user to add coins to a watchlist that shows up on their dashboard
* Validation - Make sure the user has enough coins to sell or have enough buy power to buy coins.