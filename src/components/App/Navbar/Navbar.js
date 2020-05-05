import React from 'react';
import Score from './Score/Score';
import Menubutton from './MenuButton/MenuButton';
import Hamburger from './Hamburger/Hamburger';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <Score score={this.props.score} />
        <Menubutton />
        <Hamburger />
      </nav>
    );
  }
}

export default Navbar;
