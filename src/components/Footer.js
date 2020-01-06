import React from 'react';
import Socialicon from './SocialIcon';
import Copyright from './Copyright';
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <Socialicon />
        <Copyright />
      </footer>
    );
  }
}

export default Footer;
