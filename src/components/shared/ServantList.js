import React from 'react';
import styled from 'styled-components';

import Servant from './Servant';

const Wrapper = styled.section``;

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
