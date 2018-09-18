import { ADD_SERVANTS } from '../actions/servants';

function servantsReducer(state = [], action) {
  switch (action.type) {
    case ADD_SERVANTS:
      return [...state, ...action.payload.servants];

    default:
      return state;
  }
}

export default servantsReducer;
