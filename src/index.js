import React from 'react';
import ReactDOM from 'react-dom/client';
import Calc from './calc';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calc/>
  </React.StrictMode>
);
reportWebVitals();
