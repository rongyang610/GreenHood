import * as NewsAPIUtil from '../util/news_api_util';

export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';

const receiveAllNews = news => {
  return {
    type: RECEIVE_ALL_NEWS,
    news
  };
};

const receiveNews = news => {
  return {
    type: RECEIVE_NEWS,
    news
  };
};

export const getAllNews = syms => dispatch => {
  return(
    NewsAPIUtil.fetchAllNews(syms)
    .then( (news) => dispatch(receiveAllNews(news)))
  );
};

export const getNews = sym => dispatch => {
  return (
    NewsAPIUtil.fetchNews(sym)
    .then ( (news) => dispatch(receiveNews(news)))
  );
};