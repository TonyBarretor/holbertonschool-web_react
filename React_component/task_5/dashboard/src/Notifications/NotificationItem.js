import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.type !== nextProps.type ||
      this.props.html.__html !== nextProps.html.__html ||
      this.props.value !== nextProps.value ||
      this.props.markAsRead !== nextProps.markAsRead ||
      this.props.id !== nextProps.id
    );
  }

  render() {
    const { type, html, value, markAsRead, id } = this.props;
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {} 
};

export default NotificationItem;
