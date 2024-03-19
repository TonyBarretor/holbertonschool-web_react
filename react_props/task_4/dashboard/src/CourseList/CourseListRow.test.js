import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Header" isHeader />);
    expect(wrapper.exists()).toBe(true);
  });

  // Add more tests based on the requirements
});
