import React from 'react';

class Addrandom extends React.Component {
  render() {
    return (
      <a
        href="#"
        className="action-button"
        role="button"
        onClick={this.props.onHeartClick}
        data-title="Click to add one of our suggestions"
      >
        <i className="far fa-heart fa-lg"></i>
      </a>
    );
  }
}

export default Addrandom;
