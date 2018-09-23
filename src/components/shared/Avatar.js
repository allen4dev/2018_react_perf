import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Photo = styled.figure``;
const Img = styled.img`
  display: block;
  max-width: 100%;
`;

class Avatar extends Component {
  select = () => {
    const { onClick } = this.props;

    this.props.select(this.props.id);
    onClick && this.props.onClick();
  };

  render() {
    const { avatar, onMouseOver } = this.props;

    return (
      <Photo onMouseOver={onMouseOver} onClick={this.select}>
        <Img src={avatar.icon} />
      </Photo>
    );
  }
}

const makeMapStateToProps = (initialState, initialOwnProps) => {
  const { id } = initialOwnProps;

  const mapStateToProps = state => {
    return {
      avatar: state.avatars.entities[id],
    };
  };

  return mapStateToProps;
};

export default connect(makeMapStateToProps)(Avatar);
