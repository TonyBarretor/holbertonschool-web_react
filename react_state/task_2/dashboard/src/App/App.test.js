import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe('App component', () => {
  it('renders the App without crashing', () => {
    shallow(<App />)
  });

  it('renders the Notification component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('renders the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('renders the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('renders the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('should not render CourseList when isLoggedIn state is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList').exists()).toBe(false)
  });

  it('should render CourseList and not Login when isLoggedIn state is true', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ isLoggedIn: true });
    expect(wrapper.find('Login').exists()).toBe(false);
    expect(wrapper.find('CourseList').exists()).toBe(true);
  });

  it('has default state displayDrawer set to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('updates state to true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('updates state to false after calling handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer(); // Set to true first
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('updates state correctly after calling logIn function', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state('isLoggedIn')).toBe(true);
  });

  it('updates state correctly after calling logOut function', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ isLoggedIn: true });
    wrapper.instance().logOut();
    expect(wrapper.state('isLoggedIn')).toBe(false);
  });
});
