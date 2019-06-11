import React from 'react';

import Avatar from '../Avatar';

const Thumb = ({ src, alt, ...props }) => (
  <div>
    <Avatar src={src} alt={alt} />
  </div>
);

export default Thumb;
