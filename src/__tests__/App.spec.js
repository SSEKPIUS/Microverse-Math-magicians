import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import calculate from '../logic/calculate';
import operate from '../logic/operate';
import App from '../App';
import Error from '../components/Error';
import Home from '../components/Home';
import Key from '../components/key';
import Quote from '../components/Quote';

Enzyme.configure({ adapter: new Adapter() });
beforeEach(() => {
  jest.resetAllMocks();
});

describe('Math Magicians: tests', () => {
  describe('React components', () => {
    test('AP renders correctly enzyme', () => {
      const wrapper = shallow(<App />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('Error renders correctly enzyme', () => {
      const wrapper = shallow(<Error />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('Home renders correctly enzyme', () => {
      const wrapper = shallow(<Home />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('Key renders correctly enzyme', () => {
      const wrapper = shallow(<Key />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('Quote renders correctly enzyme', () => {
      const wrapper = shallow(<Quote />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('operate.js test', () => {
    test('AC', () => {
      expect(
        calculate({ total: null, next: null, operation: null }, 'AC'),
      ).toMatchObject({ total: null, next: null, operation: null });
    });

    test('Addition', () => {
      expect(
        calculate({ total: 4, next: 2, operation: '+' }, '='),
      ).toMatchObject({ total: '6', next: null, operation: null });
    });

    test('Subtraction', () => {
      expect(
        calculate({ total: 4, next: 2, operation: '-' }, '='),
      ).toMatchObject({ total: '2', next: null, operation: null });
    });
  });

  describe('calculate.js test', () => {
    test('Addition', () => {
      expect(operate(4, 4, '+')).toBe('8');
    });

    test('Subtraction', () => {
      expect(operate(5, 4, '-')).toBe('1');
    });

    test('Multiplication', () => {
      expect(operate(5, 4, 'x')).toBe('20');
    });

    test('Division', () => {
      expect(operate(10, 2, '÷')).toBe('5');
    });

    test('Modulo', () => {
      expect(operate(10, 2, '%')).toBe('0');
    });
  });
});
