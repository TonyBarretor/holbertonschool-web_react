import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('should render correct html for the first NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotification = wrapper.find(NotificationItem).first();
    expect(firstNotification.prop('data-notification-type')).toEqual('default');
    expect(firstNotification.text()).toEqual('New course available');
  });
});


