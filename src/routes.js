import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/screens/SignIn';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
  }),
);
export default Routes;
