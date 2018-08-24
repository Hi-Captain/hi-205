import React, { Component } from 'react';
import Display from './Display';
import Buttons from './Buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <Buttons />
      </div>
    );
  }
}

export default App;
