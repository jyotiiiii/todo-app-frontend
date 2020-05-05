import React from 'react';

class MenuSearch extends React.Component {
  render() {
    return (
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
    );
  }
}

export default MenuSearch;
