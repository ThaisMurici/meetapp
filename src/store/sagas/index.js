import { all, takeLatest } from 'redux-saga/effects';

import { SignInTypes } from '~/store/ducks/signIn';
import { SignUpTypes } from '~/store/ducks/signUp';
import { PreferencesTypes } from '~/store/ducks/preferences';
import { UserTypes } from '~/store/ducks/user';
import { UserMeetupsTypes } from '~/store/ducks/userMeetups';

import signIn from './signIn';
import signUp from './signUp';
import loadPreferences from './preferences';
import updateUser from './user';
import { loadUserMeetups, saveNewMeetup } from './userMeetups';

export default function* rootSaga() {
  return yield all([
    takeLatest(SignInTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(SignUpTypes.SIGN_UP_SUCCESS, signIn),
    takeLatest(SignUpTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(PreferencesTypes.LOAD_PREFERENCES_REQUEST, loadPreferences),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser),
    takeLatest(UserMeetupsTypes.LOAD_USER_MEETUPS_REQUEST, loadUserMeetups),
    takeLatest(UserMeetupsTypes.SAVE_NEW_MEETUP_REQUEST, saveNewMeetup),
  ]);
}
