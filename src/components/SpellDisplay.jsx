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
    if (this.props.selectedSpell) {
      spellInfoArea = (
        <div>
          <input type="checkbox" checked={!!this.props.mySpells[this.props.selectedSpell]} onChange={this.handleIsKnownCheckbox}/>
          <h3>Current Spell:</h3>
          <h1>{this.props.currentSpell.name}</h1>
          <p>{this.props.currentSpell.desc}</p>
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
