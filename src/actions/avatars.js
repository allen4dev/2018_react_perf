import { schema, normalize } from 'normalizr';

import api from 'api';

const module = 'avatars';

export const ADD_AVATARS = `${module}/ADD_AVATARS`;

// Model
const avatarSchema = new schema.Entity('avatars');
const avatarListSchema = [avatarSchema];

function normalizedAvatars(data) {
  return normalize(data, avatarListSchema);
}

// Action creators
export function addAvatars({ entities, result }) {
  return {
    type: ADD_AVATARS,
    payload: { entities, result },
  };
}

// Async actions
export function fetchAvatars() {
  return async dispatch => {
    const { data } = await api.avatars.all();
    const normalized = normalizedAvatars(data);

    dispatch(addAvatars(normalized));
  };
}
