import React from 'react';
import { List, InputItem } from 'antd-mobile';

import logo from './logo.svg';
import './App.css';

function App() {

  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="text" onChange={handleChange}/> 
        <InputItem
            type={'number'}
            placeholder="start from right"
            clear
            onChange={(v) => { console.log('onChange', v); }}
            onBlur={(v) => { console.log('onBlur', v); }}
          >数字</InputItem>
      </header>
    </div>
  );
}

export default App;
