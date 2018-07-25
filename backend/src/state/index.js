import types from './types';

const defaultState = {
  string: '',
};

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case types.SET_STRING_FAIL:
    case types.SET_STRING:
      return {
        string: payload,
      };
    default:
      return state;
  }
};

export { defaultState };
export default reducer;
