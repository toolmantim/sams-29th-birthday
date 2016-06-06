import React from 'react';
import uuid from 'uuid';

import './party-sunnies.css';

export default function PartySunnies() {
  const gradientUuid = `party-sunnies-gradient-${uuid()}`;

  return (
    <div className="party-sunnies-deal-with-it">
      <svg viewBox="0 0 91 35">
        <defs>
          <linearGradient x1="49.9950618%" y1="0%" x2="50%" y2="100%" id={gradientUuid}>
            <stop stopColor="#3023AE" offset="0%"></stop>
            <stop stopColor="#53A0FE" offset="47.5247532%"></stop>
            <stop stopColor="#B4ED50" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <circle fill={`url(#${gradientUuid})`} cx="27" cy="18" r="17"></circle>
          <circle fill={`url(#${gradientUuid})`} cx="65" cy="17" r="17"></circle>
          <rect fill="#5EA9E8" x="43" y="16" width="6" height="4"></rect>
          <rect fill="#5EA9E8" transform="translate(6.500000, 14.000000) rotate(22.000000) translate(-6.500000, -14.000000) " x="1" y="12" width="11" height="4"></rect>
          <rect fill="#5EA9E8" transform="translate(84.500000, 15.000000) scale(-1, 1) rotate(22.000000) translate(-84.500000, -15.000000) " x="79" y="13" width="11" height="4"></rect>
        </g>
      </svg>
    </div>
  )
}