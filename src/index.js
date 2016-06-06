import React from 'react';
import uuid from 'uuid';

import './index.css';
import Balloon from './balloon';
import SamsHead from './sams-head';
import PartyBanner from './party-banner';

class BirthdayParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heads: [],
      balloons: []
    };
  }

  componentDidMount() {
    this._addBalloon(this._newBalloon());
    setInterval(() => { this._addHead(this._newHead()) }, 1000);
    setInterval(() => { this._addBalloon(this._newBalloon()) }, 3000);
  }

  render() {
    return (
      <div>
        <PartyBanner text="Happy 29th Birthday Sam!" />
        {this.state.balloons.map(function(balloon) {
          return <Balloon key={balloon.id} top={balloon.top} left={balloon.left} />
        })}
        {this.state.heads.map(function(head) {
          return <SamsHead key={head.id} top={head.top} left={head.left} />
        })}
      </div>
    )
  }

  _newHead() {
    return {
      id: uuid(),
      top: Math.random(),
      left: Math.random()
    }
  }

  _newBalloon() {
    return {
      id: uuid(),
      top: 0,
      left: Math.random()
    }
  }

  _addHead(head) {
    this.setState({ heads: this.state.heads.concat(head) });

    // Remove the head after n seconds
    setTimeout(() => {
      this.setState({ heads: this.state.heads.filter((h) => { return h.id != head.id }) })
    }, 15000)
  }

  _addBalloon(balloon) {
    this.setState({ balloons: this.state.balloons.concat(balloon) });

    // Remove the head after n seconds
    setTimeout(() => {
      this.setState({ balloons: this.state.balloons.filter((b) => { return b.id != balloon.id }) })
    }, 30000)
  }
}

export default BirthdayParty;
