import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleKnown } from '../actions';

class SpellDisplay extends React.Component {
  constructor(props){
    super(props);
  }

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
    let spellDisplayArea = <h3>No Spell Selected</h3>;
    const descDisplay = Array.isArray(spellDesc) ? spellDesc.map(paragraph => paragraph.replace(/â€™/gi, `'`).replace(/â€œ|â€�/gi, ``).replace(/â€”/g, `"`)) : null;

    if (selectedSpell) {
      spellDisplayArea = (
        <div>
          <input type="checkbox" checked={!!mySpells[selectedSpell]} onChange={this.handleIsKnownCheckbox}/>
          <h3>Current Spell:</h3>
          <h1>{currentSpell.name}</h1>
          {descDisplay ? descDisplay.map(paragraph => <p>{paragraph}</p>) : spellDesc}
        </div>
      );
    }
    return <div className="spell-display">{spellDisplayArea}</div>;
  }
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
