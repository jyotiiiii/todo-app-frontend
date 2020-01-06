import React from 'react';

class Copyright extends React.Component {
  render() {
    return (
      <p className="mb-3 text-muted copyright">
        Copyright © {new Date().getFullYear()} Jyoti Sharma
      </p>
    );
  }
}

export default Copyright;
