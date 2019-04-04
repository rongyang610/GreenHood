import React from 'react';

import CryptoChart from './crypto_chart/crypto_chart';
import NavBarUser from '../home/navbar/nav_bar_user';


class Crypto extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          sym: `${this.props.id}`,
          dateType: "1d"
        };
    }

    render(){
      return(
        <div className="greenhood-main-sub-container">
          <NavBarUser />
          <CryptoChart 
            dataHist={this.props.dataHist}
            sym={this.props.id} 
            getChartData={this.props.getChartData}
            dateType={'1d'}
          />
        </div>
      )
    }
}

export default Crypto;