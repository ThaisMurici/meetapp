import { call, put, select } from 'redux-saga/effects';

import api from '~/services/api';
import UserMeetupsActions from '~/store/ducks/userMeetups';

export default function* loadUserMeetups({ id }) {
  try {
    const userAuthToken = yield select(state => state.signIn.token.token);

    const requestConfig = {
      headers: { Authorization: `bearer ${userAuthToken}` },
    };

    const nextMeetups = yield call(api.get, `/users/${id}/meetups/next`, requestConfig);

    const nextRegistrations = yield call(
      api.get,
      `/users/${id}/meetups/registrations`,
      requestConfig,
    );

    const nextRecomended = yield yield call(
      api.get,
      `/users/${id}/meetups/recomended`,
      requestConfig,
    );

    const data = {
      next: nextMeetups.data,
      registrations: nextRegistrations.data,
      recomended: nextRecomended.data,
    };

    yield put(UserMeetupsActions.loadUserMeetupsSuccess(data));
  } catch (err) {
    yield put(UserMeetupsActions.loadUserMeetupsFailure());
  }
}
