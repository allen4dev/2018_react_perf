import React, { Component } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import Servantlist from './ServantList';

import { fetchAll } from 'actions/servants';

const Wrapper = styled.section`
  border: 4px solid #bada55;
  height: 100vh;
`;

class Layout extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { ids, fetchAll } = this.props;

    if (ids.length === 0) {
      await fetchAll();
    }

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    const { ids } = this.props;

    return (
      <Wrapper>
        <Servantlist ids={ids} />;
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    ids: state.servants.byId,
  };
}

export default connect(
  mapStateToProps,
  { fetchAll },
)(Layout);
