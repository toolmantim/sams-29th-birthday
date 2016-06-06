import React from 'react';
import uuid from 'uuid';

import './party-hat.css';

export default function PartyHat() {
  const gradientUuid = `party-hat-gradient-${uuid()}`;

  return (
    <svg viewBox="0 0 67 99" className="party-hat-bounce">
      <defs>
        <linearGradient x1="15.8981418%" y1="41.6237113%" x2="83.334972%" y2="62.5966495%" id={gradientUuid}>
          <stop stopColor="#6859EF" offset="0%"></stop>
          <stop stopColor="#E04CF9" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M0,85.6828544 L34.5630807,0 L66.71875,86.1945114 C66.71875,86.1945114 50.6999527,98.806607 32.7985203,98.806607 C14.8970879,98.806607 0,85.6828544 0,85.6828544 Z" fill={`url(#${gradientUuid})`}></path>
      </g>
    </svg>
  )
}