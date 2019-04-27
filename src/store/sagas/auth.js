import { call, put } from 'redux-saga/effects';

import { navigate } from '~/services/navigation';
import api from '~/services/api';
import AuthActions from '~/store/ducks/auth';

export default function* auth({ email, password }) {
  try {
    const response = yield call(api.post, '/sessions', { email, password });

    yield put(AuthActions.authSuccess(response.data.token, response.data.user));
    navigate('Dashboard');
  } catch (err) {
    yield put(AuthActions.authFailure());
  }
}
