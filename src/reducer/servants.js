import { ADD_SERVANTS } from '../actions/servants';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  entities: {},
  byId: [],
};

function entitiesReducer(state = INITIAL_STATE.entities, action) {
  switch (action.type) {
    case ADD_SERVANTS:
      return {
        ...state,
        ...action.payload.entities.servants,
      };

    default:
      return state;
  }
}

function byIdReducer(state = INITIAL_STATE.byId, action) {
  switch (action.type) {
    case ADD_SERVANTS:
      return [...state, ...action.payload.result];

    default:
      return state;
  }
}

const servantsReducer = combineReducers({
  entities: entitiesReducer,
  byId: byIdReducer,
});

export default servantsReducer;
