import React, { Component } from 'react';
import EntryScreen from './screens/{Device}/EntryScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.exampleVar = '';
  }
  render() {
    return (
      <EntryScreen />
    );
  }
}

export default App;
