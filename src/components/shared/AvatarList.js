import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';

import Avatar from './Avatar';
import ServantCard from './ServantCard';
import Toggle from './Toggle';

const Wrapper = styled.section``;

const List = styled.section`
  border: 4px solid #bada55;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 0.5rem;
`;

const LoadingComponent = () => {
  return <h1>Loading...</h1>;
};

const LoadableModal = Loadable({
  loader: () => import('./Modal.js'),
  loading: LoadingComponent,
});

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
                  <LoadableModal close={toggle}>
                    <ServantCard id={this.state.selected} />
                  </LoadableModal>
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
