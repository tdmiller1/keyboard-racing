import React from 'react';
import { shallow } from 'enzyme';
import Race from './Race';

describe('Race component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Race />);
    const instance = wrapper.instance();

    expect(instance).toBeTruthy();
  });
});