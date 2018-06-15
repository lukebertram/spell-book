import React from 'react';
import { connect, dispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleKnown } from '../actions';

class SpellDisplay extends React.Component {
  constructor(props){
    super(props);
  }

  handleIsKnownCheckbox = () => {
    this.props.dispatch(toggleKnown(this.props.selectedSpell, this.props.spellCache, this.props.mySpells));
  }

  render(){
    let spellInfoArea = <h3>No Spell Selected</h3>;
    // const spellDescription = this.props.currentSpell.desc[0].replace(/â€™/gi, "'");
    const spellDesc = this.props.currentSpell.desc;
    const descDisplay = Array.isArray(spellDesc) ? spellDesc.map(paragraph => paragraph.replace(/[^\w\s\-\'\,\.\!]/gi, '')) : null;

    if (this.props.selectedSpell) {
      spellInfoArea = (
        <div>
          <input type="checkbox" checked={!!this.props.mySpells[this.props.selectedSpell]} onChange={this.handleIsKnownCheckbox}/>
          <h3>Current Spell:</h3>
          <h1>{this.props.currentSpell.name}</h1>
          {descDisplay ? descDisplay.map(paragraph => <p>{paragraph}</p>) : spellDesc}
        </div>
      );
    }
    return <div className="spell-info">{spellInfoArea}</div>;
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
