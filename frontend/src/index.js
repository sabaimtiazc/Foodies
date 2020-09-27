import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css'
import App from './App';
import { UserProvider } from './context/UserContext';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


