import React from 'react';
import Login from '../Login/Login';
import { shallow } from 'enzyme';

describe('Login component test cases', () => {
  it('renders the Login component without crashing', () => {
    shallow(<Login />);
  });

  it('the component renders input and label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });

  it('renders the submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('enables the submit button after changing input values', () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find('input[type="email"]');
    const passwordInput = wrapper.find('input[type="password"]');

    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password' } });

    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });
});
