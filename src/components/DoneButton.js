import React from 'react';

class Donebutton extends React.Component {
  doneClicked = () => {
    this.props.doneTaskFunction(this.props.idNo);
  };

  render() {
    return (
      <a
        href="#"
        className="action-button"
        role="button"
        onClick={this.doneClicked}
      >
        <i className="fas fa-check fa-lg"></i>
      </a>
    );
  }
}

export default Donebutton;
