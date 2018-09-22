import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchServant } from 'actions/servants';

const Wrapper = styled.article`
  background-color: white;
  padding: 1rem;
  height: 80%;
`;

const Pre = styled.pre`
  height: 100%;
  overflow-y: scroll;
`;

class ServantCard extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { id, servant, fetchServant } = this.props;

    if (!servant) {
      await fetchServant(id);
    }

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    const { servant } = this.props;

    return (
      <Wrapper>
        <Pre>
          <code>{JSON.stringify(servant, undefined, 2)}</code>
        </Pre>
      </Wrapper>
    );
  }
}

function mapStateToProps(state, { id }) {
  return {
    servant: state.servants.entities[id],
  };
}

export default connect(
  mapStateToProps,
  { fetchServant },
)(ServantCard);
