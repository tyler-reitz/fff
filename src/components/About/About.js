import React, { useState, useEffect } from 'react';
import './About.css';

import Pane from '../Pane';
import Thumb from '../Thumb';
import { fetchUsers } from '../../utils/fetchUsers';

const About = ({ users: usersProps = [] }) => {
  const [ users, setUsers ] = useState(usersProps || []);
  const [ featured, setFeatured ] = useState(usersProps.slice(0,3) || []);

  useEffect(() => {
    if (!users.length) {
      fetchUsers('http://localhost:5000/users')
        .then(resp => {
          setUsers(resp);
          setFeatured(resp.slice(0, 3));
        });
    }
  }, []);

  const updateFeatured = (user) => {
    const featIdx = featured.findIndex((f) => f.id === user.id);

    switch (featIdx) {
      case 0:
        break;
      case 1:
        setFeatured([ featured[1], featured[0], featured[2] ]);
        break;
      case 2:
        setFeatured([ featured[2], featured[0], featured[1] ]);
        break;
      default:
        setFeatured([ user, featured[0], featured[1] ]);
    }
  };

  return (
    <div className="About">
      {featured.map(feat => (
        <Pane key={feat.id} user={feat} />
      ))}
      {users.map(user => (
        <Thumb
          onClick={() => updateFeatured(user)}
          key={user.id}
          id={user.id}
          src={user.avatar}
          alt={user.name}
        />
      ))}
    </div>
  )
};

export default About;
