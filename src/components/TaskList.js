import React from 'react';
import Taskitem from './TaskItem';
class Tasklist extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.listOfTasks.map(item => (
          <Taskitem
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

export default Tasklist;
