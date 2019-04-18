import React from 'react';

class Watchlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          watchlistItem: true,
        };
    } 

    componentDidMount(){
      this.props.getWatchlistItems(this.props.userId);
    }

    containWatchlistItem(){
    }

    // watchlistItem(){
    //   let { watchlistItem } = this.state;
    //   if (watchlistItems.includes){

    //   }
    // }

    render(){
      let watchlistContent = this.state.watchlistItem ? "Remove from Watchlist" : "Add to Watchlist";
      return(
          <center>
            <div 
              className="watchlist-button"
              // onClick={() => }
            >
              {watchlistContent}
            </div>
          </center>
      )
    }
}

export default Watchlist;