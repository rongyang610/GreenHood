import {RECEIVE_ALL_NEWS, RECEIVE_NEWS} from '../../../actions/news_actions';
import { merge } from 'lodash';
import { LOGOUT_CURRENT_USER } from '../../../actions/session_actions';

const tradeHistoryReducer = (state=[], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_NEWS:
      return merge([], Object.values(action.news));
    case RECEIVE_NEWS:
      return merge([], Object.values(action.news));
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default tradeHistoryReducer;