import React from 'react';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { Image, Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import styles from '../styles/Home';

export default class HomeScreen extends React.Component {

  async componentDidMount() {
    GoogleSignin.configure();
  }

  googleSignIn() {
    GoogleSignin.signIn()
      .then((data) => {
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);

        return firebase.auth().signInWithCredential(credential);
      })
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        const { code, message } = error;
        console.log(code, message);
      });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Image source={require('../../assets/rotary.png')} style={[styles.logo]}/>
          <Text style={styles.welcome}>
            Voluntold
          </Text>
          <GoogleSigninButton
            style={{ width: 190, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.googleSignIn}/>
        </View>
      </View>
    );
  }
}