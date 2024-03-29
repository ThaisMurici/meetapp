import { call, put, select } from 'redux-saga/effects';

import { navigate } from '~/services/navigation';
import api from '~/services/api';
import UserMeetupsActions from '~/store/ducks/userMeetups';

export function* loadUserMeetups({ id }) {
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
      search: [],
    };

    yield put(UserMeetupsActions.loadUserMeetupsSuccess(data));
  } catch (err) {
    yield put(UserMeetupsActions.loadUserMeetupsFailure());
  }
}

export function* saveNewMeetup({ data }) {
  try {
    const userAuthToken = yield select(state => state.signIn.token.token);

    const requestConfig = {
      headers: { Authorization: `bearer ${userAuthToken}` },
    };

    yield call(api.post, '/meetups', data, requestConfig);

    yield put(UserMeetupsActions.saveNewMeetupSuccess());
    navigate('Dashboard');
  } catch (err) {
    yield put(UserMeetupsActions.saveNewMeetupFailure());
  }
}

export function* searchMeetups({ searchTerm }) {
  try {
    const userAuthToken = yield select(state => state.signIn.token.token);

    const requestConfig = {
      headers: { Authorization: `bearer ${userAuthToken}` },
    };

    const response = yield call(api.get, `/meetups?title=${searchTerm}`, requestConfig);

    const data = {
      next: [],
      registrations: [],
      recomended: [],
      search: response.data,
    };

    yield put(UserMeetupsActions.searchMeetupsSuccess(data));
  } catch (err) {
    yield put(UserMeetupsActions.searchMeetupsFailure());
  }
}

export function* registerInMeetup({ userId, meetupId }) {
  try {
    const userAuthToken = yield select(state => state.signIn.token.token);

    const requestConfig = {
      headers: { Authorization: `bearer ${userAuthToken}` },
    };

    yield call(api.post, `/meetups/${meetupId}/register`, { user: userId }, requestConfig);

    yield put(UserMeetupsActions.registerInMeetupSuccess());
  } catch (err) {
    yield put(UserMeetupsActions.registerInMeetupFailure());
  }
}
