import React from 'react';

class MenuItem extends React.Component {
  render() {
    return (
      <li className="nav-item ml-auto">
        <span className="nav-link" >
          {this.props.menuDescription}{' '}
          <span className="sr-only">(current)</span>
        </span>
      </li>
    );
  }
}

export default MenuItem;
