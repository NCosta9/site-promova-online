import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="">
      <App />
    </div>
  </React.StrictMode>
);
AOS.init();
