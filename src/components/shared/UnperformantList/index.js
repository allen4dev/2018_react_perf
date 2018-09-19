import React from 'react';
import styled from 'styled-components';

import Servant from './Servant';

const Wrapper = styled.section`
  border: 4px solid red;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 0.5rem;
  overflow-y: scroll;
`;

const UnperformantList = ({ servants }) => {
  return (
    <Wrapper>
      {servants.map(servant => (
        <Servant key={servant.id} servant={servant} />
      ))}
    </Wrapper>
  );
};

export default UnperformantList;
