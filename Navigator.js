import React from 'react';
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './app/containers/Home';
import MapScreen from './app/containers/Map';

export default createStackNavigator({
  Home: {screen: HomeScreen},
  Map: {screen: MapScreen},
},{
  initialRouteName: 'Home',
});