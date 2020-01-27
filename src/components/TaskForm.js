import React from 'react';

class Taskform extends React.Component {
  state = {
    taskDescription: ''
  };

  addTask = event => {
    event.preventDefault();
    this.props.addTaskFunction(this.state.taskDescription);
  };

  taskDescriptionNew = event => {
    this.setState({
      taskDescription: event.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 "></div>
          <div className="col-md-6 col-sm-11">
            <form className="text-center ">
              <div className="form-group mx-sm-3 mb-2 ">
                <input
                  type="text"
                  className="form-control form-font"
                  placeholder="add a Kinda thing to do"
                  onChange={this.taskDescriptionNew}
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-info mb-2"
                onClick={this.addTask}
              >
                Add Task
              </button>
            </form>
          </div>
          <div className="col-md-3 "></div>
        </div>
      </div>
    );
  }
}

export default Taskform;
