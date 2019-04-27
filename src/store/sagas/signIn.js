import { call, put } from 'redux-saga/effects';

import { navigate } from '~/services/navigation';
import api from '~/services/api';
import SignInActions from '~/store/ducks/signIn';
import UserActions from '~/store/ducks/user';

export default function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, '/sessions', { email, password });

    const { user } = response.data;

    yield put(SignInActions.signInSuccess(response.data.token));
    yield put(UserActions.loadUserSuccess(user));

    navigate('Dashboard');
  } catch (err) {
    yield put(SignInActions.signInFailure());
  }
}
