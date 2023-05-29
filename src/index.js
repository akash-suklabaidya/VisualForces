import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SearchProvider } from './Context/SearchContext';

ReactDOM.render(
  <StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </StrictMode>
  , document.getElementById('root')
);
