import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import MenuSearch from './MenuSearch/MenuSearch';

class Hamburger extends React.Component {
  render() {
    return (
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* ml-auto (margin left auto className floats the items to the right)  */}
        <ul className="navbar-nav ml-auto">
          <MenuItem menuDescription="About" />
          <MenuItem menuDescription="Kindness" />
          <MenuItem menuDescription="How it works" />
          <MenuSearch />
        </ul>
      </div>
    );
  }
}

export default Hamburger;
