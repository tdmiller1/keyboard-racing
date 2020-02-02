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

describe('Race component backspace function', () => {
  it('should do nothing if there is no correct or wrong input', () => {
    const wrapper = shallow(<Race />);
    const instance = wrapper.instance();

    wrapper.setState({ wrongText: '', correctText: '', todoText: 'Text!' });
    instance.backspace();

    expect(wrapper.state('wrongText')).toEqual('');
    expect(wrapper.state('correctText')).toEqual('');
    expect(wrapper.state('todoText')).toEqual('Text!');
  });

  it('should decrement wrongText length if there is wrong input but no correct input', () => {
    const wrapper = shallow(<Race />);
    const instance = wrapper.instance();

    wrapper.setState({ wrongText: 'Text', correctText: '', todoText: '!' });
    instance.backspace();

    expect(wrapper.state('wrongText')).toEqual('Tex');
    expect(wrapper.state('correctText')).toEqual('');
    expect(wrapper.state('todoText')).toEqual('t!');
  });

  it('should decrement wrongText length if there is wrong input and correct input', () => {
    const wrapper = shallow(<Race />);
    const instance = wrapper.instance();

    wrapper.setState({ wrongText: 'ex', correctText: 'T', todoText: 't!' });
    instance.backspace();

    expect(wrapper.state('wrongText')).toEqual('e');
    expect(wrapper.state('correctText')).toEqual('T');
    expect(wrapper.state('todoText')).toEqual('xt!');
  });

  it('should decrement correctText length if there is correct input but no wrong input', () => {
    const wrapper = shallow(<Race />);
    const instance = wrapper.instance();

    wrapper.setState({ wrongText: '', correctText: 'Te', todoText: 'xt!' });
    instance.backspace();

    expect(wrapper.state('wrongText')).toEqual('');
    expect(wrapper.state('correctText')).toEqual('T');
    expect(wrapper.state('todoText')).toEqual('ext!');
  });
});