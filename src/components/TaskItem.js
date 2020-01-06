import React from 'react';
import Deletebutton from './DeleteButton';
import Donebutton from './DoneButton';

class Taskitem extends React.Component {
  render() {
    return (
      <div className="row justify-content-center pb-3 custom-task">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-8 col-sm-9 text-left">
              This is a task. Lorem ipsum dolor sit amet, consectetur
              adipiscing.
            </div>
            <div className="col-4 col-sm-3 pt-1">
              <Deletebutton />
              <Donebutton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Taskitem;
