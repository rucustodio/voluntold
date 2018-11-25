import React from 'react';
import { NavigationActions } from 'react-navigation';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { Image, Text, View } from 'react-native';
import firebase from 'react-native-firebase';
import styles from '../styles/Home';
import { connect } from 'react-redux'
import {login} from '../actions/authActions';

class HomeScreen extends React.Component {

  async componentDidMount() {
    GoogleSignin.configure();
  }

  googleSignIn = () => {
    const { navigation, login } = this.props;
  
    GoogleSignin.signIn()
      .then((data) => {
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);

        return firebase.auth().signInWithCredential(credential);
      })
      .then((userInfo) => {
        login(userInfo);
        navigation.navigate('App');
      })
      .catch((error) => {
        const { code, message } = error;
        console.log(code, message);
      });
  }

  render() {
    const logoSrc = '../../assets/rotary.png';

    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Image source={require(logoSrc)} style={[styles.logo]}/>
          <Text style={styles.welcome}>
            Voluntold
          </Text>

          <GoogleSigninButton
            style={{ width: 190, height: 48, marginTop: 100 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this.googleSignIn}/>
        </View>
      </View>
    );
  }
}

const mapStateToProps = props => {

  console.log(props, 'mapStateToProps');

  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)