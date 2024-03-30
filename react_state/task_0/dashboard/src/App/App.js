// App.js
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications'; 
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {
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
      displayDrawer: false, // State to handle display of notifications
    };
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  render() {
    const { isLoggedIn } = this.props;
    const { displayDrawer } = this.state; // Retrieve displayDrawer from state
    return (
      <>
        <Notifications 
          listNotifications={this.state.listNotifications} 
          displayDrawer={displayDrawer} // Pass displayDrawer to Notifications
          handleDisplayDrawer={this.handleDisplayDrawer} 
          handleHideDrawer={this.handleHideDrawer} 
        />
        <div className="App">
          <Header />
          <div className="App-body">
            {isLoggedIn ? <CourseList listCourses={this.state.listCourses} /> : <Login />}
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </>
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


