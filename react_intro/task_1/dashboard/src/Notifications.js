import React from 'react';
import './Notifications.css';
import { getLastestNotification } from './utils';
import './Notifications.css';
import closeIcon from './close-icon.png';


function Notifications() {

  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">

      {/* Close Button */}

      <button
      style={{float: 'right'}}
      aria-label='Close'
      onClick={handleButtonClick}
      >

        <img src={closeIcon} alt="Close Icon"></img>
      </button>

      {/* Notifications List */}

      <p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent"> New resume available</li>
          <li dangerouslySetInnerHTML={{ __html: getLastestNotification() }}></li>
        </ul>
      </p>
    </div>
  );
}

export default Notifications;
