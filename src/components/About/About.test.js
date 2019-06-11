import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

import { users } from '../../../db/db.json';

it('renders without crashing', () => {
  const wrapper = shallow(<About />);
  expect(wrapper.length).toBe(1);
});
