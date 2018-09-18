import api from 'api';

const module = 'servants';

export const ADD_SERVANTS = `${module}/ADD_SERVANTS`;

// Action creators
export function addServants(servants) {
  return {
    type: ADD_SERVANTS,
    payload: { servants },
  };
}

// Async actions
export function fetchAll() {
  return async dispatch => {
    const response = await api.servants.all();
    dispatch(addServants(response.data));
  };
}
