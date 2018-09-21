import { ADD_AVATARS } from '../actions/avatars';
import { combineReducers } from 'redux';

const dummieAvatars = [
  {
    id: '1',
    icon: 'https://fate-go.cirnopedia.org/icons/servant/servant_0014.png',
  },
  {
    id: '2',
    icon: 'https://fate-go.cirnopedia.org/icons/servant/servant_0023.png',
  },
  {
    id: '3',
    icon: 'https://fate-go.cirnopedia.org/icons/servant/servant_0033.png',
  },
  {
    id: '4',
    icon: 'https://fate-go.cirnopedia.org/icons/servant/servant_0043.png',
  },
  {
    id: '5',
    icon: 'https://fate-go.cirnopedia.org/icons/servant/servant_0053.png',
  },
  {
    id: '6',
    icon: 'https://fate-go.cirnopedia.org/icons/servant/servant_0063.png',
  },
  {
    id: '7',
    icon: 'https://fate-go.cirnopedia.org/icons/servant/servant_0073.png',
  },
  {
    id: '8',
    icon: 'https://fate-go.cirnopedia.org/icons/servant/servant_0083.png',
  },
  {
    id: '9',
    icon: 'https://fate-go.cirnopedia.org/icons/servant/servant_0093.png',
  },
  {
    id: '10',
    icon: 'https://fate-go.cirnopedia.org/icons/servant/servant_0103.png',
  },
];

const entities = dummieAvatars.reduce((prev, current) => {
  return {
    ...prev,
    [current.id]: { ...current },
  };
}, {});

const INITIAL_STATE = {
  entities: {},
  byId: [],
  // entities,
  // byId: Object.keys(entities),
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
