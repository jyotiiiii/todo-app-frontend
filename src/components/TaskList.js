import React from 'react';
import Taskitem from './TaskItem';
class Tasklist extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Taskitem taskDescription="Paint a self-portrait" />
        <Taskitem taskDescription="Go for a leisurely walk" />
        <Taskitem taskDescription="Pick some flowers" />
        <Taskitem taskDescription="Go swimming in the sea" />
      </div>
    );
  }
}

export default Tasklist;
