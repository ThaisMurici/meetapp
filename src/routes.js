import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Dashboard from '~/screens/Dashboard';
import Preferences from '~/screens/Preferences';
import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Dashboard,
    Preferences,
  }),
);

export default Routes;
