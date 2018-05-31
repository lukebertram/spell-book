import React from 'react';
import { fetchDirectoryContents } from './../actions';
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
          {this.props.spellList.map((spell, index) => {
            return (
              <li
                key={index}
                onClick={() =>
                  console.log(`Spell Item Clicked: ${index + 1}`, spell)
                }
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
