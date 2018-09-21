import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';

const Wrapper = styled.section`
  border: 4px solid #bada55;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 0.5rem;
`;

function renderAvatar(id) {
  return <Avatar key={id} id={id} />;
}

const AvatarList = ({ ids }) => {
  return <Wrapper>{ids.map(renderAvatar)}</Wrapper>;
};

export default AvatarList;
