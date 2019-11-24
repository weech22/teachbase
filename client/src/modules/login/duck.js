import { createAction, handleActions } from 'redux-actions';
import * as R from 'ramda';
import { combineReducers } from 'redux';
import { MODULES } from '../../constants';

export const startInitialize = createAction(`${MODULES.LOGIN}/INITIALIZE`);
export const stopInitialize = createAction(`${MODULES.LOGIN}/STOP_INITIALIZE`);
export const sendLogin = createAction(`${MODULES.LOGIN}/SEND_LOGIN`);
export const setToken = createAction(`${MODULES.LOGIN}/SET_TOKEN`);
export const logout = createAction(`${MODULES.LOGIN}/LOGOUT`);

const token = handleActions(
  {
    [setToken]: (_, { payload }) => payload,
    [logout]: R.always(null),
  },
  null,
);

const isInitializing = handleActions(
  {
    [startInitialize]: R.T,
    [stopInitialize]: R.F,
  },
  true,
);

const loginReducer = combineReducers({
  token,
  isInitializing,
});

export default loginReducer;
