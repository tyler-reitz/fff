import React from 'react';

const Avatar = ({ src, alt, ...props }) => (
    <img src={src} alt={alt} {...props} />
);

export default Avatar;
