import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div className='App-header'>
      <h1><Link to='/'>Spell Keeper</Link></h1>
      <Navbar />
    </div>
  );
}

export default Header;
