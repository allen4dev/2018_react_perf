import React from 'react';

import Avatar from './Avatar';

function renderAvatar(id) {
  return <Avatar key={id} id={id} />;
}

const AvatarList = ({ ids }) => {
  return <div>{ids.map(renderAvatar)}</div>;
};

export default AvatarList;
