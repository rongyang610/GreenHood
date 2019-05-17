import React from 'react';

class Watchlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          watchlistItem: false,
        };
        this.watchlistAction = this.watchlistAction.bind(this);
    } 

    componentDidMount(){
      this.props.getWatchlistItem(this.props.userId, this.props.id);
    }

    componentDidUpdate(prevProps){
      const {watchlist, id, userId} = this.props;
      if(prevProps.watchlist !== watchlist){
        if(watchlist[id]){
          this.setState({watchlistItem: true});
        } else {
          this.setState({watchlistItem: false});
        }
      } else if(id !== prevProps.sym){
        this.props.getWatchlistItem(userId, id);
      }
    }

    watchlistAction(){
      const {watchlistItem} = this.state;
      const { removeWatchlistItem, addWatchlistItem, userId, id} = this.props;
      if(watchlistItem){
        removeWatchlistItem(userId, id).then(() => this.setState({watchlistItem: false}));
      } else{
        addWatchlistItem(userId, {user_id: userId, crypto_sym:id}).then(() => this.setState({watchlistItem: true}));
      }
    }

    render(){
      let watchlistContent = this.state.watchlistItem ? "Remove from Watchlist" : "Add to Watchlist";
      return(
          <center>
            <div 
              className="watchlist-button"
              onClick={() => this.watchlistAction()}
            >
              {watchlistContent}
            </div>
          </center>
      )
    }
}

export default Watchlist;