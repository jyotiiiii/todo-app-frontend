import React from 'react';
import Brand from './Brand/Brand';
import Logo from './Logo/Logo';
import AddTask from './AddTask/AddTask';
import AddRandom from './AddRandom/AddRandom';
class Header extends React.Component {
  render() {
    return (
      <div className="jumbotron ">
        <div className="container text-center categories">
          <Brand />

          <div className="row">
            {/* TODO Change image and props */}
            <div className="col">
              {this.props.score >= 50 ? (
                <img src="./images/others.png" width="100px"></img>
              ) : null}
            </div>

            <div className="col">
              <Logo score={this.props.score} />
            </div>

            {/* TODO Change image and props */}
            <div className="col">
              {this.props.score >= 100 ? (
                <img src="./images/others.png" width="100px"></img>
              ) : null}
            </div>
          </div>

          {/* Add a Task Section  */}
          <div className="row">
            {/* TODO Change props for Others Category*/}
            <div className="col">
              <AddTask
                onAddTaskClick={this.props.onAddTaskClick}
                taskCategory="Others"
              />
              <AddRandom onHeartClick={this.props.onHeartClick} />
            </div>

            <div className="col">
              <AddTask
                onAddTaskClick={this.props.onAddTaskClick}
                taskCategory="Self"
              />
              <AddRandom onHeartClick={this.props.onHeartClick} />
            </div>

            {/* TODO Change props for World Category*/}
            <div className="col">
              <AddTask
                onAddTaskClick={this.props.onAddTaskClick}
                taskCategory="World"
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
