import React from 'react';
import styled from 'styled-components';

import src from 'images/default.jpg';

const Wrapper = styled.article`
  border: 4px solid #bada55;
`;

const Title = styled.h3`
  background-color: #bada55;
  font-size: 1rem;
  padding: 0.5rem;
  text-align: center;
`;

const Photo = styled.figure``;
const Img = styled.img`
  display: block;
  max-width: 100%;
`;

const Servant = () => {
  return (
    <Wrapper>
      <Title>Miyamoto musashi</Title>
      <Photo>
        <Img src={src} />
      </Photo>
    </Wrapper>
  );
};

export default Servant;
