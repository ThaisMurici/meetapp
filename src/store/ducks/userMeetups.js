import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Action Creators
 */
const { Types, Creators } = createActions({
  loadUserMeetupsRequest: ['id'],
  loadUserMeetupsSuccess: ['data'],
  loadUserMeetupsFailure: null,
  saveNewMeetupRequest: ['data'],
  saveNewMeetupSuccess: null,
  saveNewMeetupFailure: null,
});

export const UserMeetupsTypes = Types;
export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  data: {
    next: [],
    registrations: [],
    recomended: [],
  },
  loading: false,
  error: false,
});

/**
 * Reducers
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_USER_MEETUPS_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_USER_MEETUPS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false, error: false }),
  [Types.LOAD_USER_MEETUPS_FAILURE]: state => state.merge({ error: true, loading: false }),
  [Types.SAVE_NEW_MEETUP_REQUEST]: state => state.merge({ loading: true }),
  [Types.SAVE_NEW_MEETUP_SUCCESS]: state => state.merge({ loading: false, error: false }),
  [Types.SAVE_NEW_MEETUP_FAILURE]: state => state.merge({ error: true, loading: false }),
});
