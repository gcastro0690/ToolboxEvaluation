import pingApi from '../api/ping';
import types from './types';

const setStringAction = string => ({
  type: types.SET_STRING,
  payload: string,
});

const setStringFailAction = () => ({ type: types.SET_STRING_FAIL });

const actions = {
  setString: setStringAction,
  setStringFail: setStringFailAction,
};

const setString = string => async (dispatch, getState) => {
  try {
    const stringReturn = await pingApi.ping(string);
    dispatch(actions.setString(stringReturn));
  } catch (error) {
    dispatch(actions.setStringFail());
  }
};

export default {
  setString,
};
