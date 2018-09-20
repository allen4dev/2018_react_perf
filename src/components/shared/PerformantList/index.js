import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Servant from './Servant';

const Wrapper = styled.section`
  border: 4px solid red;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 0.5rem;
  overflow-y: scroll;
`;

class PerformantList extends PureComponent {
  render() {
    return (
      <Wrapper>
        {this.props.ids.map(id => (
          <Servant key={id} id={id} />
        ))}
      </Wrapper>
    );
  }
}

export default PerformantList;
