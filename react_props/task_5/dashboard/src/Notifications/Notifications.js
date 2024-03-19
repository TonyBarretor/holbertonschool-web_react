import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';

function Notifications({ listNotifications = [] }) {
  return (
    <div className="Notifications">
      <div className="menuItem">Your notifications</div>
      {listNotifications.length === 0 ? (
        <p>No new notification for now</p>
      ) : (
        listNotifications.map(notification => (
          <NotificationItem key={notification.id} notification={notification} />
        ))
      )}
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
