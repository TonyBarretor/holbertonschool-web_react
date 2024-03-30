import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import AppContext from './AppContext';

// Define default user object
export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
      displayDrawer: false, // Default state for displayDrawer
      user: defaultUser, // Set default user object
    };
  }

  // Function to set displayDrawer to true
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  // Function to set displayDrawer to false
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  // Log in function
  logIn = (email, password) => {
    this.setState(prevState => ({
      user: {
        ...prevState.user,
        email,
        password,
        isLoggedIn: true,
      }
    }));
  };

  // Log out function
  logOut = () => {
    this.setState({ user: defaultUser }); // Reset user object to defaultUser
  };

  render() {
    const { user, displayDrawer, listNotifications, listCourses } = this.state;
    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className="App">
          <Header />
          <div className="App-body">
            {user.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login logIn={this.logIn} />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
