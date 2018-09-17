import { combineReducers } from 'redux';

function dummieReducer() {
  return [];
}

const rootReducer = combineReducers({
  dummie: dummieReducer,
});

export default rootReducer;
