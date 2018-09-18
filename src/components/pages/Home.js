import React, { Component } from 'react';
import styled from 'styled-components';

import ServantList from 'components/shared/ServantList';

import api from 'api';

const Wrapper = styled.section``;

const servants = Array(10).fill({});

class Home extends Component {
  async componentDidMount() {
    const response = await api.servants.all();
    debugger;
  }

  render() {
    return (
      <Wrapper>
        <ServantList servants={servants} />
      </Wrapper>
    );
  }
}

export default Home;
