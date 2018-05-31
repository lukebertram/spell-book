import React, { Component } from 'react';
import './App.css';
import SpellDirectory from './SpellDirectory';
import SpellBook from './SpellBook';
import SpellDisplay from './SpellDisplay';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <SpellDirectory />
          <div className="localSpellArea">
            <SpellBook />
            <SpellDisplay />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
