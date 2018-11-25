import React from 'react';
import { Text, View } from 'react-native';
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
        <Text>{event.title}</Text>
        <Text>{event.total}/{event.needed}</Text>
      </View>
    )
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.wrapper}>
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