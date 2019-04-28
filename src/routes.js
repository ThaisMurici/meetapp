import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { colors } from '~/styles';

import Dashboard from '~/screens/Dashboard';
import NewMeetup from '~/screens/NewMeetup';
import Preferences from '~/screens/Preferences';
import Search from '~/screens/Search';
import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Preferences,
    App: createBottomTabNavigator(
      {
        NewMeetup,
        Dashboard,
        Search,
      },
      {
        initialRouteName: 'Dashboard',
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          activeTintColor: colors.white,
          inactiveTintColor: colors.whiteTransparent,
          style: {
            backgroundColor: colors.primary,
          },
        },
      },
    ),
  }),
);

export default Routes;
