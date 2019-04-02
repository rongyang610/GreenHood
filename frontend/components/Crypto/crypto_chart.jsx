import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


class Asset extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
      this.props.getChartData("BTC", "day", "1month");
    }

    render(){
      <div className="asset-chart">
        <LineChart
          width={700}
          height={300}
          data={parsedData}
        >
          <Line type="monotone" 
            dataKey="price" 
            stroke="#21ce99"
            strokeWidth={2}
            dot={false} 
          />
          <XAxis dataKey="name" 
            hide={true}
          />
          <YAxis dataKey="price"
            domain={['dataMin - 20', 'dataMax + 20']}  
            hide={true}  
          />
        </LineChart>
    </div>
    }
}

export default Asset;
