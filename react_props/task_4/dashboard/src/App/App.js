import React from 'react';
import logo from './holbertonLogo.jpg';
import { getFullYear, getFooterCopy } from '../utils';
import Notifications from './Notifications'; // Import Notifications component
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './App.css';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        {/* Header */}
        <Header />
        
        {/* Body */}
        <div className="App-body">
          <Login />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
