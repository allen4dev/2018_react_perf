import { ADD_AVATARS } from '../actions/avatars';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  entities: {},
  byId: [],
};

function entitiesReducer(state = INITIAL_STATE.entities, action) {
  switch (action.type) {
    case ADD_AVATARS:
      return {
        ...state,
        ...action.payload.entities.avatars,
      };

    default:
      return state;
  }
}

function byIdReducer(state = INITIAL_STATE.byId, action) {
  switch (action.type) {
    case ADD_AVATARS:
      return [...state, ...action.payload.result];

    default:
      return state;
  }
}

const avatarsReducer = combineReducers({
  entities: entitiesReducer,
  byId: byIdReducer,
});

export default avatarsReducer;
