import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Signin extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userName: '',
      password: ''
    }
  }

  // handleIsKnownCheckbox = () => {
  //   dispatch(toggleKnown(selectedSpell, spellCache, mySpells));
  // }
  updateInput(e){

  }

  render(){
    return(
      <div className="signup-form">
        <label for='email'/>
        <input
          type='text'
          name='email'
          placeholder='email'
          value={this.state.input}
          onChange={this.updateInput}
        />
        <button>
          Submit
        </button>
      </div>
    );
  }
}

Signin.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps)(Signin);
