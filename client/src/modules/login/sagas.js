import { takeLatest, call, all, put, delay } from 'redux-saga/effects';
import { stopSubmit, startSubmit } from 'redux-form';
import {
  sendLogin,
  setToken,
  startInitialize,
  stopInitialize,
  logout,
} from './duck';
import * as LoginRepository from './LoginRepository';
import * as LoginManager from './LoginManager';
import { FORMS, ROUTES } from '../../constants';
import { NavigationService } from '../../services';

function* loginSaga({ payload: { login, password, keepLoggedIn } }) {
  try {
    yield put(startSubmit(FORMS.LOGIN));
    const body = { login, password };
    const token = yield call(LoginManager.login, { body });
    if (keepLoggedIn) {
      yield call(LoginRepository.setToken, token);
    }
    yield put(setToken(token));
    yield put(stopSubmit(FORMS.LOGIN));
    yield call(NavigationService.navigate, ROUTES.HOME);
  } catch (ex) {
    yield put(
      stopSubmit(FORMS.LOGIN, {
        description: ex,
      }),
    );
  }
}

function* initializeSaga() {
  const token = yield call(LoginRepository.getToken);
  yield put(setToken(token || null));
  yield delay(700);
  yield put(stopInitialize());
}

function* logoutSaga() {
  yield call(LoginRepository.clearToken);
}

function* authSaga() {
  yield all([
    takeLatest(sendLogin, loginSaga),
    takeLatest(startInitialize, initializeSaga),
    takeLatest(logout, logoutSaga),
  ]);
}

export default authSaga;
