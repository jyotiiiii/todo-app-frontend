import React from 'react';

class Score extends React.Component {
  render() {
    return (
      <a className="navbar-brand score" href="#">
        <div id="score-dot">
          <h6>{this.props.currentScore}</h6>
        </div>
      </a>
    );
  }
}

export default Score;
