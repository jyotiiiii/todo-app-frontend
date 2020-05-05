import React from 'react';
import SocialIcon from './SocialIcon/SocialIcon';
import Copyright from './Copyright/Copyright';
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <SocialIcon />
        <Copyright />
      </footer>
    );
  }
}

export default Footer;
