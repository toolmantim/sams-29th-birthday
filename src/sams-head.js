import React from 'react';

import PartyHat from './party-hat';
import PartyBowTie from './party-bow-tie';
import PartySunnies from './party-sunnies';
import PartyGooglyEyes from './party-googly-eyes';
import PartyParrot from './party-parrot';
import PeruvianPartyHat from './peruvian-party-hat';

import './sams-head.css';

class SamsHead extends React.Component {
  static propTypes = {
    left: React.PropTypes.number.isRequired,
    top: React.PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      rotation: Math.random(),
      partyProp: this._randomPartyProp()
    };
  }

  render() {
    return (
      <div className="SamsHead__outer">
        <div className="SamsHead" style={this._style()}>
          {this.state.partyProp}
        </div>
      </div>
    )
  }

  _style() {
    return {
      left: `calc(${this.props.left * 100}% - 25px)`,
      top: `calc(${this.props.top * 100}% - 25px)`
    }
  }

  _randomPartyProp() {
    const random = Math.random();

    if (random < 0.15) {
      return this._partyHat()
    } else if (random < 0.3) {
      return this._partyBowTie()
    } else if (random < 0.45) {
      return this._partySunnies()
    } else if (random < 0.6) {
      return this._partyGooglyEyes()
    } else if (random < 0.75) {
      return this._partyParrot()
    } else if (random < 0.9) {
      return this._peruvianPartyHat()
    }
  }

  _partyHat() {
    return (
      <div style={{position:'absolute', top:-35, left:26, width:40}}>
        <PartyHat/>
      </div>
    )
  }

  _partyBowTie() {
    return (
      <div style={{position:'absolute', top:80, left:35, width:40}}>
        <PartyBowTie/>
      </div>
    )
  }

  _partySunnies() {
    return (
      <div style={{position:'absolute', top:37, left:25, width:47}}>
        <PartySunnies/>
      </div>
    )
  }

  _partyGooglyEyes() {
    return (
      <div style={{position:'absolute', top:37, left:25, width:47}}>
        <PartyGooglyEyes/>
      </div>
    )
  }

  _partyParrot() {
    return (
      <div style={{position:'absolute', top:61, left:6, width: 47}}>
        <PartyParrot/>
      </div>
    )
  }

  _peruvianPartyHat() {
    return (
      <div style={{position:'absolute', top:-5, left:17, width: 64}}>
        <PeruvianPartyHat/>
      </div>
    )
  }}

export default SamsHead;
