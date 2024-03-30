import React, { useState } from 'react';
import '../Login/Login.css';

const Login = ({ logIn }) => { // Receive logIn function as a prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLabelClick = (event) => {
    const inputId = event.target.htmlFor;
    document.getElementById(inputId).focus();
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(email, password); // Call logIn function with email and password
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setEnableSubmit(event.target.value !== '' && password !== '');
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setEnableSubmit(email !== '' && event.target.value !== '');
  };

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <p>Login to access the full dashboard</p>
        <div className="Login-input">
          <label htmlFor="email" onClick={handleLabelClick}>
            Email:
          </label>
          <input type="email" id="email" value={email} onChange={handleChangeEmail} />
          <label htmlFor="password" onClick={handleLabelClick}>
            Password:
          </label>
          <input type="password" id="password" value={password} onChange={handleChangePassword} />
          <input type="submit" value="OK" disabled={!enableSubmit} />
        </div>
      </form>
    </>
  );
};

export default Login;
