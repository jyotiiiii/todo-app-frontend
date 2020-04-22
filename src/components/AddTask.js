import React from 'react';

class Addtask extends React.Component {
  render() {
    return (
      <span
        className="action-button"
        href="#"
        data-title="Click to add your own task"
        role="button"
        onClick={() => this.props.onAddTaskClick(this.props.taskCategory)}
      >
        <i className="fas fa-plus fa-lg"></i>
      </span>
    );
  }
}

export default Addtask;
