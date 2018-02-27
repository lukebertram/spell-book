import React from 'react';

function SpellBook(){
  return(
    <div className="spell-book">
      <h3>Spell Book Component</h3>
      <style jsx>{`
        .spell-book{
          min-height: 300px;
          background-color: honeydew;
        }
      `}</style>
    </div>
  );
}

export default SpellBook;
