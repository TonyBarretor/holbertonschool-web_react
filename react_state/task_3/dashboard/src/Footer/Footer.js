import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext'; // Import the AppContext
import '../Footer/Footer.css';

const Footer = () => {
  const { user } = useContext(AppContext); // Get the user object from the context

  return (
    <footer>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && <p><a href="/contact">Contact us</a></p>} {/* Display the link if user is logged in */}
    </footer>
  );
};

export default Footer;
