import React from 'react';
import Brand from './Brand';
import Logo from './Logo';
import Addtask from './AddTask';
import Addrandom from './AddRandom';
class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron ">
        <div className="container text-center">
          <Brand />
          <Logo />
          {/* Add a Task Section  */}

          <div className="row">
            <div className="col">
              <Addtask />
              <Addrandom />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
