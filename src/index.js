import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SearchProvider } from './Context/SearchContext';
import ContentProvider from './Context/ContentContext';
import './App.css'



ReactDOM.render(
  <StrictMode>
    <SearchProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </SearchProvider>
  </StrictMode>,
  document.getElementById('root')
);