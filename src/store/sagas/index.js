import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth';

import auth from './auth';

export default function* rootSaga() {
  return yield all([takeLatest(AuthTypes.AUTH_REQUEST, auth)]);
}
