/*
 * @Author: xie 1434687824@qq.com
 * @Date: 2023-11-02 15:07:25
 * @LastEditors: xie 1434687824@qq.com
 * @LastEditTime: 2023-11-02 17:38:53
 * @FilePath: \day_01_demo\src\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
/* 对ES6内置API兼容 */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
import { Fragment as _Fragment } from 'react/jsx-runtime';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import '@/index.less';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>
      Testday01
      <div className="pas">niaho</div>
    </div>
    <span style={{ color: 'red' }}>hahaha</span>
    {new Array(6).fill(null).map((_, index) => {
      return (
        <div key={index} className="nihao">
          a{index}
        </div>
      );
    })}
  </>
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
console.log(
  _jsxs(_Fragment, {
    children: [
      _jsxs('div', {
        children: [
          'Testday01',
          _jsx('div', {
            className: 'pas',
            children: 'niaho',
          }),
        ],
      }),
      _jsx('span', {
        style: {
          color: 'red',
        },
        children: 'hahaha',
      }),
    ],
  })
);
