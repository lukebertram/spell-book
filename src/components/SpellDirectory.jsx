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

    this.props.dispatch(fetchDirectoryContents());
  }

  render() {
    return (
      <div className="spell-directory">
        <h3>All Spells</h3>
        <ul>
          {this.props.spellList.map(spell => {
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
