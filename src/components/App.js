import React from 'react';

function App() {
  return (
    <div>
      {/* Navigation Bar  */}
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

      {/* Header  */}
      <div className="jumbotron ">
        <div className="container text-center">
          <a className="" href="/index_bootstrap.html" target="_blank">
            <img className="kinda" src="./images/kinda.svg" alt="kinda-img" />
          </a>

          <img className="me" src="./images/heartlogo.svg" alt="my-heart-img" />

          {/* Add a Task Section  */}

          <div className="row">
            <div className="col">
              <a className="action-button" href="#" role="button">
                <i className="fas fa-plus fa-lg"></i>
              </a>
              <a className="action-button" href="#" role="button">
                <i className="far fa-heart fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pop Up Form (After add a task button is clicked)  */}
      <div className="container hidden-form">
        <div className="row">
          <div className="col-md-4 "></div>
          <div className="col-md-5 ">
            <form className="form-inline ">
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Enter a kinda thing to do"
                ></input>
              </div>
              <button type="submit" className="btn btn-info mb-2">
                Add Task
              </button>
            </form>
          </div>
          <div className="col-md-4 "></div>
        </div>
      </div>

      {/* Task Section  */}
      <div className="container-fluid">
        <div className="row justify-content-center pb-3">
          <div className="col-sm-9">
            <div className="row">
              <div className="col-8 col-sm-6">This is a task</div>
              <div className="col-4 col-sm-6">
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-trash-alt fa-lg"></i>
                </a>
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-check fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center pb-3">
          <div className="col-sm-9">
            <div className="row">
              <div className="col-8 col-sm-6">This is a task</div>
              <div className="col-4 col-sm-6">
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-trash-alt fa-lg"></i>
                </a>
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-check fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center pb-3">
          <div className="col-sm-9">
            <div className="row">
              <div className="col-8 col-sm-6">This is a task</div>
              <div className="col-4 col-sm-6">
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-trash-alt fa-lg"></i>
                </a>
                <a className="action-button" href="#" role="button">
                  <i className="fas fa-check fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}

      <footer className="footer" id="footer">
        <i className="fab fa-twitter spaced-icon"></i>
        <i className="fab fa-facebook-f spaced-icon"></i>
        <i className="fab fa-instagram spaced-icon"></i>
        <i className="fas fa-envelope spaced-icon"></i>
        <p className="mb-3 text-muted copyright">
          Copyright © {new Date().getFullYear()} Jyoti Sharma
        </p>
      </footer>
    </div>
  );
}

export default App;
