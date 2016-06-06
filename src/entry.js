import React from 'react';
import ReactDOM from 'react-dom';

import BirthdayParty from './birthday-party';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div><BirthdayParty/></div>,
    document.getElementById('birthday-party')
  );
});
