import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentHome from "./StudentHome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentHome/>
      </div>
    );
  }
}

export default App;
