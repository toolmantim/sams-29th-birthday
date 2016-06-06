import React from 'react';
import classnames from 'classnames';

import './explosion-of-sams.css';

class ExplosionOfSams extends React.Component {
  static propTypes = {
    exploding: React.PropTypes.bool.isRequired
  };

  render() {
    return (
      <div className={classnames("ExplosionOfSams", {
        "ExplosionOfSams--exploding": this.props.exploding,
        "ExplosionOfSams--not-exploding": !this.props.exploding
      })}>
        {this._littleSam('left', 1)}
        {this._littleSam('left', 2)}
        {this._littleSam('left', 3)}
        {this._littleSam('left', 4)}
        {this._littleSam('left', 5)}
        {this._littleSam('left', 6)}
        {this._littleSam('right', 1)}
        {this._littleSam('right', 2)}
        {this._littleSam('right', 3)}
        {this._littleSam('right', 4)}
        {this._littleSam('right', 5)}
        {this._littleSam('right', 6)}
      </div>
    )
  }

  _littleSam(direction, i) {
    return (
      <div className={`ExplosionOfSams__little-sam ExplosionOfSams__little-sam--${direction}`} data-davros-king-of-integers={i}>
        <div className="ExplosionOfSams__little-sam__inner">
          <div className="ExplosionOfSams__little-sam__inner__inner">
            <div className="ExplosionOfSams__little-sam__sams_face">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExplosionOfSams;
