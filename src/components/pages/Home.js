import React, { Component } from 'react';
import styled from 'styled-components';

import ServantList from 'components/shared/ServantList';

const Wrapper = styled.section``;

const servants = Array(10).fill({});

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <ServantList servants={servants} />
      </Wrapper>
    );
  }
}

export default Home;
