import { createSwitchNavigator } from 'react-navigation'
import HomeScreen from './app/containers/Home';
import EventScreen from './app/containers/Event';
import CreateScreen from './app/containers/Create';
import AppNavigator from './app/AppNavigator';

export default createSwitchNavigator({
  Home: { screen: HomeScreen },
  App: { screen: AppNavigator },
  Event: { screen: EventScreen },
  Create: { screen: CreateScreen },
}, {
    initialRouteName: 'Home',
});