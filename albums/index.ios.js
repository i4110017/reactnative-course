// Index.ios.js - place code in here for iOS!!

// 1. Import a library to help create a compoment
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// 2. Create a Component
const App = () => (
  <Text>Some Text</Text>
);

// 3. Render it to the device
AppRegistry.registerComponent('albums', () => App);
