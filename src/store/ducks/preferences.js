import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Action Creators
 */
const { Types, Creators } = createActions({
  loadPreferencesRequest: null,
  loadPreferencesSuccess: ['data'],
  loadPreferencesFailure: null,
});

export const PreferencesTypes = Types;
export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: false,
});

/**
 * Reducers
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PREFERENCES_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_PREFERENCES_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.LOAD_PREFERENCES_FAILURE]: state => state.merge({ error: true, loading: false }),
});
