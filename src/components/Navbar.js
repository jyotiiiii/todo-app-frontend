import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="#">
          <div id="score-dot">
            <h6>89</h6>
          </div>
        </a>

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

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* ml-auto (margin left auto className floats the items to the right)  */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active  ml-auto">
              <a className="nav-link" href="#">
                About <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item  ml-auto">
              <a className="nav-link" href="#">
                Kindness
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link " href="#">
                How it works
              </a>
            </li>
            <li className="nav-item ml-auto">
              <form className="form-inline my-2 my-md-0">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
