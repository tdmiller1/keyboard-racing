import React from 'react';
import { shallow } from 'enzyme';
import Race from './Race';

let wrapper;
let instance;

beforeEach(() => {
  wrapper = shallow(<Race />);
  instance = wrapper.instance();
});

describe('Race component', () => {
  it('renders without crashing', () => {
    expect(instance).toBeTruthy();
  });
});

describe('Race component backspace function', () => {
  it('should do nothing if there is no correct or wrong input', () => {
    wrapper.setState({ wrongText: '', correctText: '', todoText: 'Text!' });
    instance.backspace();

    expect(wrapper.state('wrongText')).toEqual('');
    expect(wrapper.state('correctText')).toEqual('');
    expect(wrapper.state('todoText')).toEqual('Text!');
  });

  it('should decrement wrongText length if there is wrong input but no correct input', () => {
    wrapper.setState({ wrongText: 'Text', correctText: '', todoText: '!' });
    instance.backspace();

    expect(wrapper.state('wrongText')).toEqual('Tex');
    expect(wrapper.state('correctText')).toEqual('');
    expect(wrapper.state('todoText')).toEqual('t!');
  });

  it('should decrement wrongText length if there is wrong input and correct input', () => {
    wrapper.setState({ wrongText: 'ex', correctText: 'T', todoText: 't!' });
    instance.backspace();

    expect(wrapper.state('wrongText')).toEqual('e');
    expect(wrapper.state('correctText')).toEqual('T');
    expect(wrapper.state('todoText')).toEqual('xt!');
  });

  it('should decrement correctText length if there is correct input but no wrong input', () => {
    wrapper.setState({ wrongText: '', correctText: 'Te', todoText: 'xt!' });
    instance.backspace();

    expect(wrapper.state('wrongText')).toEqual('');
    expect(wrapper.state('correctText')).toEqual('T');
    expect(wrapper.state('todoText')).toEqual('ext!');
  });
});

describe('Race component correctInput function', () => {
  it('should do nothing if todoText is empty and wrongText is empty', () => {
    wrapper.setState({ wrongText: '', correctText: 'Text!', todoText: '' });
    instance.correctInput('A');

    expect(wrapper.state('wrongText')).toEqual('');
    expect(wrapper.state('correctText')).toEqual('Text!');
    expect(wrapper.state('todoText')).toEqual('');
  });

  it('should append to correctText if todoText is not empty', () => {
    wrapper.setState({ wrongText: '', correctText: 'T', todoText: 'ext!' });
    instance.correctInput('e');

    expect(wrapper.state('wrongText')).toEqual('');
    expect(wrapper.state('correctText')).toEqual('Te');
    expect(wrapper.state('todoText')).toEqual('xt!');
  });

  it('should do nothing if wrongText is not empty', () => {
    wrapper.setState({ wrongText: 'ex', correctText: 'T', todoText: 't!' });
    instance.correctInput('t');

    expect(wrapper.state('wrongText')).toEqual('ex');
    expect(wrapper.state('correctText')).toEqual('T');
    expect(wrapper.state('todoText')).toEqual('t!');
  });

  it('should append to correctText if todoText is not empty and correctText is empty ', () => {
    wrapper.setState({ wrongText: '', correctText: '', todoText: 'Text!' });
    instance.correctInput('T');

    expect(wrapper.state('wrongText')).toEqual('');
    expect(wrapper.state('correctText')).toEqual('T');
    expect(wrapper.state('todoText')).toEqual('ext!');
  });
});

describe('Race component incorrectInput function', () => {
  it('should append to wrongText if wrongText is empty and todoText is not empty and correctText is empty', () => {
    wrapper.setState({ wrongText: '', correctText: '', todoText: 'Text!' });
    instance.incorrectInput();

    expect(wrapper.state('wrongText')).toEqual('T');
    expect(wrapper.state('correctText')).toEqual('');
    expect(wrapper.state('todoText')).toEqual('ext!');
  });

  it('should append to wrongText if wrongText is empty and todoText is not empty and correctText is not empty', () => {
    wrapper.setState({ wrongText: '', correctText: 'Te', todoText: 'xt!' });
    instance.incorrectInput();

    expect(wrapper.state('wrongText')).toEqual('x');
    expect(wrapper.state('correctText')).toEqual('Te');
    expect(wrapper.state('todoText')).toEqual('t!');
  });

  it('should append to wrongText if wrongText is not empty and todoText is not empty and correctText is not empty', () => {
    wrapper.setState({ wrongText: 'x', correctText: 'Te', todoText: 't!' });
    instance.incorrectInput();

    expect(wrapper.state('wrongText')).toEqual('xt');
    expect(wrapper.state('correctText')).toEqual('Te');
    expect(wrapper.state('todoText')).toEqual('!');
  });

  it('should do nothing if todoText is empty and wrongText is empty', () => {
    wrapper.setState({ wrongText: '', correctText: 'Text!', todoText: '' });
    instance.incorrectInput();

    expect(wrapper.state('wrongText')).toEqual('');
    expect(wrapper.state('correctText')).toEqual('Text!');
    expect(wrapper.state('todoText')).toEqual('');
  });

  it('should do nothing if todoText is empty and wrongText is not empty', () => {
    wrapper.setState({ wrongText: 't!', correctText: 'Tex', todoText: '' });
    instance.incorrectInput();

    expect(wrapper.state('wrongText')).toEqual('t!');
    expect(wrapper.state('correctText')).toEqual('Tex');
    expect(wrapper.state('todoText')).toEqual('');
  });
});