import React from 'react';

class Menubutton extends React.Component {
  render() {
    return (
      <button
        className="navbar-toggler navbutton nav-button"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="">
          <div className="toggle">
            <a className="" href="#"></a>
          </div>
          <div className="toggle">
            <a className="" href="#"></a>
          </div>
          <div className="toggle">
            <a className="" href="#"></a>
          </div>
        </div>
      </button>
    );
  }
}

export default Menubutton;
