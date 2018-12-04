import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import styles from '../styles/List';
import { connect } from 'react-redux'
import { getEvents } from '../actions/eventsActions'

class ListScreen extends React.Component {

  async componentWillMount() {
    this.readEventsData()
  }

  readEventsData = () => {
    const { firebaseApp, getEvents } = this.props;

    firebaseApp.firestore().collection('events')
      .get()
      .then(snapshot => {
        getEvents(snapshot._docs);
      });
  }

  eventJsx = (event, i) => {
    return (
      <View key={`event-${i}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text>.3 mi</Text>
        <Text onPress={ () => this.handleEventPress(event)}>{event.title}</Text>
        <Text>{event.total}/{event.needed}</Text>
      </View>
    )
  }

  handleCreateClick = () => {
    const { navigation } = this.props;

    navigation.navigate('Create', {
      route: 'List'
    });
  }

  handleEventPress = (event) => {
    const { navigation } = this.props;

    navigation.navigate('Event', {
      event,
      route: 'List'
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View style={{height: 60, backgroundColor: '#081b33', top: 0, position: 'absolute', left: 0, right: 0, display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', padding: 10}}>
          <Image source={require('../../assets/rotary.png')} style={{height: 20, width: 20}}/>
          <Text onPress={this.handleCreateClick} style={{color: 'white'}}>Create</Text>
        </View>
        <Text style={{textAlign: 'center'}}>Event List</Text>
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text>Distance</Text>
          <Text>Title</Text>
          <Text>Volunteers</Text>
        </View>
        <View>
          {this.props.events.map((eventData, i) => {
            const event = eventData._data;
            return this.eventJsx(event, i);
          })}
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ app: { firebaseApp }, events: { events } }) => {
  return {
    firebaseApp,
    events
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEvents: events => dispatch(getEvents(events))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)