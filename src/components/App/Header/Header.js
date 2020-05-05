import React from 'react';
import Logo from './Logo/Logo';
import AddTask from './AddTask/AddTask';
import AddRandom from './AddRandom/AddRandom';
class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron ">
        <div className="container text-center">
          {this.props.score >= 50 ? (
            <img src="./images/others.png" width="100px"></img>
          ) : null}

          <Logo score={this.props.score} />

          {this.props.score >= 100 ? (
            <img src="./images/others.png" width="100px"></img>
          ) : null}

          {/* Add a Task Section  */}
          <div className="row">
            <div className="col">
              <AddTask
                onAddTaskClick={this.props.onAddTaskClick}
                taskCategory="Self"
              />
              <AddRandom onHeartClick={this.props.onHeartClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
