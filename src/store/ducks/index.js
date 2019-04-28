import { combineReducers } from 'redux';

import { reducer as signIn } from './signIn';
import { reducer as signUp } from './signUp';
import { reducer as preferences } from './preferences';
import { reducer as user } from './user';

export default combineReducers({
  signIn,
  signUp,
  preferences,
  user,
});
