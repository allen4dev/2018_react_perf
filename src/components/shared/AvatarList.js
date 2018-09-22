import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';
import Modal from './Modal';
import ServantCard from './ServantCard';
import Toggle from './Toggle';

const Wrapper = styled.section``;

const List = styled.section`
  border: 4px solid #bada55;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 0.5rem;
`;

class AvatarList extends Component {
  state = {
    selected: '1',
  };

  selectServant = id => {
    this.setState({ selected: id });
  };

  render() {
    return (
      <Wrapper>
        <Toggle>
          {({ on, toggle }) => {
            return (
              <Fragment>
                <List>
                  {this.props.ids.map(id => (
                    <Avatar
                      key={id}
                      id={id}
                      onClick={toggle}
                      select={this.selectServant}
                    />
                  ))}
                </List>
                {on && (
                  <Modal close={toggle}>
                    <ServantCard id={this.state.selected} />
                  </Modal>
                )}
              </Fragment>
            );
          }}
        </Toggle>
      </Wrapper>
    );
  }
}

export default AvatarList;
