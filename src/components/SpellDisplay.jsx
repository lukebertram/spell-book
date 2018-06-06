import React from 'react';
import { connect, dispatch } from 'react-redux';
import PropTypes from 'prop-types';

function SpellDisplay(props) {
  let spellInfoArea;
  if (props.currentSpell) {
    spellInfoArea = (
      <div>
        <input type="checkbox" checked={this.props.mySpells[currentSpell.name]} onChange={this.props.dispatch(toggleKnown(props.currentSpell))}/>
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
  currentSpell: PropTypes.object
};

const mapStateToProps = state => {
  return {
    currentSpell: state.spellCache[state.selectedSpell]
  };
};

export default connect(mapStateToProps)(SpellDisplay);
