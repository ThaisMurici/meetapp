import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import SignUpActions from '~/store/ducks/signUp';

export default function* signUp({
  name, email, password, passwordConfirmation,
}) {
  try {
    yield call(api.post, '/users', {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    });

    const firstTime = true;

    yield put(SignUpActions.signUpSuccess(email, password, firstTime));
  } catch (err) {
    yield put(SignUpActions.signUpFailure());
  }
}
