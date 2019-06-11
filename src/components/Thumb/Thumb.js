import React from 'react';

import Avatar from '../Avatar';

const Thumb = ({ src, alt, onClick, ...props }) => (
  <div onClick={onClick}>
    <Avatar src={src} alt={alt} />
  </div>
);

export default Thumb;
