import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleKnown } from '../actions';

class SpellDetails extends React.Component {

  handleIsKnownCheckbox = () => {
    const {
      dispatch,
      selectedSpell,
      spellCache,
      mySpells
      } = this.props;
    dispatch(toggleKnown(selectedSpell, spellCache, mySpells));
  }

  render(){
    const { selectedSpell, currentSpell, mySpells } = this.props;
    const spellDesc = currentSpell.desc;
    let spellDetailArea = <h3>No Spell Selected</h3>;

    // filter out text conversion artifacts from spell database
    const descDisplay = Array.isArray(spellDesc) ? spellDesc.map(paragraph => paragraph.replace(/â€™/gi, `'`).replace(/â€œ|â€�/gi, ``).replace(/â€”/g, `"`)) : null;

    if (selectedSpell) {
      spellDetailArea = (
        <div>
          <input type="checkbox" checked={!!mySpells[selectedSpell]} onChange={this.handleIsKnownCheckbox}/>
          <h3>Current Spell:</h3>
          <h1>{currentSpell.name}</h1>
          {descDisplay ? descDisplay.map(paragraph => <p>{paragraph}</p>) : spellDesc}
        </div>
      );
    }
    return <div className="spell-detail">{spellDetailArea}</div>;
  }
}

SpellDetails.propTypes = {
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

export default connect(mapStateToProps)(SpellDetails);
