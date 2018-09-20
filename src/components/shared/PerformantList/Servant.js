import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

class Servant extends Component {
  render() {
    const { servant, style } = this.props;

    return (
      <Wrapper style={style}>
        <Title>{servant.name}</Title>
        <Photo>
          <Img src={servant.img4} />
        </Photo>
      </Wrapper>
    );
  }
}

const makeMapStateToProps = (initialState, initialOwnProps) => {
  const { id } = initialOwnProps;
  const mapStateToProps = state => {
    const { servants } = initialState;
    const servant = servants.entities[id];

    return {
      servant,
    };
  };

  return mapStateToProps;
};

export default connect(makeMapStateToProps)(Servant);
