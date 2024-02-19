import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './utils/auth/auth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement

);
root.render(
  <AuthProvider>

  <BrowserRouter>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
