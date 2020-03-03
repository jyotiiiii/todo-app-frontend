import React from 'react';

class Logo extends React.Component {
  render() {
    console.log({ score: this.props.score });
    let calcOffset = 100 - this.props.score;
    return (
      <svg height="80" width="100" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="half" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="transparent" />
            <stop offset={calcOffset + '%'} stopColor="transparent" />
            <stop offset={calcOffset + '%'} stopColor="#fc4d9f" />
            <stop offset="100%" stopColor="#fc4d9f" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half)"
          stroke="black"
          strokeWidth="1.5"
          d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
        />
      </svg>
    );
  }
}

export default Logo;
