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
          <img src="./images/others.png" width="100px"></img>
          <Logo score={this.props.score} />
          <img src="./images/others.png" width="100px"></img>
          {/* Add a Task Section  */}
          <div className="row">
            <div className="col">
              <Addtask
                onAddTaskClick={this.props.onAddTaskClick}
                taskCategory="Self"
              />
              <Addrandom onHeartClick={this.props.onHeartClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
