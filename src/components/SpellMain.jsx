import React from 'react';
import SpellDirectory from './SpellDirectory';
import SpellDetails from './SpellDetails';
import SpellBook from './SpellBook';

function SpellMain(){
  return(
    <main>
      <SpellDirectory />
      <SpellDetails />
      <SpellBook />
    </main>
  );
}

export default SpellMain;
