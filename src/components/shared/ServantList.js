import React from 'react';
import styled from 'styled-components';

import Servant from './Servant';

const Wrapper = styled.section`
  border: 4px solid red;
  margin: auto;
  padding: 0.5rem;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: 0.5rem;
`;

const ServantList = ({ servants }) => {
  return (
    <Wrapper>
      {servants.map(({ servant }) => (
        <Servant servant={servant} />
      ))}
    </Wrapper>
  );
};

export default ServantList;
