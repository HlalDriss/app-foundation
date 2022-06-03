import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import ProfileProvider from 'config/themes/ProfileProvider';
import generateClassName from 'config/themes/generateClassName';
ReactDOM.render(
  <React.StrictMode>
    {/* <ProfileProvider generateClassName={generateClassName}> */}
    <App />
    {/* </ProfileProvider> */}
    
  </React.StrictMode>,
  document.getElementById('root'),
);
