import React from 'react';
import Deletebutton from './DeleteButton';
import Donebutton from './DoneButton';

class Taskitem extends React.Component {
  render() {
    const description = (
      <div
        className={
          this.props.toDo.completed
            ? 'col-sm-9 text-left completed'
            : 'col-sm-9 text-left'
        }
      >
        {`${this.props.toDo.description} (${this.props.toDo.category})`}
      </div>
    );

    console.log(this.props.toDo);
    return (
      <div className="row justify-content-center pb-3 custom-task">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-8 col-sm-9 text-left">{description}</div>
            <div className="col-4 col-sm-3 pt-1">
              <Deletebutton
                idNo={this.props.toDo.id}
                deleteTaskFunction={this.props.deleteTaskFunction}
              />
              <Donebutton
                idNo={this.props.toDo.id}
                doneTaskFunction={this.props.doneTaskFunction}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Taskitem;
