import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDixcNM0cx28PwGGiwawcbRkQjC13qbFFc',
      authDomain: 'tufirebase.firebaseapp.com',
      databaseURL: 'https://tufirebase.firebaseio.com',
      projectId: 'tufirebase',
      storageBucket: 'tufirebase.appspot.com',
      messagingSenderId: '209691124855'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authenthication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
