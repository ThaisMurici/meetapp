import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Dashboard from '~/screens/Dashboard';
import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Dashboard,
  }),
);
export default Routes;
