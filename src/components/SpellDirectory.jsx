import React from 'react';
import { fetchDirectoryContents } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function SpellDirectory(props){

  function handlePopulateSpellDirectory(){
    // const { dispatch } = props;
    props.dispatch(fetchDirectoryContents());
  }

  return(
    <div className="spell-directory">
      <h3>Spell Directory Component</h3>
      {props.spellList.map((spell, index) => {
        return(
          <li
            key={index}
            onClick={() => console.log(`Spell Item Clicked: ${index + 1}`)}
            >
            {spell.name}
          </li>
        )
      })}
      <button onClick={handlePopulateSpellDirectory}>Get Directory</button>
      <style jsx>{`
        .spell-directory{
          text-align: left;
          background-color: palevioletred;
        }
      `}</style>
    </div>
  );
}

SpellDirectory.propTypes = {
  dispatch: PropTypes.func,
  spellList: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => {
  return {
    spellList: state.spellDirectory.spellList
  }
}

export default connect(mapStateToProps)(SpellDirectory);
