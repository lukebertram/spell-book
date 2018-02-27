import React from 'react';
import { fetchDirectoryContents } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function SpellDirectory(props){

  function handlePopulateSpellDirectory(){
    const { dispatch } = props;
    dispatch(fetchDirectoryContents());
  }

  return(
    <div className="spell-directory">
      <h3>Spell Directory Component</h3>
      <button onClick={handlePopulateSpellDirectory}>Get Directory</button>
      <style jsx>{`
        .spell-directory{
          background-color: palevioletred;
        }
      `}</style>
    </div>
  );
}

SpellDirectory.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(SpellDirectory);
