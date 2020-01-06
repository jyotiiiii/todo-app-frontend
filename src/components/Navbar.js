import React from 'react';
import Score from './Score';
import Hamburger from './Hamburger';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <Score />

        <Hamburger />
      </nav>
    );
  }
}

export default Navbar;
