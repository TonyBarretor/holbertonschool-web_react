import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe('Notifications component test cases', () => {
  it('renders Notifications without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three NotificationItem components', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Test notification 1' },
      { id: 2, type: 'urgent', value: 'Test notification 2' },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications}/>);
    expect(wrapper.find('NotificationItem')).toHaveLength(notifications.length);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const notificationText = 'Here is the list of notifications';
    expect(wrapper.find('p').text()).toEqual(notificationText);
  });

  it('renders div.menuItem when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
  });

  it('should not render div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  });

  it('renders div.menuItem when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
  });

  it('renders div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });

  it('renders correctly with an empty list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    expect(wrapper.find('.menuItem')).toHaveLength(1); // Menu item should be displayed
    expect(wrapper.find('td').text()).toContain('No new notification for now'); // Empty message displayed
  });

  it('renders the correct number of NotificationItem components', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Test notification 1' },
      { id: 2, type: 'urgent', value: 'Test notification 2' },
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(notifications.length); // Matches notification count
  });

  it('does not display the "Here is the list of notifications" message when list is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.text()).not.toContain('Here is the list of notifications'); // Empty message displayed
  });

  it('calls handleDisplayDrawer when clicking on menu item', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when clicking on close button', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
