import React from 'react';
import styled from 'styled-components';

import ItemOne from './ItemOne';

const Wrapper = styled.section`
  border: 4px solid red;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 0.5rem;
  overflow-y: scroll;
`;

const ListOne = ({ servants }) => {
  return (
    <Wrapper>
      {servants.map(servant => (
        <ItemOne key={servant.id} servant={servant} />
      ))}
    </Wrapper>
  );
};

export default ListOne;
