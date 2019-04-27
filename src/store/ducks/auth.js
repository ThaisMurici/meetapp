import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Action Creators
 */
const { Types, Creators } = createActions({
  authRequest: ['email', 'password'],
  authSuccess: ['token'],
  authFailure: null,
});

export const AuthTypes = Types;
export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  loading: false,
  token: null,
  error: false,
});

/**
 * Reducers
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: state => state.merge({ loading: true }),
  [Types.AUTH_SUCCESS]: (state, { token }) => state.merge({ token, loading: false }),
  [Types.AUTH_FAILURE]: state => state.merge({ error: true, loading: false }),
});
