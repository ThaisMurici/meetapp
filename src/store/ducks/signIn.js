import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Action Creators
 */
const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token', 'user'],
  signInFailure: null,
});

export const SignInTypes = Types;
export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = Immutable({
  token: null,
  error: false,
  loading: false,
});

/**
 * Reducers
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_REQUEST]: state => state.merge({ loading: true }),
  [Types.SIGN_IN_SUCCESS]: (state, { token }) => state.merge({ token, loading: false }),
  [Types.SIGN_IN_FAILURE]: state => state.merge({ error: true, loading: false }),
});
