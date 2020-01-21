import React from 'react';

class Deletebutton extends React.Component {
  deleteClicked = () => {
    this.props.deleteTaskFunction(this.props.idNo);
  };

  // alert(`Are you sure you want to delete task? ${this.props.idNo}`);

  render() {
    return (
      <a
        href="#"
        className="action-button"
        role="button"
        onClick={this.deleteClicked}
      >
        <i className="fas fa-trash-alt fa-lg"></i>
      </a>
    );
  }
}

export default Deletebutton;
