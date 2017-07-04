import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import Swiper from 'react-native-deck-swiper'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {profiles: []}
    fetch(`http://localhost:3300/profiles`)
      .then(response => response.json())
      .then((profiles) => {
        this.setState({profiles})
      })
  }

  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '1491375707600033', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          cards={this.state.profiles}
          renderCard={(profile) => {
            return (
              <View style={styles.card}>
                <Image style={styles.image} source={{uri: (profile || {}).imageUrl}} />
              </View>
            )
          }}
          onSwiped={(cardIndex) => {console.log(cardIndex)}}
          onSwipedAll={() => {console.log('onSwipedAll')}}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}>
          <Button
              onPress={() => {console.log('oulala')}}
              title="Press me">
              You can press me
          </Button>
        </Swiper>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          title="Login with Facebook"
          onPress={this._handleFacebookLogin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
