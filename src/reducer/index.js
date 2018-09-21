import { combineReducers } from 'redux';

import servants from './servants';
import avatars from './avatars';

const rootReducer = combineReducers({
  servants,
  avatars,
});

export default rootReducer;
