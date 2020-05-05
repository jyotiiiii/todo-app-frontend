import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton/DeleteButton';
import DoneButton from './DoneButton/DoneButton';

class TaskItem extends React.Component {
  render() {
    const { toDo, deleteTaskFunction, doneTaskFunction } = this.props;
    const { completed, description, category, id } = toDo;
    const descriptionElement = (
      <div
        className={
          completed ? 'col-sm-9 text-left completed' : 'col-sm-9 text-left'
        }
      >
        {`${description} (${category})`}
      </div>
    );

    console.log(toDo);
    return (
      <div className="row justify-content-center pb-3 custom-task">
        <div className="col-sm-12">
          <div className="row">
            <div className="col-8 col-sm-9 text-left">{descriptionElement}</div>
            <div className="col-4 col-sm-3 pt-1">
              <DeleteButton idNo={id} deleteTaskFunction={deleteTaskFunction} />
              <DoneButton idNo={id} doneTaskFunction={doneTaskFunction} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TaskItem.propTypes = {
  toDo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  deleteTaskFunction: PropTypes.func.isRequired,
  doneTaskFunction: PropTypes.func.isRequired,
};

export default TaskItem;
