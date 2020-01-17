import React from 'react';

class Addtask extends React.Component {
  showForm = () => {
    alert('You want to add a task');
  };

  render() {
    return (
      <a
        className="action-button"
        href="#"
        role="button"
        onClick={this.showForm}
      >
        <i className="fas fa-plus fa-lg"></i>
      </a>
    );
  }
}

export default Addtask;
