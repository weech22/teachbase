import * as R from 'ramda';

const getLogin = R.prop('login');

export const getToken = R.pipe(getLogin, R.prop('token'));

export const getIsInitializing = R.pipe(getLogin, R.prop('isInitializing'));
