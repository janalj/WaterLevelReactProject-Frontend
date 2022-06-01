import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import StaticInfo from './Static'
import MonthPicker from './MonthPicker';

ReactDOM.render(
  <React.StrictMode>
    <StaticInfo />
  </React.StrictMode>,
  document.getElementById('static')
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

