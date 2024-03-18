import React from 'react';
import logo from './holbertonLogo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
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

      </div>

      {/* Footer */}

      <div className='App-footer'>
        <p>Copyright 2020 - holberton School</p>
      </div>

    </div>
  );
}

export default App;
