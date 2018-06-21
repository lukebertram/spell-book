import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Signin from './Signin';
import Signup from './Signup';
import SpellMain from './SpellMain';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route exact path="/" component={SpellMain}/>
      </div>
    );
  }
}

export default App;
