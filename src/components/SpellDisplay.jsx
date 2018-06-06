import React from 'react';
import { connect, dispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleKnown } from '../actions';

function SpellDisplay(props) {
  let spellInfoArea;
  if (props.selectedSpell) {
    spellInfoArea = (
      <div>
        <input type="checkbox" checked={props.mySpells[props.selectedSpell]} onChange={() => props.dispatch(toggleKnown(props.selectedSpell, props.spellCache, props.mySpells))}/>
        <h3>Current Spell:</h3>
        <h1>{props.currentSpell.name}</h1>
        <p>{props.currentSpell.desc}</p>
      </div>
    );
  } else {
    spellInfoArea = <h3>No Spell Selected</h3>;
  }
  return <div className="spell-info">{spellInfoArea}</div>;
}

SpellDisplay.propTypes = {
  dispatch: PropTypes.func,
  selectedSpell: PropTypes.object
};

const mapStateToProps = state => {
  return {
    selectedSpell: state.selectedSpell,
    currentSpell: state.spellCache[state.selectedSpell],
    spellCache: state.spellCache,
    mySpells: state.mySpells
  };
};

export default connect(mapStateToProps)(SpellDisplay);
