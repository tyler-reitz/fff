import React from 'react';
import PropTypes from 'prop-types';

import Thumb from '../Thumb';

const Pane = ({ user,...props }) => (
  <div>
    <Thumb src={user.avatar} alt={user.name} />
    <p>{user.company.catchPhrase}</p>
  </div>
);

Pane.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.shape({
      catchPhrase: PropTypes.string.isRequired
    })
  })
}

Pane.defaultProps = {
  user: {
    avatar: 'http://lorempixel.com/400/200/',
    name: 'name missing',
    company: {
      catchPhrase: 'catchphrase missing'
    }
  }
}

export default Pane;
