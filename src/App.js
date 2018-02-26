import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpellSearch from './SpellSearch';
import SearchResult from './SearchResult';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Spell Book</h1>
        <SpellSearch />
        <SearchResult />
      </div>
    );
  }
}

export default App;
