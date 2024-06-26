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

class Notifications extends React.PureComponent {
  handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  render() {
    const { displayDrawer, listNotifications, markNotificationAsRead } = this.props;

    const buttonStyle = {
      padding: '0',
      float: 'right',
      backgroundColor: 'white',
      border: 'none',
      cursor: 'pointer',
    };

    return (
      <div className="NotificationsContainer">
        <div className="menuItem">Your notifications</div>
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
                <NotificationItem
                  key={notification.id}
                  markAsRead={markNotificationAsRead}
                  {...notification}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markNotificationAsRead: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
