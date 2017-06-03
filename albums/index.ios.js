// Index.ios.js - place code in here for iOS!!

// 1. Import a library to help create a compoment
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// 2. Create a Component
const App = () => (
  <Header headerText={'Albums'} />
);

// 3. Render it to the device
AppRegistry.registerComponent('albums', () => App);
