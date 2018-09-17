const module = 'servants';

export const DUMMIE_TYPE = `${module}/DUMMIE_TYPE`;

export function dummie() {
  return {
    type: DUMMIE_TYPE,
    payload: 'dummie',
  };
}
