import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ListOne from 'components/shared/UnperformantList/ServantList';
import ListTwo from 'components/shared/PerformantList/ServantList';

import { fetchAll } from 'actions/servants';

const Wrapper = styled.section`
  text-align: center;
`;

const Input = styled.input`
  margin: 1rem;
  padding: 0.5rem;
  height: 4rem;
`;

const Lists = styled.section`
  display: grid;
  height: calc(100vh - 4rem);
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

// const servants = Array(10).fill({});

class Home extends Component {
  state = {
    loading: true,
    value: '',
  };

  async componentDidMount() {
    const { servants, fetchAll } = this.props;

    if (servants.length === 0) {
      await fetchAll();
    }
    this.setState({ loading: false });
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    const { servants, byId } = this.props;

    return (
      <Wrapper>
        <Input
          type="text"
          placeholder="Writte something"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Lists>
          <ListOne servants={servants} />
          <ListTwo ids={byId} />
        </Lists>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const { entities, byId } = state.servants;
  const servants = Object.values(entities);

  return {
    servants,
    byId,
  };
}

export default connect(
  mapStateToProps,
  { fetchAll },
)(Home);
