import React from 'react';
import Score from './Score';
import Menubutton from './MenuButton';
import Hamburger from './Hamburger';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <Score currentScore="89" />
        <Menubutton />
        <Hamburger />
      </nav>
    );
  }
}

export default Navbar;
