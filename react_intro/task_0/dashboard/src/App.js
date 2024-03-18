import React from 'react';
import logo from './holbertonLogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
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
