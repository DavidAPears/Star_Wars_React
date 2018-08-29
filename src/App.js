import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import StarWarsContainer from "./containers/StarWarsContainer.js"

class App extends Component {
  render() {
    return (
      <div className="App">

             <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h1 className="App-title">Star Wars Characters</h1>
             </header>

             <div>
             <StarWarsContainer/>
             </div>

           </div>
    );
  }
}

export default App;
