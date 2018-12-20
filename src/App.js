import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main></Main>
        <footer>
            <h2>Test Project Open Source</h2>
        </footer>
      </div>
    );
  }
}

export default App;
