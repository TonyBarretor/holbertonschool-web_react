import React, { Component } from "react";
import hlogo from '../assets/holberton-logo.jpg';
import '../Header/Header.css';
import PropTypes from 'prop-types';
import AppContext from '../App/AppContext'; // Import the AppContext

class Header extends Component {
  static contextType = AppContext; // Assign AppContext to the contextType property

  render() {
    const { isLoggedIn, logOut, user } = this.context; // Access context values

    const handleLogout = () => {
      logOut(); // Call logOut function from context when logout link is clicked
    };

    return (
      <div className="App-header">
        <img src={hlogo} className="App-logo" alt="holberton logo" />
        <h1>School dashboard</h1>
        {isLoggedIn && ( // Display the logout section only if user is logged in
          <section id="logoutSection">
            Welcome {user.email} (<span onClick={handleLogout}>logout</span>)
          </section>
        )}
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
};

export default Header;
