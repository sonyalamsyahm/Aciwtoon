//import Component
import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

//Import Local
import LoginScreen from './public/Login';
import ForYouScreen from './private/ForYou';
import FavoriteScreen from './private/Favorite';
import ProfileScreen from './private/Profile';

const Public = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
});

const Privates = createMaterialBottomTabNavigator({
  ForYou: {
    screen: ForYouScreen,
  },
  Favorite: {
    screen: FavoriteScreen,
  },
  ProfileScreen: {
    screen: ProfileScreen,
  },
});

const index = createSwitchNavigator({
  Public: Public,
  Private: Privates,
});

export default createAppContainer(index);
