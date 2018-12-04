import React from 'react';
import { StatusBar, Text, View, Image } from 'react-native';
import styles from '../styles/General';

export default class MapScreen extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View style={{height: 60, backgroundColor: '#081b33', top: 0, position: 'absolute', left: 0, right: 0, display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', padding: 10}}>
          <Image source={require('../../assets/rotary.png')} style={{height: 20, width: 20}}/>
        </View>
        <Text>Coming Soon!</Text>
      </View>
    );
  }
}