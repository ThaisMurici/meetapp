import { all, takeLatest } from 'redux-saga/effects';

import { SignInTypes } from '~/store/ducks/signIn';
import { SignUpTypes } from '~/store/ducks/signUp';

import signIn from './signIn';
import signUp from './signUp';

export default function* rootSaga() {
  return yield all([
    takeLatest(SignInTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(SignUpTypes.SIGN_UP_SUCCESS, signIn),
    takeLatest(SignUpTypes.SIGN_UP_REQUEST, signUp),
  ]);
}
