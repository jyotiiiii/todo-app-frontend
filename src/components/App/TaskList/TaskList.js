import React from 'react';
import TaskItem from './TaskItem/TaskItem';

class TaskList extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.listOfTasks.map((item) => (
          <TaskItem
            key={item.id}
            toDo={item}
            deleteTaskFunction={this.props.deleteTaskFunction}
            doneTaskFunction={this.props.doneTaskFunction}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
