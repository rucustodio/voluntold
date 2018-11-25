import { createBottomTabNavigator } from 'react-navigation'
import MapScreen from './containers/Map';
import ListScreen from './containers/List';
import ProfileScreen from './containers/Profile';

export default createBottomTabNavigator({
  Map: { screen: MapScreen },
  List: { screen: ListScreen },
  Profile: { screen: ProfileScreen },
}, {
  initialRouteName: 'List',
  tabBarOptions: {
    labelStyle: { fontSize: 16, color: '#e54a35' },
    style: {
      borderTopColor: '#e4e4e4'
    },
    tabStyle: {
      backgroundColor: 'white',
      paddingTop: 10,
      paddingBottom: 10,
    }
  }
});