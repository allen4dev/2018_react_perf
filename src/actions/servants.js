import { schema, normalize } from 'normalizr';

import api from 'api';

const module = 'servants';

export const ADD_SERVANT = `${module}/ADD_SERVANT`;
export const ADD_SERVANTS = `${module}/ADD_SERVANTS`;

// Model
const servantSchema = new schema.Entity('servants');
const servantListSchema = [servantSchema];

function normalizedServants(data) {
  return normalize(data, servantListSchema);
}

function normalizedServant(data) {
  return normalize(data, servantSchema);
}

// Action creators
export function addServants({ entities, result }) {
  return {
    type: ADD_SERVANTS,
    payload: { entities, result },
  };
}

export function addServant({ entities, result }) {
  return {
    type: ADD_SERVANT,
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

export function fetchServant(id) {
  return async dispatch => {
    const { data } = await api.servants.single(id);

    const normalized = normalizedServant(data);

    dispatch(addServant(normalized));
  };
}
