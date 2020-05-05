import React from 'react';

class AddRandom extends React.Component {
  render() {
    return (
      <button
        className="action-button"
        onClick={this.props.onHeartClick}
        data-title="Click to add one of our suggestions"
      >
        <i className="far fa-heart fa-lg"></i>
      </button>
    );
  }
}

export default AddRandom;
