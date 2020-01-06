import React from 'react';

class Header extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Header;
