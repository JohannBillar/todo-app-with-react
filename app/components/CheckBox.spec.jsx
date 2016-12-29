import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import CheckBox from './CheckBox';
import renderer from 'react-test-renderer';
 
test('CheckBox should render a checkbox', () => {
  const props = {
    isChecked: false,
    id: 0,
    children: 'test.number',
    toggleCheckbox: jest.fn(),
  };

  // let toggleCheckbox = jest.fn();
  // toggleCheckbox.mockReturnValueOnce(true);

  const component = shallow(
    <CheckBox
      {...props}
    />
  );

  let tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});
