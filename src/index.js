import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import FixedContainer from  './Appbar';
import ClippedDrawer from './Drawer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClippedDrawer />
  </React.StrictMode>
);

reportWebVitals();
