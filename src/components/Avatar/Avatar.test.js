import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './';

import { users } from '../../../db/db.json';
const [ user, ...rest ] = users;

it("renders", () => {
  const wrapper = shallow(<Avatar />);
  expect(wrapper.length).toBe(1);
})

it("renders an image tag", () => {
  const wrapper = shallow(<Avatar />);
  expect(wrapper.type()).toBe('img');
})

it("renders img src url", () => {
  const wrapper = shallow(<Avatar src={user.avatar} />);
  expect(wrapper.props().src).toBe(user.avatar);
})

it("renders alt text", () => {
  const wrapper = shallow(<Avatar alt={user.company.name} />);
  expect(wrapper.props().alt).toBe(user.company.name);
})
