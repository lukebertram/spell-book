import React, { Component } from 'react';
import './App.css';
import SpellDirectory from './SpellDirectory';
import SpellBook from './SpellBook';
import SpellDisplay from './SpellDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Spell Book</h1>
        <SpellDirectory />
        <div className="localSpellArea">
          <SpellBook />
          <SpellDisplay />
        </div>
      </div>
    );
  }
}

export default App;
