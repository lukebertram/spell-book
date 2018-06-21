import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <div>
      <h3>
        <Link to="/signin">Sign-in</Link>
        /
        <Link to="/signup">Create an Account</Link>
      </h3>
    </div>
  );
}

export default Navbar;
