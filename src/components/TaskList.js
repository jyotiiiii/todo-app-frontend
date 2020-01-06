import React from 'react';

class Tasklist extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center pb-3 custom-task">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-8 col-sm-9 text-left">
                This is a task. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </div>
              <div className="col-4 col-sm-3 pt-1">
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-trash-alt fa-lg"></i>
                </a>
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-check fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center pb-3 custom-task">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-8 col-sm-9 text-left">
                This is a task. Lorem ipsum dolor sit amet, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="col-4 col-sm-3 pt-1">
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-trash-alt fa-lg"></i>
                </a>
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-check fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center pb-3 custom-task">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-8 col-sm-9 text-left">This is a task.</div>
              <div className="col-4 col-sm-3 pt-1">
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-trash-alt fa-lg"></i>
                </a>
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-check fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasklist;
