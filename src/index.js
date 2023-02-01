import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import FixedContainer from  './Appbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FixedContainer />
  </React.StrictMode>
);

reportWebVitals();
