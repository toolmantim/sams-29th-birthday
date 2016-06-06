import React from 'react';
import Color from 'color';
import classnames from 'classnames';
import uuid from 'uuid';

import ExplosionOfSams from './explosion-of-sams';

import './balloon.css';

class Balloon extends React.Component {
  static colors = [
    "#FFBA03",
    "#03BEFF",
    "#E366FD"
  ]

  constructor(props) {
    super(props);
    this.state = {
      color: this._randomColor(),
      popped: false,
      uuid: uuid()
    };
  }

  static propTypes = {
    left: React.PropTypes.number.isRequired
  };

  render() {
    return (
      <div className={classnames("Balloon",{"Balloon--popped": this.state.popped})} style={this._style()}>
        <div className="Balloon__inner">
          <svg viewBox="0 0 300 600" onClick={() => this._pop()}>
            <defs>
              <radialGradient cx="50%" cy="21.5625%" fx="50%" fy="21.5625%" r="44.7005208%" id={this._specularHighlightId()}>
                  <stop stopColor={Color(this.state.color).lighten(0.5).hexString()} offset="0%"></stop>
                  <stop stopColor={this.state.color} offset="100%"></stop>
              </radialGradient>
            </defs>
            <g transform="translate(50,100)">
              <g className="Balloon__shadow">
                <path d="M102,249 C82,229 2,169 2,109 C2,49 42,9 102,9 C162,9 202,49 202,109 C202,169 122,229 102,249 Z" opacity="0.4" fill="#000033"></path>
              </g>
              <g className="Balloon__object" fillRule="evenodd" fill="none">
                <path className="Balloon__string" d="M105.425866,227 C84.0586786,247 126.793054,267.382812 105.425866,287.191406 C84.0586782,307 124.445398,332.050781 105.425866,347 C86.4063344,361.949219 126.28125,386.398437 105.640625,406.699219" stroke="#000000" strokeWidth="5"></path>
                <path className="Balloon__rubber" d="M100,240 C80,220 3.67394019e-15,160 0,100 C3.6739404e-15,40 40,7.3478808e-15 100,0 C160,-7.34788037e-15 200,40 200,100 C200,160 120,220 100,240 Z" fill={`url(#${this._specularHighlightId()})`}></path>
              </g>
            </g>
          </svg>
          <ExplosionOfSams exploding={this.state.popped} />
        </div>
      </div>
    )
  }

  _specularHighlightId() {
    return `specular-highlight-${this.state.uuid}`
  }

  _pop() {
    this.setState({popped: true});
  }

  _style() {
    return {
      width: 100,
      left: `calc(${this.props.left * 100}%)`
    }
  }

  _randomColor() {
    return Balloon.colors[Math.floor(Math.random() * Balloon.colors.length)];
  }
}

export default Balloon;
