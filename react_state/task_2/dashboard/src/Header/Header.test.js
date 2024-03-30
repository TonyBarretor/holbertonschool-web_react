import React from 'react';
import Header from '../Header/Header';
import { shallow } from 'enzyme';
import AppContext from '../App/AppContext'; // Import the AppContext

describe('Header component test cases', () => {
  it('renders the Header component without crashing', () => {
    shallow(<Header />);
  });

  it('the component renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('does not render logoutSection with default context value', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('renders logoutSection with user defined context value', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('calls logOut function when logout link is clicked', () => {
    const logOutSpy = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('span').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});
