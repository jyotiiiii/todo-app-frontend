import React from 'react';

class Score extends React.Component {
  render() {
    return (
      <span className="navbar-brand score">
        <div id="score-dot">
          <h6>{this.props.score}</h6>
        </div>
      </span>
    );
  }
}

export default Score;
