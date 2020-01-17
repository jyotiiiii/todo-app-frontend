import React from 'react';

class Addrandom extends React.Component {
  generateRandom = () => {
    alert('You want us to give you a task');
  };

  render() {
    return (
      <a
        className="action-button"
        href="#"
        role="button"
        onClick={this.generateRandom}
      >
        <i className="far fa-heart fa-lg"></i>
      </a>
    );
  }
}

export default Addrandom;
