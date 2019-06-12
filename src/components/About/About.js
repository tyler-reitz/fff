import './About.css';
import React, { useState, useEffect } from 'react';

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
          setFeatured(resp.slice(0, 3).map(f => ({ ...f, key: Math.random() })));
        });
    }
  }, []);

  const updateFeatured = (user) => {
    const featIdx = featured.findIndex((f) => f.id === user.id);

    switch (featIdx) {
      case 0:
        setFeatured([
          { ...user, key: Math.random() },
          featured[1],
          featured[2]
        ])
        break;
      case 1:
        setFeatured([
          { ...featured[1], key: Math.random() },
          { ...featured[0], key: Math.random() },
            featured[2]
        ]);
        break;
      case 2:
        setFeatured([
          { ...featured[2], key: Math.random() },
          { ...featured[0], key: Math.random() },
          { ...featured[1], key: Math.random() },
        ]);
        break;
      default:
        setFeatured([
          { ...user, key: Math.random() },
          { ...featured[0], key: Math.random() },
          { ...featured[1], key: Math.random() },
        ]);
    }
  };

  return (
    <div className="About">
      {featured.map((feat, idx) => (
        <Pane key={feat.key} user={feat} idx={idx} />
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
