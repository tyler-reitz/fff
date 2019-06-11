import React from 'react';
import { shallow } from 'enzyme';

import Pane from './';

import { users } from '../../../db/db.json';
const [ user, ...rest ] = users;


it("renders", () => {
  const wrapper = shallow(<Pane />);
  expect(wrapper.length).toBe(1);
});

it("renders a Thumb", () => {
  const wrapper = shallow(<Pane user={user} />);
  expect(wrapper.find('Thumb').length).toBe(1);
});

it("passes an img url to Thumb", () => {
  const wrapper = shallow(<Pane user={user} />);
  expect(wrapper.find('Thumb').props().src).toBe(user.avatar);
});

it("passes alt text to Thumb", () => {
  const wrapper = shallow(<Pane user={user} />);
  expect(wrapper.find('Thumb').props().alt).toBe(user.name);
});

it("renders a description", () => {
  const wrapper = shallow(<Pane user={user} />);
  expect(wrapper.find('p').text()).toBe(user.company.catchPhrase);
});
