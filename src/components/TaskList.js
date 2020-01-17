import React from 'react';
import Taskitem from './TaskItem';
class Tasklist extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {this.props.listOfTasks.map(item => (
          <Taskitem toDo={item} />
        ))}
      </div>
    );
  }
}

export default Tasklist;
