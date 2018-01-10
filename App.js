/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import EntryScreen from './src/screens/Mobile/EntryScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.someName = '';
  }
  render() {
    return (
      <EntryScreen />
    );
  }
}

