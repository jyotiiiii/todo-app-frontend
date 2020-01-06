import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <i className="fab fa-twitter spaced-icon"></i>
        <i className="fab fa-facebook-f spaced-icon"></i>
        <i className="fab fa-instagram spaced-icon"></i>
        <i className="fas fa-envelope spaced-icon"></i>
        <p className="mb-3 text-muted copyright">
          Copyright © {new Date().getFullYear()} Jyoti Sharma
        </p>
      </footer>
    );
  }
}

export default Footer;
