import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import { colors } from '~/styles';

import Dashboard from '~/screens/Dashboard';
import MeetupDetails from '~/screens/MeetupDetails';
import NewMeetup from '~/screens/NewMeetup';
import Profile from '~/screens/Profile';
import Preferences from '~/screens/Preferences';
import Search from '~/screens/Search';
import SignIn from '~/screens/SignIn';
import SignUp from '~/screens/SignUp';

const Routes = createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
    Preferences,
    App: createStackNavigator(
      {
        Home: createBottomTabNavigator(
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
        Profile,
        MeetupDetails,
      },
      { initialRouteName: 'Home', headerMode: 'none' },
    ),
  }),
);

export default Routes;
