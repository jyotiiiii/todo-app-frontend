import React from 'react';
import PropTypes from 'prop-types';

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

Donebutton.propTypes = {
  doneTaskFunction: PropTypes.func.isRequired,
};

export default Donebutton;
