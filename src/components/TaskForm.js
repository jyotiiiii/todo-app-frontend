import React from 'react';

class Taskform extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 "></div>
          <div className="col-md-4 ">
            <form className="form-inline ">
              <div className="form-group mx-sm-3 mb-2 ">
                <input
                  type="text"
                  className="form-control form-font"
                  placeholder="add a Kinda thing to do"
                ></input>
              </div>
              <button type="submit" className="btn btn-info mb-2">
                Add Task
              </button>
            </form>
          </div>
          <div className="col-md-4 "></div>
        </div>
      </div>
    );
  }
}

export default Taskform;
