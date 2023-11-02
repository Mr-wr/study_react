import React from 'react';
import ReactDOM from 'react-dom/client';
/* 对ES6内置API兼容 */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import '@/index.less';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // react的 strictmode严格模式
  // <React.StrictMode>
  // {/* <App /> */}
  <div>Testday01</div>
  // {/* </React.StrictMode> */}
);

fetch('/jian/subscriptions/recommended_collections')
  .then((response) => response.json())
  .then((value) => {
    console.log('简书：', value);
  });
fetch('/zhi/news/latest')
  .then((response) => response.json())
  .then((value) => {
    console.log('知乎', value);
  });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
