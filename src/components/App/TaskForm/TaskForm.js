import React from 'react';

class TaskForm extends React.Component {
  state = {
    taskDescription: '',
    taskCategory: '',
  };

  addTask = (event) => {
    // event.preventDefault();
    this.props.addTaskFunction(
      this.state.taskDescription,
      this.props.taskCategory
    );
  };

  taskDescriptionNew = (event) => {
    this.setState({
      taskDescription: event.target.value,
    });
  };

  taskCategorySet = (event) => {
    this.setState({
      taskCategory: event.target.value,
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

                {/* <select
                  name="category"
                  onChange={this.taskCategorySet}
                  required
                >
                  <option value="">Please choose a category</option>
                  <option value="self">Self</option>
                  <option value="others">Others</option>
                  <option value="world">World</option>
                </select> */}
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

export default TaskForm;
