import React from 'react';
import { Link } from 'react-router-dom';



class SearchBar extends React.Component {
  
 

  constructor(props) {
    super(props);
    // this.state = this.props.initialState;
  }

  // componentDidMount(){
  //   this.props.clear();
  // }

  // update(field){
  //   return e => {
  //     this.setState({[field]: e.target.value});
  //   };
  // }
  
  // will have this for unseen searches
  // renderErrors(){
  //   return this.props.errors.map((error, idx) => {
  //     return <div key={idx}><i class="fas fa-exclamation-circle"></i>{error}</div>
  //   });
  // }

  render(){
    // const searchBarStyle = {
    //   minWidth: '300px',
    //   height: '200px',
    //   backgroundColor: 'pink'
    // };
    return (
      <div style={{minWidth: '158px', width: '100%'}}>
        <input className="searchBarStyle" type="text" placeholder="Search.." style={{maxWidth: '478px', width: '100%'}}/>
      </div>
    );
  }
}



export default SearchBar;