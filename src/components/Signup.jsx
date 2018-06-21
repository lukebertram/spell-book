import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userName: '',
      password: ''
    }
  }

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

Signup.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps)(Signup);
