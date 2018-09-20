import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import Home from 'components/pages/Home';
// import Layout from 'playgrounds/virtualized/Layout';

import theme from './theme';

import store from './store';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Home />
          </Wrapper>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
