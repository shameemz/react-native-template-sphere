import React, { Component } from 'react';

import SampleComponent from './../../components/Mobile/{Site}/SampleComponent';

class EntryScreen extends Component {
  constructor(props) {
    super(props);
    this.exampleVar = '';
  }
  render() {
    return (
      <SampleComponent />
    );
  }
}

export default EntryScreen;
