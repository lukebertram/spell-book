import React from 'react';
import {
  fetchDirectoryContents,
  fetchSpellInfo,
  selectSpell
} from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SpellDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }

    this.props.dispatch(fetchDirectoryContents());
  }

  handleSearchInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  render() {
    const searchRegex = new RegExp(this.state.userInput, "gi");
    return (
      <div className="spell-directory">
        <h3>Spell Directory</h3>
        <input placeholder="Search" onChange={this.handleSearchInput.bind(this)}></input>
        <ul>
          {this.props.spellList.map( spell => {
            if (searchRegex.test(spell.name)) {
              return (
                <li
                  key={spell.name}
                  onClick={() => {
                    this.props.dispatch(fetchSpellInfo(spell));
                    this.props.dispatch(selectSpell(spell.name));
                  }}
                >
                  {spell.name}
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        <style jsx>{`
          .spell-directory {
            text-align: left;
            background-color: palevioletred;
          }
        `}</style>
      </div>
    );
  }
}

SpellDirectory.propTypes = {
  dispatch: PropTypes.func,
  spellList: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => {
  return {
    spellList: state.spellDirectory.spellList
  };
};

export default connect(mapStateToProps)(SpellDirectory);
