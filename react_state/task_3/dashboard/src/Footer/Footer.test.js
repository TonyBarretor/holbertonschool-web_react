import React from 'react';
import Footer from '../Footer/Footer';
import { shallow } from 'enzyme';

describe('Footer component test cases', () => {
  it('renders the Footer component without crashing', () => {
    shallow(<Footer />);
  });

  it('the component renders p tag and contains the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toContain('Copyright');
  });

  it('does not display link when user is logged out', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('a')).toHaveLength(0); // Verify that link is not displayed
  });

  it('displays link when user is logged in', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}> {/* Provide logged in context */}
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).toHaveLength(1); // Verify that link is displayed
  });
});
