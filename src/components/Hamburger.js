import React from 'react';
import Menuitem from './MenuItem';
import Menusearch from './MenuSearch';

class Hamburger extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* ml-auto (margin left auto className floats the items to the right)  */}
        <ul className="navbar-nav ml-auto">
          <Menuitem />
          <Menuitem />
          <Menuitem />
          <Menusearch />
        </ul>
      </div>
    );
  }
}

export default Hamburger;
