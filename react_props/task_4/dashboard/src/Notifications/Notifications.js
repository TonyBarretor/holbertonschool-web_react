import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: '5 Notifications received' }} />
      </ul>
    </div>
  );
}

export default Notifications;
