import './Pane.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import Thumb from '../Thumb';

const Pane = ({ user, idx, ...props }) => {
  const springProps = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: {
      opacity: 0,
      transform: idx > 0
        ? 'translateX(-100%)'
        : 'translateY(100%)',
    }
  });

  return (
    <animated.div style={springProps} className="Pane">
      <Thumb src={user.avatar} alt={user.name} />
      <p className="Pane--description">{user.company.catchPhrase}</p>
    </animated.div>
  )
};

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
