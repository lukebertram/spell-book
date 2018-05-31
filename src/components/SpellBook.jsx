import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function SpellBook(props) {
  return (
    <div className="spell-book">
      <h3>My Spells</h3>
      <ul className="local-spells">
        {Object.values(props.localSpells).map(spell => {
          return (
            <li
              key={spell.id}
              onClick={() =>
                console.log(`Local Spell clicked: ${spell.id}`, spell)
              }
            >
              {spell.name}
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .spell-book {
          min-height: 300px;
          background-color: honeydew;
        }
      `}</style>
    </div>
  );
}

SpellBook.propTypes = {
  dispatch: PropTypes.func,
  localSpells: PropTypes.object
};

const mapStateToProps = state => {
  return {
    localSpells: state.localSpells
  };
};

export default connect(mapStateToProps)(SpellBook);
