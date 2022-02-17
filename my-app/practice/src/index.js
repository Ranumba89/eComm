import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navertin from './NavBar-component/navertin';
import Announcments from './ecomerce/components/announcments';
import Slider from './ecomerce/components/slider';

ReactDOM.render(
  <React.StrictMode>
    <Announcments/>
    <Navertin/>
    <App/>
    <Slider/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
