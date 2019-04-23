import React from 'react';

class News extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      news: [],
      symbols: Array.from(this.props.symbols),
      newsDataReceived: false
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps.symbols !== this.props.symbols){
      this.props.getAllNews(this.props.symbols)
      .then(() => this.mapNewsArr());
    }
  }

  mapNewsArr(){
    let news = Array.from(this.props.news[3]);
    if (news.length > 20){
      news = news.slice(0,20);
    } else {
      news = news.slice(0,news.length);
    }
    
    this.setState({
      news, 
      newsDataReceived: true,
      currentDate: Math.round((new Date().getTime())/1000) * 1000
    });
  }
  
  render(){
    const { news, newsDataReceived, currentDate } = this.state;
    let result = newsDataReceived ? news.map((obj, idx) => {
      let sentence = obj.body.split('.');
      let source = obj.source_info.name;
      let title = obj.title;
      let image = obj.imageurl;
      //get time to minutes
      let time = Math.ceil((currentDate - (obj.published_on*1000))/60000);
      if (time > 60){
        time = Math.floor(time/60);
        time += "hr";
      } else {
        time += "m";
      }
      return(
        <a 
          key={obj.id}
          href={obj.url}
          target="_blank"
          className="news-main-container"
        >
          <div className="news-image">
            <img src={image} alt={source}/>
          </div>
          <div className="news-content-container">
            <div className="news-source-time">
              <div className="news-source">
                {source}
              </div>
              <div className="news-time">
                {time}
              </div>
            </div>
            <div className="news-title">
              {title}
            </div>
            <div className="news-description">
              {`${sentence[0]}.`}
            </div>
          </div>
        </a>
      )
    }) : null;
    return(
    <div>
      {result}
    </div>
    )
  }
}

export default News;