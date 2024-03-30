import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.handleNotificationsClick = this.handleNotificationsClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleNotificationsClick = () => {
    this.props.handleDisplayDrawer(); // Call handleDisplayDrawer when clicking on Your notifications
  }

  handleButtonClick = () => {
    this.props.handleHideDrawer(); // Call handleHideDrawer when clicking on the close button
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    const buttonStyle = {
      padding: '0',
      float: 'right',
      backgroundColor: 'white',
      border: 'none',
      cursor: 'pointer',
    };

    return (
      <div className="NotificationsContainer">
        <div className="menuItem" onClick={this.handleNotificationsClick}>Your notifications</div>
        {displayDrawer && (
          <div className="Notifications">
            <button
              aria-label="Close"
              style={buttonStyle}
              onClick={this.handleButtonClick}
            >
              <img src={closeIcon} alt="Close icon" width="16px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 && (
                <tr>
                  <td colSpan={2}>No new notification for now</td>
                </tr>
              )}
              {listNotifications.map((notification) => (
                <NotificationItem key={notification.id} {...notification} />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  listNotifications: PropTypes.arrayOf(NotificationItemShape).isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

export default Notifications;
