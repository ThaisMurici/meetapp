import { call, put } from 'redux-saga/effects';

import { navigate } from '~/services/navigation';
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

    yield put(SignUpActions.signUpSuccess(email, password));

    navigate('Dashboard');
  } catch (err) {
    yield put(SignUpActions.signUpFailure());
  }
}
