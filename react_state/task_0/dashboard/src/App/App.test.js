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
  })

  it('renders the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  })

  it('renders the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  })

  it('renders the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  })

  it('should not render CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false}/>);
    expect(wrapper.find('CourseList').exists()).toBe(false)
  })

  it('should render CourseList and not Login when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find('Login').exists()).toBe(false);
    expect(wrapper.find('CourseList').exists()).toBe(true);
  })

  // New test: Verify default state of displayDrawer is false
  it('default state for displayDrawer should be false', () => {
    const wrapper = shallow(<App />);
    const initialState = wrapper.state('displayDrawer');
    expect(initialState).toBe(false);
  });

  // New test: Verify state is updated to true after calling handleDisplayDrawer
  it('calling handleDisplayDrawer should update state to true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    const updatedState = wrapper.state('displayDrawer');
    expect(updatedState).toBe(true);
  });

  // New test: Verify state is updated to false after calling handleHideDrawer
  it('calling handleHideDrawer should update state to false', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer(); // Set to true first
    wrapper.instance().handleHideDrawer();
    const updatedState = wrapper.state('displayDrawer');
    expect(updatedState).toBe(false);
  });
});
