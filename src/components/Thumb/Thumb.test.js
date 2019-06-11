import React from 'react';
import { shallow } from 'enzyme';

import Thumb from './';

import { users } from '../../../db/db.json';
const [ user, ...rest ] = users;

it("renders", () => {
  const wrapper = shallow(<Thumb />);
  expect(wrapper.length).toBe(1);
});

it("renders an image", () => {
  const wrapper = shallow(<Thumb />);
  expect(wrapper.childAt(0).name()).toBe('Avatar');
})

it("passes an img url to its children", () => {
  const wrapper = shallow(<Thumb src={user.avatar} />);
  expect(wrapper.childAt(0).props().src).toBe(user.avatar);
})

it("passes alt text to its children", () => {
  const wrapper = shallow(<Thumb alt={user.name} />);
  expect(wrapper.childAt(0).props().alt).toBe(user.name);
})
