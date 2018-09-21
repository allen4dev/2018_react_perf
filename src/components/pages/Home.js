import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AvatarList from 'components/shared/AvatarList';

import { fetchAvatars } from 'actions/avatars';

const Wrapper = styled.section`
  width: 80vw;
  height: 90vh;
`;

class Home extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { byId, fetchAvatars } = this.props;

    if (byId.length === 0) {
      await fetchAvatars();
    }
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;

    const { byId } = this.props;

    return (
      <Wrapper>
        <AvatarList ids={byId} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const { byId } = state.avatars;

  return {
    byId,
  };
}

export default connect(
  mapStateToProps,
  { fetchAvatars },
)(Home);
