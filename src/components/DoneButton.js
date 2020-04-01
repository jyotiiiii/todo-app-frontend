import React from 'react';

class Donebutton extends React.Component {
  doneClicked = () => {
    this.props.doneTaskFunction(this.props.idNo);
  };

  render() {
    return (
      <button className="action-button" onClick={this.doneClicked}>
        <i className="fas fa-check fa-lg"></i>
      </button>
    );
  }
}

export default Donebutton;
