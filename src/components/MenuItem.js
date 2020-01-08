import React from 'react';

class Menuitem extends React.Component {
  render() {
    return (
      <li className="nav-item ml-auto">
        <a className="nav-link" href="#">
          {this.props.menuDescription}{' '}
          <span className="sr-only">(current)</span>
        </a>
      </li>
    );
  }
}

export default Menuitem;

{
  /* <li className="nav-item  ml-auto">
              <a className="nav-link" href="#">
                Kindness
              </a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link " href="#">
                How it works
              </a>
            </li>  */
}
