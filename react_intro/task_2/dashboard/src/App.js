import React from 'react';
import logo from './holbertonLogo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() { // 2 tipos de componente, de clase y simple. este simple
  return (
    <div className="App">

      {/* Header */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>

      </header>

      {/* Body */}

      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <div className='form'>
          <label htmlFor='email'>
            <span>Email: </span>
            <input type='email' name='email' id='email'/>
          </label>

          <label htmlFor='password'>
            <span>Password: </span>
            <input type='password' name='password' id='password'/>
          </label>

          <button onClick={() => {}}>OK</button>

         
        </div>

      </div>

      {/* Footer */}

      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>

    </div>
  );
}

export default App;
