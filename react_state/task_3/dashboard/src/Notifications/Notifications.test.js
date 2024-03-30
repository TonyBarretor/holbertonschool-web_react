import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Notifications component test cases', () => {
  let listNotifications;

  beforeEach(() => {
    listNotifications = [
      { id: 1, type: 'default', value: 'Test notification 1' },
      { id: 2, type: 'urgent', value: 'Test notification 2' },
    ];
  });

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders the correct number of NotificationItem components', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} />
    );
    expect(wrapper.find('NotificationItem')).toHaveLength(listNotifications.length);
  });

  it('renders the correct message when list of notifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.text()).toContain('No new notification for now');
  });

  it('calls markNotificationAsRead with the correct ID when a notification is marked as read', () => {
    const markNotificationAsReadMock = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={listNotifications} markNotificationAsRead={markNotificationAsReadMock} />
    );

    // Simulate clicking on the first notification
    wrapper.find('NotificationItem').first().simulate('markAsRead', listNotifications[0].id);

    expect(markNotificationAsReadMock).toHaveBeenCalledWith(listNotifications[0].id);
  });

  it('does not display the "Here is the list of notifications" message when list is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
  });
});
