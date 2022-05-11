import React from 'react';

// style
import './avatar.style.scss';

function Avatar({ src }:any) {
  return (
    <img
      className="avatar"
      src={src}
      alt="Avatar"
    />
  )
}

export default Avatar;