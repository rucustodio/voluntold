import React from 'react';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { Image, Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import styles from '../styles/Home';

export default class MapScreen extends React.Component {

    async componentDidMount() {
        GoogleSignin.configure();
      }
    
      render() {
        return (
          <View style={styles.wrapper}>
          </View>
        );
      }
}