import React from 'react';

import './party-banner.css';

class PartyBanner extends React.Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="PartyBanner">
        {this.props.text.split('').map(function (char, i) {
          return (
            <span key={i} style={{animationDelay: `${60 * i}ms`}}>
              {char == ' ' ? ' ' : char}
            </span>
          )
        })}
      </div>
    )
  }
}

export default PartyBanner;
