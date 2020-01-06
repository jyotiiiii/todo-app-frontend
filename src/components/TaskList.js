import React from 'react';
import Taskitem from './TaskItem';
class Tasklist extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Taskitem />
        <Taskitem />
        <Taskitem />
        <Taskitem />
      </div>
    );
  }
}

export default Tasklist;
