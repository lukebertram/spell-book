import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectSpell
} from './../actions';

function SpellBook(props) {
  return (
    <div className="spell-book">
      <h3>My Spells</h3>
      <ul className="local-spells">
        {Object.values(props.mySpells).map(spell => {
            return (
              <li
                key={spell.name}
                onClick={() => {
                  console.log(`Local Spell clicked: ${spell.name}`, spell);
                  props.dispatch(selectSpell(spell.name))}
                }
              >
                {spell.name}
              </li>
            );
        })}
      </ul>
      <style jsx>{`
        .spell-book {
          background-color: honeydew;
        }
      `}</style>
    </div>
  );
}

SpellBook.propTypes = {
  dispatch: PropTypes.func,
  mySpells: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mySpells: state.mySpells
  };
};

export default connect(mapStateToProps)(SpellBook);
