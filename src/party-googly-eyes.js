import React from 'react';

import './party-googly-eyes.css';

export default function GooglyEyes() {
  return (
    <svg viewBox="0 0 91 37">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(27,18)">
          <circle stroke="#000000" strokeWidth="2" fill="#FFFFFF" r="17"></circle>
          <circle fill="#000000" cx="8" r="5" className="party-googly-eyes-rotate"></circle>
        </g>
        <g transform="translate(65,18)">
          <circle stroke="#000000" strokeWidth="2" fill="#FFFFFF" r="17"></circle>
          <circle fill="#000000" cy="8" r="5" className="party-googly-eyes-rotate"></circle>
        </g>
        <rect fill="#000000" x="43" y="16" width="6" height="4"></rect>
        <rect fill="#000000" transform="translate(6.500000, 14.000000) rotate(22.000000) translate(-6.500000, -14.000000) " x="1" y="12" width="11" height="4"></rect>
        <rect fill="#000000" transform="translate(85.794074, 15.024860) scale(-1, 1) rotate(22.000000) translate(-85.794074, -15.024860) " x="80.9579098" y="13.2662549" width="9.67232735" height="3.51720994"></rect>
      </g>
    </svg>
  )
}