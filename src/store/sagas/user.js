import { call, put, select } from 'redux-saga/effects';

import { navigate } from '~/services/navigation';
import api from '~/services/api';
import UserActions from '~/store/ducks/user';

export default function* updateUser({ id, fieldsToUpdate }) {
  try {
    const userAuthToken = yield select(state => state.signIn.token.token);

    const requestConfig = {
      headers: { Authorization: `bearer ${userAuthToken}` },
    };

    const response = yield call(api.put, `/users/${id}`, fieldsToUpdate, requestConfig);

    yield put(UserActions.updateUserSuccess(response.data));
    navigate('App');
  } catch (err) {
    yield put(UserActions.updateUserFailure());
  }
}
