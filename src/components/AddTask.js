import React from 'react';

class Addtask extends React.Component {
  render() {
    return (
      <a
        className="action-button"
        href="#"
        data-title="Click to add your own task"
        role="button"
        onClick={this.props.onClick}
      >
        <i className="fas fa-plus fa-lg"></i>
      </a>
    );
  }
}

export default Addtask;
