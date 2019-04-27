import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Dashboard from '~/screens/Dashboard';
import SignIn from '~/screens/SignIn';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    Dashboard,
  }),
);
export default Routes;
