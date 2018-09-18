import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ServantList from 'components/shared/ServantList';

import { fetchAll } from 'actions/servants';

const Wrapper = styled.section``;

// const servants = Array(10).fill({});

class Home extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { servants, fetchAll } = this.props;

    if (servants.length === 0) {
      await fetchAll();
    }
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    const { servants } = this.props;

    return (
      <Wrapper>
        <ServantList servants={servants} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    servants: state.servants,
  };
}

export default connect(
  mapStateToProps,
  { fetchAll },
)(Home);
