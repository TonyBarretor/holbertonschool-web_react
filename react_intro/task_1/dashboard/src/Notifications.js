import React from 'react';
import './Notifications.css';

function Notifications() {

  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
    </div>
  );
}

export default Notifications;
