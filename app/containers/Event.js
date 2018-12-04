import React from 'react';
import { StatusBar, Text, View, Image } from 'react-native';
import styles from '../styles/General';

export default class EventScreen extends React.Component {
  
  handleBack = () => {
    const { navigation } = this.props;
    const route = navigation.getParam('route')
    navigation.navigate(route);
  }

  render() {
    const { navigation } = this.props;
    const event = navigation.getParam('event');
    const route = navigation.getParam('route')

    console.log(event);

    return (
      <View style={{paddingTop: 70}}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View style={{height: 60, backgroundColor: '#081b33', top: 0, position: 'absolute', left: 0, right: 0, display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', padding: 10}}>
          <Text onPress={this.handleBack} style={{color: 'white'}}>Back to {route}</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 36, fontWeight: 'bold', paddingBottom: 20}}>{event.title}</Text>
          <Text style={{fontWeight: 'bold'}}>Sponsors:</Text>
          <Text style={{paddingBottom: 20}}>{event.sponsors && event.sponsors.map((s, i) => `${s} `)}</Text>
          <Text style={{fontWeight: 'bold'}}>Description:</Text>
          <Text style={{lineHeight: 20, paddingBottom: 20}}>{event.description}</Text>
          <Text style={{fontWeight: 'bold'}}>Volunteers:</Text>
          <Text>{event.total}/{event.needed}</Text>
        </View>

      </View>
    );
  }
}