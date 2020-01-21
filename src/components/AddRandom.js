import React from 'react';

class Addrandom extends React.Component {
  generateRandom = () => {
    alert('You want us to give you a task');
  };

  render() {
    return (
      <a
        href="#"
        className="action-button"
        role="button"
        onClick={this.generateRandom}
        data-title="Click to add one of our suggestions"
      >
        <i className="far fa-heart fa-lg"></i>
      </a>
    );
  }
}

export default Addrandom;
