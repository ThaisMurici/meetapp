import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Action Creators
 */
const { Types, Creators } = createActions({
  loadUserMeetupsRequest: ['id'],
  loadUserMeetupsSuccess: ['data'],
  loadUserMeetupsFailure: null,
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
  [Types.LOAD_USER_MEETUPS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.LOAD_USER_MEETUPS_FAILURE]: state => state.merge({ error: true, loading: false }),
});
