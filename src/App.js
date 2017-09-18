import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common/index';
//import AlbumList from './components/AlbumList';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDIjP3cxV4IjxIQ5rR_A3aPEG9tka7JByk',
    authDomain: 'albums-44631.firebaseapp.com',
    databaseURL: 'https://albums-44631.firebaseio.com',
    projectId: 'albums-44631',
    storageBucket: 'albums-44631.appspot.com',
    messagingSenderId: '441310695649'
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
