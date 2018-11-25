import { createSwitchNavigator } from 'react-navigation'
import HomeScreen from './app/containers/Home';
import AppNavigator from './app/AppNavigator';

export default createSwitchNavigator({
  Home: { screen: HomeScreen },
  App: { screen: AppNavigator },
}, {
    initialRouteName: 'Home',
});