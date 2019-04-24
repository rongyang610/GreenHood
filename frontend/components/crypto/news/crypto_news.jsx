import React from 'react';

class News extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      news: [],
      offSet: (new Date().getTimezoneOffset())/60,
      currentDate: Math.round((new Date().getTime())/1000) * 1000
    };
  }

  componentDidUpdate(prevProps){
    let news;
    if (prevProps.news !== this.props.news){
      if(this.props.news[2].length > 10){
        news = this.props.news[2].slice(0,10);
      } else {
        news = this.props.news[2];
      }
      this.setState({news});
    }
  }

  render(){
    const {news, currentDate, offSet} = this.state;
    let result = news.length > 0 ? news.reverse().map((obj, idx) => {
      let source = obj.source.name;
      let title = obj.title;
      let image = obj.urlToImage;
      let sentence = obj.description.split('.');

      //need to convert to epoch
      const dateArr = (obj.publishedAt.slice(0,19)).split('-');
      dateArr[1] = parseInt(dateArr[1], 10) - 1;
      const dayTime = dateArr[2].split('T');
      const time = dayTime[1].split(':');
      time[0] = parseInt(time[0],10);
      if(time[0] < offSet){
        dayTime[0] = parseInt(dayTime[0],10) - 1;
        time[0] += offSet;
      }
      time[0] -= offSet;
      const epochDate = Math.floor((new Date(dateArr[0], dateArr[1], dayTime[0], time[0], time[1], time[2]).getTime()));
      let timeLapse = Math.ceil((currentDate - epochDate)/60000);
      
      if(timeLapse > 43200) {
        timeLapse = Math.floor(timeLapse/(60*24*30));
        timeLapse += "month";
      } else if(timeLapse > 1440) {
        timeLapse = Math.floor(timeLapse/(60*24));
        timeLapse += "d";
      } else if (timeLapse > 60){
        timeLapse = Math.floor(timeLapse/60);
        timeLapse += "hr";
      } else{
        timeLapse += 'm';

      }
      return(
        <a 
          key={idx}
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
                {timeLapse}
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