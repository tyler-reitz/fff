import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

import { users } from '../../../db/db.json';

it('renders without crashing', () => {
  const wrapper = shallow(<About />);
  expect(wrapper.length).toBe(1);
});

it('updates featured users', () => {
  const wrapper = shallow(<About users={users} />);
  wrapper.find('Thumb').at(3).simulate('click');

  const expected = wrapper.find('Thumb').at(3).props().id;
  const received = wrapper.find('Pane').first().props().user.id;

  expect(expected).toBe(received);
})

it('does not add user to feature if already there', () => {
  const wrapper = shallow(<About users={users} />)
  const target = wrapper.find('Thumb').at(0);

  target.simulate('click');

  const received = wrapper.find('Pane').filterWhere(n => n.key() === target.key()).length;
  const expected = 1;

  expect(received).toBe(expected);
})
