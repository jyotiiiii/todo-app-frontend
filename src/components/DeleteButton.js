import React from 'react';

class Deletebutton extends React.Component {
  deleteClicked = () => {
    alert(`Are you sure you want to delete task? ${this.props.idNo}`);
  };

  render() {
    return (
      <a className="action-button" role="button" onClick={this.deleteClicked}>
        <i className="fas fa-trash-alt fa-lg"></i>
      </a>
    );
  }
}

export default Deletebutton;
