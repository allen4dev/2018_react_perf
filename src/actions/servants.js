import { schema, normalize } from 'normalizr';

import api from 'api';

const module = 'servants';

export const ADD_SERVANTS = `${module}/ADD_SERVANTS`;

// Model
const servantSchema = new schema.Entity('servants');
const servantListSchema = [servantSchema];

function normalizedServants(data) {
  return normalize(data, servantListSchema);
}

// Action creators
export function addServants({ entities, result }) {
  return {
    type: ADD_SERVANTS,
    payload: { entities, result },
  };
}

// Async actions
export function fetchAll() {
  return async dispatch => {
    const { data } = await api.servants.all();

    const normalized = normalizedServants(data);

    dispatch(addServants(normalized));
  };
}
