import React from 'react';
import { Image, Text, View, StatusBar } from 'react-native';
import styles from '../styles/General';
import { connect } from 'react-redux'

class ProfileScreen extends React.Component {
    
  render() {
    const {user} = this.props;
    return (
      <View style={styles.wrapper}>
        <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
          />
        <View style={{height: 60, backgroundColor: '#081b33', top: 0, position: 'absolute', left: 0, right: 0, display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', padding: 10}}>
          <Image source={require('../../assets/rotary.png')} style={{height: 20, width: 20}}/>
        </View>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{height: 75, width: 75, borderRadius: 38, marginBottom: 20}}
            source={{uri: user.photoURL}}
          />
          <Text style={{textAlign: 'center'}}>{user.displayName}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ app: { user }}) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(ProfileScreen)