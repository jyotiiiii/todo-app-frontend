import React from 'react';
import Score from './Score';
import Menubutton from './MenuButton';
import Hamburger from './Hamburger';

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
