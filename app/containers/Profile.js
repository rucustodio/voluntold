import React from 'react';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { Image, Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import styles from '../styles/Home';

export default class ProfileScreen extends React.Component {
    
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Profile Profile Profile Screen</Text>
      </View>
    );
  }
}