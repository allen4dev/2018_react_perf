import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import PerformantList from 'components/shared/PerformantList';

import { fetchAll } from 'actions/servants';

const Wrapper = styled.section`
  width: 80vw;
  height: 90vh;
`;

class Home extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { byId, fetchAll } = this.props;

    if (byId.length === 0) {
      await fetchAll();
    }
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    const { byId } = this.props;

    return (
      <Wrapper>
        <PerformantList ids={byId} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const { byId } = state.servants;

  return {
    byId,
  };
}

export default connect(
  mapStateToProps,
  { fetchAll },
)(Home);
